// Suggests points and short feedback for a submitted quiz, for the grader to
// review before publishing. Nothing is saved here; the grading page fills in
// its form and the grader still clicks Publish.
//
// Settings (Supabase → Edge Functions → Secrets):
//   DEEPSEEK_API_KEY  (or AI_API_KEY)  the DeepInfra API key. Required.
//   AI_BASE_URL   OpenAI-compatible API address. Default: DeepInfra
//                 (https://api.deepinfra.com/v1/openai)
//   AI_MODEL      model name sent with each request. Default:
//                 deepseek-ai/DeepSeek-V4-Flash-0731 (DeepInfra's cheapest DeepSeek)
//
// Only the question, answer key, points possible, and the member's answer are
// sent to the AI. No names or emails.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function reply(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

type Question = { id: string; position: number; prompt: string; max_points: number };

// Grading criteria: credit for understanding, but missing the single most
// important point costs real points even when everything else is right.
const SYSTEM_PROMPT = `You grade investment banking interview prep quizzes for a student club.

For each question:
1. Read the answer key and decide its CORE POINT: the one idea an interviewer would most expect (for example the right direction of an effect, the key number, or the main reason). Everything else in the key is supporting detail.
2. Compare the member's answer with the key. Judge meaning, not wording.
3. Score it as a share of the question's maximum points:
   - 100%: the core point is correct AND the main supporting details are there.
   - 70-90%: the core point is correct, but some supporting details are missing or imprecise.
   - 25-50%: the member clearly understands the topic, but the core point is missing, wrong, or reversed. Cap the score at 50% in this case, even if everything else is right.
   - 1-25%: shows only a little relevant understanding.
   - 0%: blank, off-topic, or wrong throughout.
4. Round points to the nearest 0.25. Never go above the maximum or below 0.

Feedback to the member: if the answer earns full points, leave feedback as an empty string "". Otherwise write one or two short sentences: say what they got right, then what cost them points. If they missed the core point, name it plainly. Do not paste the whole answer key.
Also write one or two sentences of overall feedback for the whole quiz.

Reply with JSON only, in exactly this shape:
{"grades":[{"question_id":"...","points":0,"feedback":"..."}],"overall_feedback":"..."}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return reply(405, { error: "Use POST." });

  const apiKey = Deno.env.get("DEEPSEEK_API_KEY") ?? Deno.env.get("AI_API_KEY");
  if (!apiKey) {
    return reply(500, { error: "AI grading is not set up: add a DEEPSEEK_API_KEY secret in Supabase." });
  }
  const baseUrl = (Deno.env.get("AI_BASE_URL") ?? "https://api.deepinfra.com/v1/openai").replace(/\/+$/, "");
  const model = Deno.env.get("AI_MODEL") ?? "deepseek-ai/DeepSeek-V4-Flash-0731";

  let attemptId = "";
  try {
    attemptId = String((await req.json())?.attempt_id ?? "");
  } catch {
    return reply(400, { error: "Send { attempt_id }." });
  }
  if (!/^[0-9a-f-]{36}$/i.test(attemptId)) return reply(400, { error: "Send a valid attempt_id." });

  // Read everything as the signed-in grader, so the database's own rules apply.
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });

  const attemptResult = await supabase.from("quiz_attempts")
    .select("id, quiz_id, group_id, status")
    .eq("id", attemptId)
    .maybeSingle();
  if (attemptResult.error || !attemptResult.data) return reply(404, { error: "Submission not found." });
  const attempt = attemptResult.data;

  const canGrade = await supabase.rpc("can_grade_group", { target_group: attempt.group_id });
  if (canGrade.error || canGrade.data !== true) {
    return reply(403, { error: "Only this group's Senior, Vice President, or an Admin can use AI grading." });
  }
  if (!["submitted", "graded"].includes(attempt.status)) {
    return reply(400, { error: "This quiz has not been submitted yet." });
  }

  const [questionResult, responseResult] = await Promise.all([
    supabase.from("quiz_questions").select("id, position, prompt, max_points").eq("quiz_id", attempt.quiz_id).order("position"),
    supabase.from("quiz_responses").select("question_id, response_text").eq("attempt_id", attempt.id),
  ]);
  if (questionResult.error || responseResult.error) return reply(500, { error: "Could not load the submission." });
  const questions = (questionResult.data ?? []) as Question[];
  const keyResult = await supabase.from("quiz_answer_keys")
    .select("question_id, answer_key")
    .in("question_id", questions.map((q) => q.id));
  if (keyResult.error) return reply(500, { error: "Could not load the answer key." });

  const items = questions.map((q) => ({
    question_id: q.id,
    number: q.position,
    question: q.prompt,
    answer_key: keyResult.data?.find((k) => k.question_id === q.id)?.answer_key ?? "",
    max_points: Number(q.max_points),
    member_answer: responseResult.data?.find((r) => r.question_id === q.id)?.response_text ?? "",
  }));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90_000);
  let content = "";
  try {
    const ai = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
      body: JSON.stringify({
        model,
        temperature: 0,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: JSON.stringify({ questions: items }) },
        ],
      }),
    });
    const body = await ai.json().catch(() => null);
    if (!ai.ok) {
      const detail = body?.error?.message ?? ai.statusText;
      return reply(502, { error: "The AI service returned an error (" + ai.status + "): " + detail });
    }
    content = body?.choices?.[0]?.message?.content ?? "";
  } catch (error) {
    const aborted = error instanceof DOMException && error.name === "AbortError";
    return reply(504, { error: aborted ? "The AI took too long. Try again." : "Could not reach the AI service." });
  } finally {
    clearTimeout(timeout);
  }

  let parsed: { grades?: { question_id?: string; points?: unknown; feedback?: unknown }[]; overall_feedback?: unknown };
  try {
    parsed = JSON.parse(content.replace(/^```(?:json)?\s*|\s*```$/g, ""));
  } catch {
    return reply(502, { error: "The AI's reply wasn't in the expected format. Try again." });
  }

  // Keep only known questions, clamp points to 0..max in 0.25 steps, trim feedback.
  const grades = questions.map((q) => {
    const g = parsed.grades?.find((item) => item.question_id === q.id);
    const max = Number(q.max_points);
    const raw = Number(g?.points);
    const points = Number.isFinite(raw) ? Math.min(max, Math.max(0, Math.round(raw * 4) / 4)) : null;
    // Full marks need no comment.
    const feedback = points === max ? "" : typeof g?.feedback === "string" ? g.feedback.trim().slice(0, 600) : "";
    return { question_id: q.id, points, feedback };
  });
  const overall = typeof parsed.overall_feedback === "string" ? parsed.overall_feedback.trim().slice(0, 800) : "";

  return reply(200, { model, grades, overall_feedback: overall });
});
