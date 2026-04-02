// Auto-generated — do not edit directly. Source of truth is questions.json
/** @type {import('../types').Question[]} */
const VALUATION = [
  {
    "id": 85,
    "question": "What are the four main valuation methodologies?",
    "answer": "The four primary approaches are Comparable Companies, Precedent Transactions, Discounted Cash Flow (DCF) Analysis, and Leveraged Buyout (LBO) analysis.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 86,
    "question": "Rank the 4 main methodologies from highest to lowest valuation. Is there a strict order?",
    "answer": "Typically, Precedent Transactions might yield the highest valuations due to control premiums. Comparable Companies often yield a bit lower valuation. A DCF can be higher or lower depending on assumptions, so there's no absolute ranking. An LBO analysis establishes a \"floor valuation\" for a company, as it represents the value required to generate a required internal rate of return (IRR). This valuation should be lower than a DCF since your discount rate (the firm's IRR in case of an LBO) is higher.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 87,
    "question": "When might you not use a DCF in valuation?",
    "answer": "If a company's cash flows are highly unpredictable or if debt and working capital are integral to operations, as in banks. Early-stage firms and biotech with uncertain future cash flows might also make a DCF less reliable.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 88,
    "question": "Aside from the “big three,” what other valuation methodologies exist?",
    "answer": "Additional methods include: Liquidation Valuation Sum-of-the-Parts LBO Analysis Replacement Value M&A Premiums Analysis Future Share Price Analysis",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 89,
    "question": "When would a Liquidation Valuation be most relevant?",
    "answer": "It's frequently used in bankruptcy scenarios to see if equity holders receive any leftover value. It can also help decide if selling assets individually yields more than a going-concern sale.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 90,
    "question": "How does a Sum-of-the-Parts valuation work?",
    "answer": "You value each division or segment separately, then add those valuations together for the total. It's common for conglomerates that have multiple unrelated divisions.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 91,
    "question": "Why might you use an LBO Analysis in valuing a company that isn’t being sold to a private equity firm?",
    "answer": "An LBO can establish a “floor” valuation, reflecting what a financial buyer could pay to achieve a target IRR. Strategic buyers might pay more, but the LBO sets a lower bound.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 92,
    "question": "What are the most commonly used valuation multiples?",
    "answer": "EV/Revenue, EV/EBITDA, EV/EBIT, P/E, and P/BV are commonly used.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 93,
    "question": "Give a few examples of industry-specific multiples. Why do they matter?",
    "answer": "Examples include EV/Unique Visitors for Internet, EV/Proven Reserves for Oil & Gas, and Price/FFO for REITs. They are crucial because different industries have unique key value drivers not captured by standard multiples.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 94,
    "question": "If we use an industry-specific multiple like EV/Scientists or EV/Subscribers, do we typically use Equity Value or Enterprise Value?",
    "answer": "You generally use Enterprise Value because these operational metrics apply to all capital providers.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 95,
    "question": "Does an LBO or a DCF typically produce a higher valuation for a given company?",
    "answer": "A DCF analysis often results in a higher valuation because it estimates the intrinsic value of a business by discounting all future free cash flows plus a terminal value, capturing long- term growth potential. An LBO model, on the other hand, focuses on the returns required by financial sponsors given leverage, debt paydown, and exit multiples, which tends to set a “floor” valuation based on achievable outcomes. However, there’s no absolute rule that one will always be higher — either model can produce a higher valuation depending on the assumptions used. Key differences: A DCF is an intrinsic valuation that captures the present value of projected cash flows plus a terminal value reflecting long-term expectations. An LBO valuation focuses on expected returns to equity holders given leverage, exit multiples, debt paydown, and a target IRR; its valuation tends to reflect what a financial sponsor can realistically pay to hit those return hurdles, which is why it is referred to as a \"floor valuation\".",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 96,
    "question": "How do you usually present different valuation methods to a client or investor?",
    "answer": "Typically with a “football field” chart that shows a range of values derived from each method. This visually communicates how various methodologies imply different valuations.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 97,
    "question": "How might you value a company with no revenue or profit, like a pre-revenue startup?",
    "answer": "You would rely on “creative” multiples such as EV/Users or EV/Traffic. A DCF might be too speculative if you cannot reliably forecast future cash flows.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 98,
    "question": "When using Free Cash Flow multiples, do you pair FCF with Enterprise Value or Equity Value?",
    "answer": "If it is Unlevered FCF, pair it with Enterprise Value. If it is Levered FCF, pair it with Equity Value.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 99,
    "question": "Are there scenarios where you might see Equity Value / Revenue used?",
    "answer": "It's unusual, but might apply to large banks or financial institutions with heavy debt usage or negative enterprise value. Also possibly if you're comparing both financial and non-financial companies together on a single slide.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 100,
    "question": "How do you select Comparable Companies or Precedent Transactions?",
    "answer": "Most commonly, you screen by: Industry Financial metrics (Revenue, EBITDA, etc.) Geography For transactions, also timeframe Industry is often the key factor, and then you refine from there.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 101,
    "question": "Once you select your comps and transactions, how do you use them to value a company?",
    "answer": "You take the median multiples from each set and multiply by the relevant metric for the target. For instance, if the median EV/EBITDA is 7x and your firm's EBITDA is 100 million, its implied EV is 700 million.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 102,
    "question": "What do bankers use valuations for in real life?",
    "answer": "They’re used in pitch books and client presentations to guide expected valuation ranges. They also appear in deal documents (like Fairness Opinions) and feed into merger and LBO models.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 103,
    "question": "A company and its peer have similar growth and margins. Why might one trade at a premium multiple?",
    "answer": "Possibilities include recent earnings beats, patent advantages, or being the market leader. It could also have intangible reasons that cause the market to price it higher.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 104,
    "question": "What are some downsides of using public comps for valuation?",
    "answer": "No two companies are perfectly comparable, so results can be skewed. The stock market can fluctuate or be driven by sentiment. Thinly traded stocks may not reflect true investor views.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 105,
    "question": "How would you account for a strong competitive advantage in your valuation?",
    "answer": "You might use multiples at the higher end of the range. You might add a premium to comps or use more optimistic projections in a DCF.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 106,
    "question": "Do you always pick the median multiple for a group of comps or transactions?",
    "answer": "Usually yes, but not strictly. If your target is underperforming, you might use the 25th percentile. If it’s outperforming, you might use the 75th.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 107,
    "question": "Typically, Precedent Transactions produce higher values than public comps. Any scenario where that might not be true?",
    "answer": "If recent M&A deals were at very low multiples or if the M&A market conditions differ significantly from the public market, transactions might be lower or similar.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 108,
    "question": "What are some flaws with Precedent Transactions?",
    "answer": "They may not be perfectly comparable due to differing deal sizes, structures, and market conditions. Data can be limited, especially for small private deals. Deal prices can be influenced by one-off motivations or synergy assumptions.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 109,
    "question": "Two identical companies are sold to the same buyer at drastically different multiples. Why?",
    "answer": "One may have had more competition in the bidding process. Or perhaps it had recent bad news depressed stock price, or different market sentiment at deal time.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 110,
    "question": "Why might investors prefer EV/EBIT over EV/EBITDA for certain investments?",
    "answer": "Investors may dislike EBITDA because it excludes capital expenditures, which can be significant. EBIT includes depreciation & amortization (D&A), providing a more realistic measure of operating expenses. While EBIT also excludes CapEx, D&A is still a practical proxy for CapEx; it forces you to at least account for asset maintenance. Investors care deeply about the true cash the business generates after reinvestment (which EBIT approximates better than EBITDA).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 111,
    "question": "Compare EV/EBIT, EV/EBITDA, and P/E in terms of what they measure and when you use them.",
    "answer": "EV/EBIT and EV/EBITDA are capital-structure neutral, reflecting value available to both debt and equity investors. P/E factors in capital structure since net income is after interest. EV/EBIT is more relevant if depreciation is sizable, while EV/EBITDA is common where depreciation is smaller.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 112,
    "question": "If you were buying a vending machine company, would you pay more for one that owns or leases machines (same cost)?",
    "answer": "The leased scenario might lead to higher EV/EBITDA because lease costs hit EBITDA, making the multiple appear higher. Owned machines use depreciation (below EBITDA), so EBITDA is higher and the multiple appears lower, potentially making it look cheaper.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 113,
    "question": "How do you value a private company?",
    "answer": "You can still use Comps, Precedents, and a DCF. You might apply a discount to public comps to reflect illiquidity. Data like Beta or share price won't exist, so you estimate from public peers.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 114,
    "question": "Why might we discount public comps for a private target but not discount Precedent Transactions?",
    "answer": "In M&A deals, the buyer acquires the entire company, so shares become illiquid regardless. Public comps assume liquid public shares. For a private firm, you'd discount that because its shares are not publicly traded.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 115,
    "question": "In general, can you use private companies as comps or for WACC in a DCF?",
    "answer": "Not usually, because private firms lack market caps or Betas. You can use them in Precedent Transactions if data is disclosed.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 116,
    "question": "How does the EV/EBITDA multiple help in valuing companies?",
    "answer": "EV/EBITDA provides a capital-structure neutral metric that compares a company's enterprise value to its earnings before interest, taxes, depreciation, and amortization. It's useful for comparing companies within the same industry regardless of their debt levels.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 117,
    "question": "In what industries is EV/EBITDA commonly used and why?",
    "answer": "Industries with similar capital structures, such as manufacturing, technology, and consumer goods, often use EV/EBITDA because it allows for comparison of operational efficiency without the distortion of financing choices.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 118,
    "question": "What impact do Stock Options have on the overall valuation of a company?",
    "answer": "Stock Options can dilute share count upon exercise, potentially lowering EPS. When modeling, they should be included in the diluted share count to provide a more accurate Equity Value.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 119,
    "question": "Why might you prefer using a trailing twelve months (TTM) multiple over a forward multiple in comparable companies analysis?",
    "answer": "TTM multiples are based on actual past performance, providing a concrete basis for comparison. Forward multiples rely on forecasts, which can be uncertain and vary based on analyst assumptions.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 120,
    "question": "How does a change in the company’s tax rate affect its DCF valuation?",
    "answer": "Taxes hit both levers in a DCF. Decrease in taxes leads to a higher FCF (good) but also a higher WACC (bad), and vice-versa. FCF: NOPAT = EBIT * (1 − T). Lower T ↑ FCF; higher T ↓ FCF. WACC: Cost of Debt (CoD): kd(1 − T). Lower T ↑ after-tax kd; higher T ↓ it. Cost of Equity (CoE): βL = βU * [1 + (1 − T) * D/E]. Lower T ↑ βL & ke; higher T ↓ both. The overall effect depends on the magnitude of the opposing moves. Typically, for a profitable company, the benefit of higher free cash flows from a tax cut outweighs the negative impact of a higher WACC, leading to an increase in valuation, but it's crucial to model both effects.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 121,
    "question": "What are some key factors to consider when selecting Comparable Companies?",
    "answer": "Key factors include industry sector, size, growth rate, capital structure, geographic location, and profitability metrics to ensure comparability.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 122,
    "question": "How do you handle valuation for banks and financial institutions?",
    "answer": "You often use P/E or P/BV instead of EV-based multiples because debt is central to their business model. You also might use a Dividend Discount Model (DDM) rather than a standard DCF.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 123,
    "question": "Walk me through an IPO valuation. How is it different from a standard private valuation?",
    "answer": "First, you rely on public comps (no Precedents or typical DCF in many cases). You pick a valuation multiple, apply it to the company’s metrics to get implied Equity Value. Then you might subtract IPO proceeds or factor them in to get a per-share price based on total shares (existing plus new).",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 124,
    "question": "How do you “calendarize” a public company’s financials if their fiscal year doesn’t match the calendar year?",
    "answer": "Use the trailing 12 months approach: TTM = Most recent FY + New partial period – Old partial period. Likewise, for forward periods, you adjust their projections to align with the calendar months, often using quarterly filings.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 125,
    "question": "How do you do an M&A premiums analysis?",
    "answer": "You select public deals, focusing on the share price premium paid over the seller's pre-announcement price. For each transaction, calculate the 1-day, 20-day premium, etc. Find medians and apply them to your company’s share price to gauge a possible takeover premium.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 126,
    "question": "Explain a future share price analysis.",
    "answer": "Project the company’s share price in 1 or 2 years using a median P/E from comps. Multiply that median P/E by the future EPS to get future share price, then discount back to Present Value at the Cost of Equity.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 127,
    "question": "Both M&A premiums analysis and Precedent Transactions look at past deals. How do they differ in practice?",
    "answer": "M&A premiums analysis focuses on how much above the seller’s stock price was paid. Precedent transactions look more at valuation multiples like EV/EBITDA rather than per-share premiums.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 128,
    "question": "Walk me through a Sum-of-the-Parts valuation.",
    "answer": "You value each division individually, often using different sets of comps or a mini-DCF per segment. Then you add them up for a total combined valuation.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 129,
    "question": "How do you handle NOLs in a valuation, and why might you include them?",
    "answer": "You project how they offset taxable income, discounting tax savings to today. If they’re significant, you might treat them like a non-operating asset that adds value (similar to cash), although approaches vary.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 130,
    "question": "When pulling equity research, how do you decide whose estimates to use?",
    "answer": "You might use a consensus from multiple analysts or pick the most detailed “middle-of-the-road” forecast. You avoid using only your bank’s research to limit bias.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 131,
    "question": "You have missing info (like EBITDA) for several Precedent Transactions. How do you find it?",
    "answer": "Try press releases, news articles, or deal reports that mention the seller’s numbers. Look at buyer’s equity research or databases like Capital IQ for estimates.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 132,
    "question": "How far back and forward would you go for multiples in Comps or Precedents?",
    "answer": "Typically TTM and then 1–2 years forward. Going beyond 2 years forward is less common, especially for transactions data which is often limited.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 133,
    "question": "Company A has a 40% EBITDA margin, trading at 8x EBITDA. Company B has a 10% margin, trading at 16x. Why is comparing them tricky?",
    "answer": "Huge margin differences can distort multiples. The lower-margin business may show a higher multiple, but it doesn’t necessarily mean it’s overvalued.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 134,
    "question": "How do you approach valuing an oil and gas company?",
    "answer": "You might use multiples like P/MCFE or P/NAV and rely on Reserve Reports for production forecasts. Often you do a Net Asset Value model rather than a traditional DCF, given the importance of commodity prices and reserve depletion.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 135,
    "question": "How do you value a REIT, and why is it different from a normal company?",
    "answer": "REITs often use Price/FFO or Price/AFFO because depreciation is high yet not truly economic. Cap rates and NAV are also key. You may also do property-by-property valuation rather than a corporate-level DCF.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 136,
    "question": "What are the limitations of using EV/EBITDA as a valuation metric?",
    "answer": "EV/EBITDA does not account for capital expenditures, changes in working capital, or differences in depreciation and amortization policies. It may also ignore non-operating income or expenses, making it an incomplete measure of financial health.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 137,
    "question": "How can differences in capital structure between companies affect the EV/EBITDA multiple?",
    "answer": "While EV/EBITDA is designed to be capital-structure neutral, significant differences in debt levels can indicate underlying financial stability or risk. This qualitative aspect can influence investor perceptions and, consequently, the relative multiples.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 138,
    "question": "What is a driver behind choosing an appropriate discount rate in a DCF?",
    "answer": "The discount rate should reflect the company’s cost of capital, incorporating both the cost of equity and the cost of debt, adjusted for the company’s capital structure.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 139,
    "question": "Would you apply a control premium when using Precedent Transactions to value a company? Why or why not?",
    "answer": "No, you would not. Precedent transactions already represent past acquisitions where buyers paid for control, so the control premium is inherently built into the multiples. You only apply a control premium to Public Comps, as public market valuations reflect minority, non-controlling stakes.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 140,
    "question": "How do you incorporate market sentiment into a Comparable Companies Analysis?",
    "answer": "In Public Comps, sentiment is already embedded in trading multiples at the valuation date—you don’t add a separate “sentiment input.” Make it explicit by using a recent pricing date or short VWAP window, leaning on NTM multiples if estimates better capture current conditions, and benchmarking against sector/company historical multiple bands to flag froth or dislocation. For cyclicals, normalize to mid-cycle margins so temporary swings don’t overstate value, show valuation ranges/sensitivities, and triangulate with DCF and precedents.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 141,
    "question": "How does multiple expansion influence Precedent Transactions valuations?",
    "answer": "Precedent Transactions are based on historical deals. If the broader market has experienced multiple expansion (rising valuation multiples) since those deals occurred, the precedent multiples might understate the current value of the target. Conversely, if multiples have contracted, historical precedents might imply an unrealistically high valuation. Analysts must adjust for market conditions between the transaction date and the current date.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 306,
    "question": "Why is EBITDA commonly used in finance?",
    "answer": "It approximates operating cash flow Removes capital structure effects (interest, taxes) It’s widely recognized for comparable valuations using EV/EBITDA Strips out some non-cash or one-time items, although not a perfect measure",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 307,
    "question": "Is a company with a 50x P/E overvalued or undervalued? Why?",
    "answer": "You can't know from P/E alone. Must compare with industry, growth expectations, risk, etc. 50x might be too high if growth doesn’t warrant it, or fair if it’s a fast-growing firm.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 308,
    "question": "What is the difference between intrinsic value and relative value?",
    "answer": "Intrinsic value uses company-specific cash flows/risk (DCF). Relative value compares multiples to similar companies or deals (Comps, Precedents).",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 309,
    "question": "Is relying on an EBITDA multiple always the best approach to value a business? What about P/E?",
    "answer": "It depends on the company’s capital intensity, accounting peculiarities, and industry norms. EBITDA excludes CapEx and changes in working capital, so it can gloss over cash needs. P/E is also influenced by capital structure and tax strategies. The right multiple varies by situation.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 310,
    "question": "If you were deciding on a new investment, what three financial figures would you look at first?",
    "answer": "Revenue history and forecast EBITDA (or net income) trends CapEx or overall FCF requirements These help gauge size, profitability, and how much cash is needed to maintain or grow the business.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 311,
    "question": "What are the differences between EBITDA and FCF?",
    "answer": "EBITDA excludes CapEx, interest, and changes in working capital, while FCF factors them in.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 312,
    "question": "Why would you use EBITDA instead of FCF or EBIT?",
    "answer": "EBITDA normalizes for CapEx and D&A among similar companies, removing financing effects. EBIT might be better for industries where D&A is material, and FCF includes differences in capital structure and CapEx that can muddy comparisons.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 313,
    "question": "Would you pay more for a company with Operating Assets or Operating Leases, assuming the same Enterprise Value?",
    "answer": "You would pay more for the one with operating leases because those lease expenses lower EBITDA, inflating the multiple.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 314,
    "question": "Would you pay a higher multiple for a business that owns its machines (depreciating them) or one that leases them?",
    "answer": "Technically, you would pay a higher multiple for the leasing business because lease payments get deducted from EBITDA, resulting in lower EBITDA and a higher multiple, assuming the same EV. In a business that owns its machines, the D&A costs are not included in EBITDA, so you would pay a lower multiple. Simple Example: Leased Business: $10M gross profit, $5m lease expense, $5m EBITDA Owned Business: $10M gross profit, $5m D&A, $10m EBITDA If you paid the same for both businesses (i.e. $50M), you're paying 10x for the \"lease\" business and 5x for the \"own\" business. In the real world, analysts often use EBITDAR (which adds rent back) to neutralize capital-structure differences before comparing multiples. In the example above, by using EBITDAR, both companies would have a comparable profitability metric of $10M; thus, if they have the same Enterprise Value, their normalized multiples would be identical.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 315,
    "question": "How can you decrease a company’s Equity Value?",
    "answer": "By distributing cash to shareholders through dividends, buying back shares, or increasing net debt. Large investments in cash can also reduce share price perception.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 316,
    "question": "Can Equity Value ever be negative?",
    "answer": "Market Cap (current Equity Value) cannot be negative. However, Shareholders’ Equity on the balance sheet can be negative.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 317,
    "question": "Company A has $30M in EBITDA with a multiple of 10x. It has $250M in senior debt and $100M in subordinated debt. What are these trading at in dollar terms?",
    "answer": "EV = 300M. Senior is fully covered at par (250M). Only 50M remains for the subordinated piece, so it's at 50% of par (50M).",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 652,
    "question": "Two companies have the same financial statements, growth projections, same industry, but trade at different EV/EBITDA multiples.Why could that happen?",
    "answer": "Reported in Allen & Company Interview SA 2026 Valuation Qualitative factors the numbers miss: Perceived risk (contract quality, customer concentration) Management credibility or governance Liquidity of the float or index inclusion M&A rumors or takeover premium Differing ESG profiles or regulatory risks",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 653,
    "question": "If you can't find EBITDA for a company (for example, a private comp), where might you look?",
    "answer": "Reported in Allen & Company Interview SA 2026 Valuation Sources and proxies: Add D&A from the cash‑flow statement to EBIT from the income statement. Use management presentations or lender information memos. Check equity research or industry reports. Ask management directly or infer using peer margins.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 654,
    "question": "What is Beta? Would Bitcoin have a high or low Beta?",
    "answer": "Reported in Allen & Company Interview SA 2026 Valuation Beta measures how much an asset’s returns move relative to the market; it captures systematic risk. Because Bitcoin is highly volatile and tends to swing more than the equity market, it would have a Beta well above 1.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 655,
    "question": "How do rising central bank rates affect the cost of equity?",
    "answer": "Reported in Ardea Partners Interview SA 2025, off-cycle, London office Valuation They raise the risk‑free rate in CAPM and typically widen equity risk premia, so the cost of equity increases.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Ardea Partners"
    ]
  },
  {
    "id": 656,
    "question": "If you have two companies, same EBIT and same Revenue, and one has 90% Debt while the other has 10% Debt, which company has a higher P/E ratio?",
    "answer": "Reported in Bank of America Interview Valuation The company with 90% debt is likely to have higher interest expenses, which reduces net income, holding EBIT constant. With lower net income, for a given share price, the P/E ratio would be higher. Conceptually: P/E = Share Price / (Net Income per share). A smaller denominator (Net Income) makes the ratio higher, all else being equal.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 657,
    "question": "How would you explain the valuation of a private car wash to the car wash owner?",
    "answer": "Reported in Bank of America Interview Valuation You could use a market-based approach (comparable company analysis with local or similar small businesses) and an income-based approach (a simplified DCF). For the DCF, forecast the car wash’s cash flow (revenue from car washes and add-on services, minus operating costs and maintenance expenses) and discount those cash flows at a rate that reflects the business’s risk profile. Because it’s private and possibly small-scale, you might look at local transaction multiples or industry rules of thumb (e.g., a multiple of EBITDA or SDE, Seller’s Discretionary Earnings).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 658,
    "question": "How does a reduction in the corporate tax rate affect a company's valuation?",
    "answer": "Reported in Bank of America Interview New York Office, Superday Valuation A lower corporate tax rate generally increases a company's valuation. Key Impacts: Higher After-Tax Cash Flows: The primary benefit is that lower taxes lead to higher net income and free cash flow for each period. This directly increases the present value of the company in a DCF analysis. Higher WACC (Slightly): A lower tax rate reduces the benefit of the interest tax shield on debt (as deductions are worth less), which increases the after-tax cost of debt. This will cause a slight increase in the WACC. Note: this effect is only meaningful for companies with significant debt; companies with little to no leverage will see minimal WACC impact. Net Effect: The positive impact of significantly higher after-tax cash flows almost always outweighs the negative impact of a slightly higher WACC, resulting in a higher overall valuation. Higher Trading Multiples: Public markets may assign higher multiples as investors are willing to pay more for a company that retains more of its earnings.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 659,
    "question": "If two companies have the same EBITDA, why might they have different P/E multiples?",
    "answer": "Reported in Bank of America Interview M&A, First round Valuation P/E multiples differ based on what's below EBITDA: Depreciation & Amortization: Higher D&A reduces EBIT and Net Income, increasing P/E. Interest Expense: More leverage increases interest, reduces NI, raises P/E. Tax Rate: Higher effective tax rates reduce NI, increasing P/E. Non-Operating Items: One-time gains/losses, equity income, minority interest affect NI but not EBITDA. Share Count: More shares outstanding increase P/E even with same absolute NI. Growth Expectations: Market may value one company's earnings growth prospects more highly. EBITDA is capital structure-neutral; P/E reflects financing decisions, tax efficiency, and growth expectations.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 660,
    "question": "What factors might affect a company's valuation given the current market environment?",
    "answer": "Reported in Bank of America Interview M&A, First round Valuation Current market factors affecting valuation: Interest Rates: Higher rates compress multiples by increasing discount rates and reducing PV of future cash flows. Inflation: Erodes purchasing power and margins; investors demand higher returns. Economic Growth: Slower growth reduces revenue expectations and multiples. Market Sentiment: Risk-on vs. risk-off environments affect investor appetite for growth vs. value stocks. Sector Trends: AI, energy transition, healthcare innovation drive premium multiples in certain sectors. Geopolitical Risk: Trade tensions, conflicts create uncertainty, compressing valuations. Credit Markets: Tighter credit conditions increase cost of capital and reduce leverage availability. M&A Activity: Robust deal flow can drive multiples higher; quiet markets compress them.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 661,
    "question": "When you look at a company's stock price, how do you decide if it's undervalued or overvalued?",
    "answer": "Reported in Bank of America Interview LevFin, First round Valuation Steps to assess valuation: Intrinsic Valuation: Conduct DCF to determine fair value based on fundamentals. Relative Valuation: Compare multiples (P/E, EV/EBITDA, EV/Revenue) to comparable companies and historical ranges. Growth Analysis: Assess if current multiple is justified by growth rate (PEG ratio). Margin Analysis: Evaluate profitability trends and operating leverage. Qualitative Factors: Competitive position, management quality, industry dynamics. Market Sentiment: Understand if stock trades at premium/discount to sector due to temporary factors. If DCF and comps both suggest stock is trading significantly below fair value, and fundamentals support it, the stock is likely undervalued.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 662,
    "question": "What are the differences between the EV/EBITDA, EV/EBIT, and P/E valuation multiples?",
    "answer": "Reported in Bank of America Interview M&A, Second round Valuation EV/EBITDA: Enterprise value to earnings before interest, taxes, depreciation, and amortization. Capital structure-neutral, excludes D&A and interest. EV/EBIT: Enterprise value to earnings before interest and taxes. Includes D&A impact, still capital structure-neutral (excludes interest). P/E: Price to Net Income (earnings). Equity-based multiple, reflects capital structure (interest expense) and taxes. Key differences: EV/EBITDA most commonly used for comparing companies with different leverage and capex intensity. EV/EBIT accounts for D&A differences but still excludes financing impact. P/E reflects full capital structure and tax impact, making it less comparable across different leverage profiles.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 663,
    "question": "Why might two companies with the same revenue trade at different valuation multiples?",
    "answer": "Reported in Bank of America Interview M&A, Second round Valuation Reasons for multiple disparity: Profitability: One has higher EBITDA or net margins, generating more value per dollar of revenue. Growth Rate: Faster-growing company commands premium multiple. Business Model: Recurring revenue (SaaS) valued higher than transactional revenue. Customer Concentration: Diversified customer base reduces risk, supports higher multiple. Competitive Position: Strong moat, brand, or market leadership justifies premium. Capital Intensity: Asset-light business requires less capex, higher FCF conversion, higher multiple. Leverage: Less debt reduces risk and can support higher equity multiple. Industry Dynamics: One operates in higher-growth or more attractive end market.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 664,
    "question": "If one company trades at a P/E of 15x and another at 10x, which would you recommend an investor buy, and what other factors would you consider?",
    "answer": "Reported in Bank of America Interview M&A, Second round Valuation The P/E ratio alone is insufficient to determine which company to buy. Key factors to consider: Growth Rates: Higher growth justifies higher P/E multiples. Risk Profile: Lower risk businesses command higher multiples. Profitability Quality: Sustainable vs. one-time earnings. Industry Dynamics: Sector average multiples and trends. Capital Structure: Debt levels affecting equity value. Market Position: Competitive advantages and market share. The 10x P/E company could be a value opportunity or reflect poor prospects. The 15x company could be fairly valued for growth or overvalued.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 665,
    "question": "What is CAGR, and how do you calculate the CAGR from one year to the next?",
    "answer": "Reported in Barclays Interview Valuation CAGR (compound annual growth rate) is the annualized rate assuming compounding that takes a beginning value to an ending value over n periods (typically n ≥ 2). Formula: (Ending ÷ Beginning)^(1⁄n) − 1. For adjacent years (n = 1), it equals (Ending ÷ Beginning) − 1 (i.e., simple YoY growth).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Barclays"
    ]
  },
  {
    "id": 666,
    "question": "Can you explain what a \"football field\" valuation chart is and what it shows?",
    "answer": "Reported in Barclays Interview Superday Valuation A football field chart is a visual summary of valuation ranges from different methodologies, displayed as horizontal bars resembling a football field. Key features: Each bar represents valuation range from one method (DCF, comparable companies, precedent transactions, etc.) X-axis shows enterprise value or equity value per share Y-axis lists different valuation methodologies Allows quick comparison of how different methods value the company Helps identify consensus valuation range where methods overlap Typically includes current trading price for reference The chart is commonly used in pitch books and fairness opinions to present a comprehensive view of valuation to clients and boards.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Barclays"
    ]
  },
  {
    "id": 667,
    "question": "What are the pros and cons of using the perpetuity growth method vs. the exit multiple method when calculating terminal value?",
    "answer": "Reported in BMO Interview Valuation The perpetuity growth method ties the terminal value to a theoretically infinite series of cash flows growing at a stable rate. It’s more theoretical and heavily dependent on the chosen growth rate, which can significantly change the terminal value. The exit multiple method bases the terminal value on current market conditions and comparable company multiples. It’s often more aligned with how real transactions happen but can be less forward-looking since it relies on a single multiple that might fluctuate over time.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "BMO"
    ]
  },
  {
    "id": 668,
    "question": "How does having a higher percentage of the capital structure in debt change the WACC?",
    "answer": "Reported in Centerview Partners Interview SA 2025, off-cycle, London office Valuation It lowers WACC up to a optimal leverage point, then raises it. Debt is cheaper than equity (tax shield + seniority), so replacing equity with debt pushes WACC down. Beyond a certain leverage, rising default risk drives up the cost of debt and the cost of equity, causing the familiar U‑shape.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Centerview Partners"
    ]
  },
  {
    "id": 669,
    "question": "If you had two identical companies, each with the same products, and one traded at 10x EBITDA and another at 20x, which one would you choose to invest in?",
    "answer": "Reported in Citi Interview Valuation At first glance, the cheaper (10x) might seem more attractive. But you need to investigate reasons why one trades at a higher multiple: better management, higher margins, better growth prospects, or lower risk? If all truly is identical, the lower multiple could suggest undervaluation, but in reality, there might be intangible differences justifying the higher multiple.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 670,
    "question": "Company has Equity Value of $100m, and P/E = 10x. The company reduces operational costs by $10m/year. What is the new Equity Value?",
    "answer": "Reported in Citi Interview Valuation If the P/E is 10x, $10m/year in additional net income (assuming no change in taxes or anything else) translates to an extra $100m in equity value (10 x $10m). So, you’d add that to the existing $100m, resulting in $200m new equity value. In practice, you'd adjust for taxes, but that's the high-level approach.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 671,
    "question": "Two companies have different EV/EBITDA multiples but identical financials. How can that happen?",
    "answer": "Reported in Citi Interview Valuation It could be due to qualitative factors like brand strength, management quality, or growth expectations that aren’t reflected in the current numbers. Also, liquidity and market sentiment can cause one to trade at a higher multiple. Different capital structures or projected changes in margins can drive a divergence in multiples as well.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 672,
    "question": "Strengths and weaknesses of each valuation methodology (DCF, Comps, Precedents, etc.)?",
    "answer": "Reported in Citi Interview Valuation DCF: Theoretically most sound, but heavily dependent on assumptions (WACC, terminal growth rate). Comps: Market-based and easy to calculate, but can be skewed if comps are not truly comparable or the market is over/undervalued. Precedent Transactions: Captures real premiums paid, but every deal is unique in timing, synergy assumptions, and market conditions.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 673,
    "question": "Let's say you have two tech companies with different growth rates. What would be a good ratio to compare these companies?",
    "answer": "Reported in Citi Interview Valuation You might use EV/Revenue or EV/Growth (like EV/EBITDA-growth), especially if they aren’t profitable. Some also look at PEG ratios (P/E to Growth). In high-growth SaaS, EV/ARR (Annual Recurring Revenue) can be more relevant than EV/EBITDA if EBIT is minimal or negative.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 674,
    "question": "Which would have a higher cost of equity – Lyft or Meta?",
    "answer": "Reported in Citi Interview Valuation Lyft. Lyft is smaller and has a higher beta, so its required return is higher than a large, diversified tech company like Meta.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 675,
    "question": "What valuation methodologies are most appropriate for an Initial Public Offering (IPO)?",
    "answer": "Reported in Citi Interview Chicago Office Valuation Primary valuation methods for IPOs: Comparable Company Analysis: Compare to publicly traded peers using multiples like P/E, EV/Revenue, EV/EBITDA. Most commonly used for IPO pricing. Precedent Transaction Analysis: Review recent IPOs in the same sector to establish market-clearing valuation ranges. DCF Analysis: Less emphasis for IPOs due to uncertainty in forecasts for newly public companies, but used as a supplementary check. Comparable companies are most heavily weighted since investors will directly compare the IPO to existing public market alternatives.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 676,
    "question": "Think about a company you are familiar with, perhaps from a previous job. How would you approach valuing that company?",
    "answer": "Reported in Citi Interview Chicago Office Valuation Comprehensive valuation approach: Understand the business: Revenue model, cost structure, competitive position, growth drivers. Comparable Company Analysis: Identify public peers, select appropriate multiples based on business model. Precedent Transactions: Research M&A activity in the sector for acquisition multiples. DCF Analysis: Build financial projections, determine WACC, calculate terminal value, discount to present value. Triangulate: Synthesize results from multiple methodologies to arrive at a valuation range. Tailor your answer to the specific company, highlighting industry-specific considerations.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 677,
    "question": "Company A has a Net Debt of $500 and trades at an EV/EBITDA multiple of 12.5x, while its direct peers trade at an average of 13.0x.What are some potential reasons for this valuation discount?",
    "answer": "Reported in Citi Interview Chicago office, First round Valuation Potential reasons for the discount: Lower growth prospects: Slower revenue or EBITDA growth than peers. Higher risk profile: More cyclical business, geographic concentration, customer concentration. Weaker margins: Lower or declining profitability. Higher leverage: $500 Net Debt may represent higher Debt/EBITDA compared to peers, increasing financial risk. Management or governance concerns: Weak leadership, poor capital allocation. Smaller size: Less liquidity, smaller scale disadvantages. Industry headwinds: Company-specific competitive disadvantages or secular decline.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 678,
    "question": "A company has the following metrics:EBITDA Margin: 20%EV/Revenue Multiple: 3.0xRevenue: $30What is the company's EV/EBITDA multiple?",
    "answer": "A company has the following metrics: EBITDA Margin: 20% EV/Revenue Multiple: 3.0x Revenue: $30 What is the company's EV/EBITDA multiple? Reported in Citi Interview Chicago office, First round Valuation Answer: 15x Calculation: EBITDA = Revenue * EBITDA Margin = $30 * 20% = $6. EV = Revenue * EV/Revenue = $30 * 3.0 = $90. EV/EBITDA = $90 / $6 = 15x.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 679,
    "question": "Should you use forecast or historical multiples for public comps and precedent transactions?Why?",
    "answer": "Why? Reported in Deutsche Bank Interview New York office, First round Valuation Public Comps: Forward Multiples Use forward (forecast) multiples because they reflect market expectations and future growth. Investors value companies based on future earnings potential, not historical performance. Precedent Transactions: Historical Multiples Use historical (LTM or last twelve months) multiples because transactions are priced on actual, verifiable results at deal announcement. Buyers typically base valuations on achieved performance rather than projections. Note: Some practitioners use NTM (next twelve months) for both if forward visibility is strong.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Deutsche Bank"
    ]
  },
  {
    "id": 680,
    "question": "Two identical companies (revenue, growth, risk etc.), one public, one private. Which is valued higher?",
    "answer": "Reported in Evercore Interview Valuation The public company is typically valued higher. This is due to: Liquidity Premium: Public shares are easily traded. Transparency: Greater disclosure and reporting requirements. Access to Capital: Easier access to public markets for funding. Private companies often have a valuation discount for lack of marketability (DLOM).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 681,
    "question": "A pharmaceutical company and an auto manufacturer have identical financials.Which has the larger equity value, and why?",
    "answer": "Reported in Evercore Interview Valuation The pharma company likely has the higher equity value. Pharma typically trades at higher multiples due to growth potential, IP, and less cyclicality.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 682,
    "question": "What are the four most commonly used valuation methods?Explain each one briefly and rank them from highest to lowest valuation.",
    "answer": "Reported in Evercore Interview SA 2026, New York office, First round Valuation Typical ranking (highest headline price to lowest): Precedent Transactions – includes control premiums and expected synergies Discounted Cash Flow – intrinsic value based on future free cash flow Public Trading Comparables – current market sentiment for similar companies Leveraged Buy‑Out – what a financial sponsor can pay while hitting its IRR hurdle Order can shift by cycle or sector, but this is the common rule of thumb.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 683,
    "question": "Describe a lesser-known valuation methodology.Explain how it works and when you would use it.",
    "answer": "Reported in FT Partners Interview Valuation One lesser-known approach is the “Sum of the Parts” (SOTP) analysis for conglomerates or multi-segment companies. You value each division separately using a suitable methodology (Comps, DCF, etc.) and then add them, adjusting for net debt/corporate overhead. It’s used when segments have very different business models, growth rates, or risk profiles.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "FT Partners"
    ]
  },
  {
    "id": 684,
    "question": "How do you build a public-company comparables set?",
    "answer": "Reported in FT Partners Interview Valuation You would look at a few factors: Industry Financials (i.e. Revenue, EBITDA) Geography The industry is the most important factor. Some examples of screens: Retail apparel brands with market caps above $2 billion Enterprise SaaS companies with growth rates above 30%",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "FT Partners"
    ]
  },
  {
    "id": 685,
    "question": "Why might two direct competitors with the same net income trade at different valuation multiples (e.g., P/E)?",
    "answer": "Reported in Goldman Sachs Interview Valuation Multiple factors can cause valuation differences: Growth expectations (higher growth commands higher multiples). Quality of earnings (recurring vs. one-time items). Capital structure (different leverage levels affect risk). Market position and competitive advantages. Management quality and execution track record. Investor sentiment and liquidity.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 686,
    "question": "A company has $175 million of debt and $175 million of cash. What valuation multiples would you prioritize for this company, and how would you typically rank their output from highest to lowest?",
    "answer": "Reported in Goldman Sachs Interview Valuation Prioritize EV-based multiples (EV/EBITDA, EV/Sales) since debt and cash offset. Rank from highest to lowest typically: P/E > EV/EBITDA > EV/Sales. EV/Sales is lowest because Sales is the largest number. EV/EBITDA is higher than EV/Sales but lower than P/E, as EBITDA >Net Income. P/E is usually the highest multiple because Net Income is the smallest denominator (bottom line).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 687,
    "question": "What could a CEO do with an influx of cash to create value? List in order of least to most discretionary.",
    "answer": "Reported in Greenhill & Co. Interview Valuation From least to most discretionary: Maintain required cash for operations Pay down existing debt Invest in core business (capex, R&D) Make acquisitions Pay dividends or repurchase shares",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 688,
    "question": "Explain the relationship amongst P/E, EPS, Price/Share, Market Cap, Net Income, and Share Count.",
    "answer": "Reported in Greenhill & Co. Interview Valuation EPS = Net Income / Shares Outstanding. Price per Share x Shares Outstanding = Market Cap (Equity Value). P/E = Price per Share / EPS = Market Cap / Net Income.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 689,
    "question": "Let's say you have a money tree that produces $100 in perpetuity. How would you value it?",
    "answer": "Reported in Greenhill & Co. Interview Valuation In a simplistic view, value = Cash Flow / Discount Rate. If the discount rate is, say, 5%, the value is $100 / 0.05 = $2,000.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 690,
    "question": "How does increasing taxes impact valuation?",
    "answer": "Reported in Greenhill & Co. Interview First round Valuation Reduces Free Cash Flow Higher statutory taxes reduce after-tax profit/NOPAT, lowering free cash flow and intrinsic value (all else equal). Lowers WACC (with fixed D/E) Bigger interest tax shield lowers after-tax cost of debt (rd × (1–T) ↓). Levering formula βL = βU[1 + (1–T)·D/E]: higher T → smaller (1–T) → lower βL → lower Cost of Equity via CAPM. Net: holding D/E, pre-tax rd, βU, and MRP constant, WACC falls; overall valuation impact usually declines because the FCF hit typically outweighs the discount-rate benefit. Common pitfall: don’t double-count the tax shield—if you add PV(Debt Tax Shield) separately, discount unlevered FCF at the asset rate (no tax in WACC); otherwise use after-tax WACC and don’t add PV(Debt Tax Shield).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 691,
    "question": "If a company trades at 2.0x EV/Sales and 5.0x EV/EBITDA, what is its EBITDA margin?",
    "answer": "Reported in Greenhill & Co. Interview M&A group, First round Valuation Answer: 40% Calculation: EV/Sales = 2.0x means EV = 2.0 × Sales. EV/EBITDA = 5.0x means EV = 5.0 × EBITDA. Therefore: 2.0 × Sales = 5.0 × EBITDA. EBITDA / Sales = 2.0 / 5.0 = 0.40 = 40%.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 692,
    "question": "How could you tell from a company’s trading multiple whether it is attractive to pitch to a potential acquirer?",
    "answer": "Reported in Guggenheim Partners Interview Valuation A lower multiple vs. peers might suggest undervaluation, especially if fundamentals are comparable. Of course, you'd also consider synergy potential, strategic fit, and discount to precedent deals.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 693,
    "question": "A company traded at a 10x EV/EBITDA in 2023 and 12x EV/EBITDA in 2024.What does that imply about the company's cash flows?",
    "answer": "Reported in Guggenheim Partners Interview M&A, superday Valuation Investors now pay more for each dollar of EBITDA. The expansion signals either higher expected growth or lower perceived risk; EV rose faster than EBITDA (or EBITDA fell) even before any new cash flows materialized.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 694,
    "question": "Walk through how to calculate a company's Weighted Average Cost of Capital (WACC), and explain why the cost of debt is tax‑affected.",
    "answer": "Reported in Guggenheim Partners Interview Valuation WACC = Cost of Equity * (% Equity) + Cost of Debt * (% Debt) * (1 - Tax Rate). Cost of Equity via CAPM = Risk‑free rate + β × Equity risk premium. Cost of Debt from current or implied borrowing cost. Interest expense is tax‑deductible, so the after‑tax cost of debt is Cost of Debt × (1 − t), lowering the firm’s effective financing cost.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 695,
    "question": "Back-to-back questions on Beta:What does beta measure, and how is it calculated?What does a beta of −1 or 2 indicate?What does a beta of 0 signify?",
    "answer": "Back-to-back questions on Beta: What does beta measure, and how is it calculated? What does a beta of −1 or 2 indicate? What does a beta of 0 signify? Reported in Guggenheim Partners Interview Valuation Beta measures an asset's systematic risk relative to the market. β = Covariance(stock, market) / Variance(market). Interpretation: β = −1 → moves opposite the market one‑for‑one. β = 2 → twice as volatile as the market in the same direction. β = 0 → no correlation with market movements.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 696,
    "question": "Is Amazon more valuable as a consolidated company, or would shareholder value be maximized by selling off some of its business segments?",
    "answer": "Reported in Guggenheim Partners Interview New York office, Superday Valuation Amazon is likely more valuable consolidated due to synergies and strategic integration. Arguments for staying together: AWS subsidizes retail investments and provides technology backbone for e-commerce operations. Prime ecosystem creates powerful flywheel effects across retail, streaming, and devices. Shared infrastructure, logistics, and data analytics capabilities. Cross-promotional opportunities and customer insights. Arguments for breaking up: AWS might command higher multiples as standalone cloud business. Eliminates conglomerate discount that may exist due to business complexity. Reduces regulatory scrutiny and antitrust risk. Allows pure-play investors to access preferred segments. On balance, synergies likely exceed conglomerate discount, favoring integration.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 697,
    "question": "When is it most appropriate to use EV/EBITDA vs. P/E vs. EV/Revenue for valuation?",
    "answer": "Reported in Guggenheim Partners Interview M&A group, First round Valuation EV/EBITDA: Best for comparing companies with different capital structures. Normalizes for leverage. Most common in M&A and LBO analysis. P/E: Best for profitable companies with comparable capital structures. Equity-focused metric. Common in public market analysis. EV/Revenue: Best for unprofitable or early-stage companies. Useful when EBITDA is negative or not meaningful. Common in high-growth tech sectors.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 698,
    "question": "A company has a $1 billion top line and a 20% EBITDA margin. Comparable companies are valued at 6x EV/EBITDA. What is the company's Enterprise Value (EV)?",
    "answer": "Reported in Houlihan Lokey Interview Valuation To calculate the Enterprise Value (EV): First, calculate EBITDA: $1 billion * 20% = $200 million. Next, apply the EV/EBITDA multiple: EV = 6 * $200 million = $1.2 billion. Therefore, the company's Enterprise Value is $1.2 billion.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Houlihan Lokey"
    ]
  },
  {
    "id": 699,
    "question": "Is EBITDA always the best metric to use for multiples? What are other options?",
    "answer": "Reported in J.P. Morgan Interview Valuation EBITDA is popular because it’s a proxy for operating cash flow, but it can ignore capex, working capital needs, and interest. Alternatives include EBIT, which accounts for depreciation, or EBITDA–Capex, which factors in maintenance spending. For banks, you might use P/E or P/B.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 700,
    "question": "When is it more appropriate to use an EV/EBITDA multiple versus an EV/EBIT multiple in a comparable company analysis, and what are the key considerations?",
    "answer": "Reported in J.P. Morgan Interview New York Office, Second round Valuation Use EV/EBITDA when: Comparing companies with different D&A policies (useful when D&A is accounting-driven rather than economic). Standard practice for most \"capital-light\" industries. Use EV/EBIT when: Analyzing capital-intensive industries (e.g., Manufacturing, Airlines) where D&A represents a real capital cost (proxy for Capex). Companies have similar capital structures. Want a metric closer to operating profit (EBITDA overstates cash flow for Capex-heavy firms).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 701,
    "question": "Select two similar, publicly traded companies in an industry you follow.Why does one trade at a higher valuation multiple than the other?",
    "answer": "Reported in J.P. Morgan Interview Second round Valuation Sample answer framework: Company A trades at higher multiples than Company B because: Higher revenue growth rate (20% vs. 10%). Superior profit margins (30% vs. 20% EBITDA margin). Stronger market position and brand recognition. Better management execution track record. More recurring revenue and customer retention. Lower capital intensity and higher ROIC. Note: Provide specific companies and metrics based on your industry knowledge.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 702,
    "question": "How do you screen for comparable companies (Comps)?",
    "answer": "Reported in Jefferies Interview SA 2026 Valuation Use objective filters first, then qualitative judgment. Industry / business model Geography Size (revenue, EBITDA, market cap) Growth and margin profile Capital structure / leverage Pull the universe from databases (CapIQ, FactSet), apply the filters, then read filings to confirm comparability.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 703,
    "question": "What is a sum-of-the-parts analysis, and why might you use it?",
    "answer": "Reported in Jefferies Interview SA 2026 Valuation SOTP values each business segment separately and adds them to arrive at total enterprise value. It is useful for conglomerates with divisions that trade on different multiples or have distinct risk/growth profiles and can reveal hidden value or break‑up potential.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 704,
    "question": "What is the relationship between Cost of Debt and WACC?",
    "answer": "Reported in Jefferies Interview SA 2026 Valuation Because after‑tax Cost of Debt is usually below Cost of Equity, adding reasonable leverage lowers WACC up to an optimal point. Beyond that point, default risk lifts both the Cost of Debt and the equity risk premium, causing WACC to rise.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 705,
    "question": "Why would a company with a higher growth rate typically command higher valuation multiples?",
    "answer": "Reported in Lazard Interview FIG First round Valuation Higher growth rates increase the present value of future cash flows, justifying higher multiples. Key reasons: Faster earnings growth leads to higher terminal value in DCF analysis. Investors pay premium for companies that can compound returns faster. Growth companies reinvest more efficiently, generating higher ROI. Higher growth often signals competitive advantages, market leadership, or innovation.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 706,
    "question": "How would a company taking on more debt impact WACC?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Initially WACC falls because after‑tax debt is cheaper than equity. Beyond an optimal point, rising default risk pushes up the cost of both debt and equity, so WACC rises.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 707,
    "question": "What is a sum of parts valuation, and how does it work?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Value each business segment independently with the most appropriate method (DCF or multiples), then sum the segment values and subtract net debt and corporate adjustments. This isolates businesses with different growth, risk and capital‑intensity profiles, producing a more precise consolidated valuation.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 708,
    "question": "Why would the market value a company with recurring revenue at a high EV/EBITDA multiple?Follow-up: In what scenario would the market value it lower, even with recurring revenue?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation High multiple drivers: Visibility and stability of cash flow Low churn and strong pricing power Scalable, asset‑light model yielding high margins Lower multiple scenarios: Decelerating growth or rising churn Contractual price resets reducing margin Customer concentration or weak competitive moat Regulatory overhang or high capital needs",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 709,
    "question": "Would you rather invest in a company with 30% margins and 10% market share or a company with 10% margins and 30% market share? What if the industry is nascent and growing?",
    "answer": "Reported in M. Klein & Co. Interview Valuation Typically, higher margins are preferable as they indicate better profitability. However, a higher market share can provide economies of scale and stronger competitive positioning. If the industry is nascent and growing, prioritizing market share might be advantageous to establish a dominant position early on, even if current margins are lower.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 710,
    "question": "What is the problem with the ratio EV/Net Income? What would be a better ratio?",
    "answer": "Reported in M. Klein & Co. Interview Valuation EV/Net Income can be problematic because net income is affected by non-cash items, taxes, and financing decisions, making it less comparable across companies. A better ratio is EV/EBITDA, which focuses on operational performance and is less influenced by capital structure and accounting differences.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 711,
    "question": "Why do bankers use EBITDA to compare businesses? What are some of the drawbacks of EBITDA?",
    "answer": "Reported in M. Klein & Co. Interview Valuation Bankers use EBITDA because it provides a measure of operational performance that excludes the effects of financing and accounting decisions, allowing for easier comparison between companies. However, EBITDA has drawbacks, including ignoring capital expenditures, working capital changes, and not accounting for debt, which can lead to an incomplete view of a company's financial health.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 712,
    "question": "$400mm EBITDA @ 6x multiple, $600mm debt, $200mm cash. What is equity value?",
    "answer": "Reported in M. Klein & Co. Interview SA 2026 Valuation $2.0 B EV = 6 × 400 = 2,400. Equity = EV – Debt + Cash = 2,400 – 600 + 200 = 2,000.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 713,
    "question": "P/E of Nvidia vs. GM — which is higher?",
    "answer": "Reported in M. Klein & Co. Interview SA 2026 Valuation Nvidia. Its rapid growth and capital‑light model command a materially higher earnings multiple than GM’s cyclical, asset‑heavy auto business.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 714,
    "question": "Debt/EBITDA of 5x and Interest Coverage of 4x. What is the interest rate?",
    "answer": "Reported in M. Klein & Co. Interview SA 2026 Valuation 5 %. Interest expense = EBITDA / 4. Debt = 5 × EBITDA. Interest rate = (EBITDA / 4) ÷ (5 × EBITDA) = 1 / 20 = 5%.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 715,
    "question": "Imagine you have a standard x vs. y plot of WACC vs. Leverage.What is the shape of that plot?",
    "answer": "Reported in Moelis & Co. Interview SA 2025, Los Angeles Office, First round Valuation A U‑shaped curve. WACC falls at first as tax‑advantaged debt replaces costlier equity, bottoms out at the optimal capital structure, then climbs as financial distress risk overwhelms the tax benefit.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 716,
    "question": "A firm has Unlevered Beta = 1, Equity Risk Premium = 5%, Risk-free Rate = 5%, Tax = 50%, D/E = 1.Find the cost of equity.",
    "answer": "Reported in Moelis & Co. Interview First round Valuation 12.5% Levered Beta = 1 × [1 + (1 − 50%) × 1] = 1.5. Cost of Equity = 5% + (1.5 × 5%) = 12.5%.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 717,
    "question": "In the context of evaluating a project or investment, what is the fundamental difference between the Internal Rate of Return (IRR) and the Weighted Average Cost of Capital (WACC)?",
    "answer": "Reported in Moelis & Co. Interview Valuation IRR is the discount rate that makes a project’s NPV zero based solely on its cash flows, whereas WACC is the firm’s overall hurdle rate that compensates investors for debt-service risk, equity risk, and potential liquidity constraints. Explanation: IRR is derived strictly from the project’s own cash-flow pattern, without regard to how the project is financed or its liquidity needs. WACC reflects the market-determined cost of debt and equity, including compensation for default risk on debt payments and liquidity premiums. It also accounts for the firm’s capital structure and any potential liquidity issues arising from servicing that debt.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 718,
    "question": "Would you expect the cost of equity to be higher in a typical LBO model or a standard DCF model for the same company? Why?",
    "answer": "Reported in Moelis & Co. Interview Valuation Higher in the LBO because extreme leverage magnifies equity risk, so sponsors target 20–30 % returns versus the 8–12 % required by diversified public investors. Explanation: Greater debt ↑ levered beta and equity volatility. Private‑equity funds demand an illiquidity and control premium. Public DCF uses market‑based ke reflecting lower leverage and diversification.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 719,
    "question": "Please answer the following questions:How much of a premium is typically paid when acquiring a public company?How does tax reform affect valuation and M&A trends?What is your outlook on the M&A market for the upcoming year?",
    "answer": "Please answer the following questions: How much of a premium is typically paid when acquiring a public company? How does tax reform affect valuation and M&A trends? What is your outlook on the M&A market for the upcoming year? Reported in Moelis & Co. Interview New York Office, First round Valuation Part 1: Typical Acquisition Premium Acquisition premiums for public companies typically range from 20-40% over the unaffected stock price (pre-announcement). Premiums vary by industry, deal rationale, competitive dynamics, and strategic value. Part 2: Tax Reform Impact Lower corporate tax rates increase after-tax cash flows, raising DCF valuations and making acquisitions more attractive. Changes to interest deductibility affect LBO financing. Repatriation rules influence cross-border M&A and use of offshore cash. Part 3: M&A Outlook This requires current market knowledge. Structure your answer around: interest rate environment, financing availability, strategic vs. financial buyer activity, regulatory climate, sector-specific trends, and geopolitical factors. Support with recent deal flow data.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 720,
    "question": "What are the four main valuation methodologies?Follow-up 1: What are the key components for each, and how do you derive them?Follow-up 2: Rank them from highest to lowest valuation, and explain why.",
    "answer": "Reported in Moelis & Co. Interview Valuation Four Main Methodologies Comparable Company Analysis (Comps) Precedent Transaction Analysis (Precedents) Discounted Cash Flow (DCF) Leveraged Buyout (LBO) Follow-up 1: Key Components Comps: Trading multiples (EV/EBITDA, P/E) from similar public companies applied to target metrics. Precedents: Acquisition multiples from comparable M&A transactions applied to target. DCF: Project unlevered FCF, discount at WACC, add Terminal Value. LBO: Maximum price a PE firm can pay to achieve target IRR (typically 20-25%). Follow-up 2: Valuation Ranking Highest to Lowest: Precedents > DCF > Comps > LBO Precedents: Include control premium and synergies from actual deals. DCF: Reflects intrinsic value based on cash flows; can be optimistic with aggressive assumptions. Comps: Reflects current market trading (no control premium). LBO: Conservative floor; PE firms need margin of safety for target returns.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 721,
    "question": "Given the following four multiples, which can you use as a valuation metric and which can you not? Why?EV / EarningsEV / EBITDAPrice / EBITDAPrice / Earnings",
    "answer": "Why? EV / Earnings EV / EBITDA Price / EBITDA Price / Earnings Reported in Moelis & Co. Interview Valuation Valid Multiples: EV / EBITDA: ✓ Enterprise metric (EV) to enterprise metric (EBITDA). Price / Earnings: ✓ Equity metric (Price) to equity metric (Earnings). Invalid Multiples: EV / Earnings: ✗ Mismatch. EV is enterprise-level, Earnings is equity-level (post-interest). Price / EBITDA: ✗ Mismatch. Price is equity-level, EBITDA is enterprise-level (pre-interest). Valid multiples compare metrics at the same capital structure level (both enterprise or both equity). Mismatched multiples are conceptually flawed.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 722,
    "question": "What are some different valuation multiples that can be used to value a company?Follow-up 1: Which multiples would be most appropriate for a high-growth technology company?Follow-up 2: What about for a mature industrial company?",
    "answer": "Reported in Moelis & Co. Interview Valuation Common valuation multiples: EV/Revenue, EV/EBITDA, EV/EBIT P/E, P/B, P/S EV/Subscribers, EV/Users (for tech/media) Follow-up 1: High-Growth Tech Company EV/Revenue: Often pre-profitable, so revenue multiples are primary. EV/Gross Profit: If scaling with improving unit economics. EV/Users or EV/ARR: For SaaS or subscription models. Follow-up 2: Mature Industrial Company EV/EBITDA: Standard for cash flow-generating businesses. P/E: Reflects earnings stability. EV/EBIT: For capital-intensive businesses with significant D&A.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 723,
    "question": "Pick an industry sector.How would you create a comparable company set for a company in that sector, and what are some of the key factors you would consider?",
    "answer": "Pick an industry sector. How would you create a comparable company set for a company in that sector, and what are some of the key factors you would consider? Reported in Moelis & Co. Interview Valuation This is an open-ended question. Below is a sample framework applicable to any sector. Steps to create a comparable company set: Industry / Sector: Companies in the same or closely related industry. Business Model: Similar revenue streams, cost structures, and operations. Size: Comparable revenue, EBITDA, or market cap (avoid huge size mismatches). Geography: Similar markets or regions if relevant to business dynamics. Growth Profile: Similar growth rates and stage of maturity. Profitability: Comparable margins and returns. End Markets: Similar customer bases or cyclical exposure. Tailor criteria to the sector. For example, in healthcare, consider therapeutic areas; in retail, consider brick-and-mortar vs. e-commerce.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 724,
    "question": "If you observed two apparently identical companies in the same industry, but one traded at a significantly higher valuation multiple, what are two or three reasons that could explain this difference?",
    "answer": "Reported in Moelis & Co. Interview Valuation Potential reasons for valuation disparity: Growth Prospects: Higher-multiple company has superior revenue/earnings growth trajectory. Profitability & Margins: Better operating leverage, higher EBITDA or net margins. Competitive Position: Stronger brand, market share, or competitive moat. Capital Structure: Lower leverage provides less financial risk. Management Quality: Track record of execution and capital allocation. Market Perception: Better ESG profile, investor sentiment, or sector positioning. Even \"identical\" companies differ in quality of earnings, growth sustainability, risk profile, and strategic positioning—all reflected in valuation.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 725,
    "question": "If one company trades at a 10x multiple and another comparable company trades at 30x, what are some reasons that could explain this difference?",
    "answer": "Reported in Moelis & Co. Interview First round Valuation Potential explanations for multiple disparity: Growth expectations (30x company likely has much higher growth rate). Profitability and margins (higher quality earnings command premiums). Risk profile (lower risk, more predictable cash flows increase multiples). Market positioning and competitive moats. Size and scale differences (larger = liquidity premium). Sector dynamics (one may be in declining industry, other in growth sector). Capital efficiency and ROIC differences. Management quality and execution track record. Cyclicality (defensive businesses command higher multiples than cyclical ones).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 726,
    "question": "If you were trying to decide between selling a machine today or in one year, what would you consider?",
    "answer": "Reported in Morgan Stanley Interview Valuation Compare the present value of the sale price now vs. the expected sale price in one year discounted back, factoring in potential depreciation or usage cost, plus any opportunity cost or additional income from using the machine for that year.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 727,
    "question": "What happens to the cost of debt as a company’s rating improves?",
    "answer": "Reported in Morgan Stanley Interview Valuation As credit ratings improve, lenders perceive lower default risk, which generally lowers the interest rate demanded. Thus, cost of debt decreases, improving the company’s overall WACC if it’s using debt financing.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 728,
    "question": "Tell me about different valuation methods and the pros and cons of each.",
    "answer": "Reported in Morgan Stanley Interview SA 2026, New York office, First round Valuation Public Comps – quick and market‑based; subject to sentiment swings. Precedent Transactions – includes control premium; past deals may be stale or incomparable. Discounted Cash Flow – theoretically sound; highly sensitive to long‑term assumptions. Leveraged Buy‑Out – floors value via IRR constraints; only relevant if sponsors are realistic buyers.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 729,
    "question": "Companies A, B, and C all have the same EBITDA this year.Their EV / EBITDA multiples are 8x, 9x, and 10x now, but forward multiples are 10x, 9x, and 8x respectively.Which company would you invest in?",
    "answer": "Reported in Nomura Greentech Interview Valuation Answer: Company C is the most attractive investment. Here's why: Company A is expected to have declining EBITDA, since its forward multiple rises (8x → 10x). This suggests deteriorating future earnings. Company B is expected to have stable EBITDA, since its forward multiple remains the same (9x). This suggests limited upside compared to growth-oriented peers. Company C is expected to have growing EBITDA, since its forward multiple falls (10x → 8x). This suggests strong EBITDA growth. The market pays a premium for future growth.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Nomura Greentech"
    ]
  },
  {
    "id": 730,
    "question": "Aside from standard metrics like EV/EBITDA or EV/Revenue, what is another key metric you could use to evaluate a company's efficiency?How is it calculated and what does it tell you?",
    "answer": "Reported in Perella Weinberg Interview SF Office Valuation Return on Invested Capital (ROIC) ROIC = NOPAT / Invested Capital, where Invested Capital = Total Debt + Total Equity - Cash. ROIC measures how efficiently a company generates returns from its capital investments. A higher ROIC indicates better capital allocation and operational efficiency. Companies with ROIC > WACC create value; those with ROIC < WACC destroy value. Other Metrics: Cash Conversion Cycle: Measures efficiency in managing working capital. Asset Turnover: Revenue / Total Assets—shows how efficiently assets generate revenue.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 731,
    "question": "How would a greater proportion of debt affect WACC?",
    "answer": "Reported in Piper Sandler Interview SA 2025, off-cycle, London office Valuation Initially lowers WACC thanks to cheaper after‑tax debt, but beyond an optimal leverage point distress risk pushes WACC back up.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Piper Sandler"
    ]
  },
  {
    "id": 732,
    "question": "A company has a $200M market cap and trades at 10x P/E.What is its net income?",
    "answer": "Reported in PJT Partners Interview SA 2025, off-cycle, London office Valuation $20 mm (because $200 mm ÷ 10 = $20 mm).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 733,
    "question": "You have a coverage ratio of 4 and a debt ratio of 2 and need the interest rate.How do you compute it?",
    "answer": "Reported in PJT Partners Interview SA 2025, off-cycle, London office Valuation Let EBIT = 100. Interest = EBIT ÷ Coverage = 100 ÷ 4 = 25. Debt = Ratio × EBIT = 2 × 100 = 200. Cost of debt = Interest ÷ Debt = 25 ÷ 200 = 0.125 (12.5%).",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 734,
    "question": "How do higher central bank rates affect the cost of equity?",
    "answer": "Reported in PJT Partners Interview SA 2025, off-cycle, London office Valuation They raise it. Under CAPM, Cost of Equity = Risk‑free Rate + β × Equity‑Risk‑Premium. When a central bank hikes policy rates, government bond yields—your risk‑free proxy—move up. Holding β and the ERP constant, the higher risk‑free rate flows straight through to a higher cost of equity, raising discount rates and lowering valuations.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 735,
    "question": "What is the Capital Asset Pricing Model (CAPM) formula?Follow-up: What is the relationship between a project's Internal Rate of Return (IRR) and the company's Weighted Average Cost of Capital (WACC)?",
    "answer": "Reported in PJT Partners Interview New York Office Valuation CAPM Formula Cost of Equity = Risk-Free Rate + Beta * (Market Return - Risk-Free Rate) Where Beta measures systematic risk relative to the market, and (Market Return - Risk-Free Rate) is the equity risk premium. IRR vs. WACC Relationship A project should be accepted if its IRR exceeds the company's WACC. WACC represents the minimum required return for the company. IRR is the project's expected return. If IRR > WACC, the project creates value. If IRR < WACC, it destroys value.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 736,
    "question": "If two companies in the same industry trade at different EV/EBITDA multiples (e.g., one at 15x and another at 10x), what could explain this discrepancy?",
    "answer": "Reported in PJT Partners Interview First round Valuation Key factors that explain valuation multiple differences: Growth rates (higher growth commands higher multiples). Profitability and margins (better margins justify premiums). Risk profile (lower risk, more stable cash flows increase multiples). Market position and competitive advantages. Size and scale (larger firms often trade at premiums). Capital structure and leverage differences. Management quality and execution track record. Market sentiment and investor perception.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 737,
    "question": "A company has an equity value of 200M and debt of 300M. It has a purchase price multiple of 10. What is EBITDA?",
    "answer": "Reported in RBC Interview Valuation EBITDA is $50M. If the purchase price multiple is 10x EBITDA, the purchase price refers to enterprise value in many cases. EV = 200 equity + 300 debt = 500. 500 / 10 = 50.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "RBC"
    ]
  },
  {
    "id": 738,
    "question": "How would you value a coffin company?",
    "answer": "Reported in Rothschild Interview Valuation Standard approaches: DCF (project stable demand, typical margins), comparable company multiples (other funeral/casket businesses), and precedent transactions in the death-care industry. A coffin company might have stable, non-cyclical cash flows, so DCF can be quite reliable if you assume consistent mortality rates and cost structure.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 739,
    "question": "When selecting precedent transactions, how far back in time would you typically look for comparable M&A deals?In what situations might you justify looking further back?",
    "answer": "Reported in Rothschild Interview First round Valuation Typical lookback period: 2-3 years for most industries to capture recent market conditions and valuation trends. Situations justifying longer lookback: Limited deal activity (niche industries with infrequent transactions). Market dislocation (recent downturn makes older deals more representative). Cyclical industries (include full cycle to capture normalized multiples). Mega-deals or transformational transactions (few comparables, landmark deals relevant even if older). Stable industry dynamics (if fundamentals unchanged, older deals remain relevant). Always adjust for changes in market conditions, interest rates, and industry dynamics when using older precedents.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 740,
    "question": "A company has an EV/Sales multiple of 5x and an EBITDA margin of 20%.What is its EV/EBITDA multiple?",
    "answer": "Reported in Solomon Partners Interview Full-Time Analyst 2026, NYC Office Valuation Answer: 25x Calculation: EBITDA = Revenue × EBITDA Margin = Revenue × 20% = 0.2 × Revenue. EV = 5x × Revenue. EV/EBITDA = (5 × Revenue) / (0.2 × Revenue) = 5 / 0.2 = 25x.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Solomon Partners"
    ]
  },
  {
    "id": 741,
    "question": "Other than the control premium, what are some reasons that precedent transaction analysis often yields a higher valuation than comparable company analysis?",
    "answer": "Reported in TAP Advisors Interview First round Valuation Reasons for higher transaction multiples: Synergy value: Buyers pay premium for expected cost or revenue synergies. Strategic value: Acquisitions can unlock value not reflected in public trading (market access, technology, talent). Competitive bidding: Multiple bidders drive up price in auctions. Lack of liquidity discount: Private companies trade at discount for illiquidity, but buyers pay for control and eliminate this discount. Tax benefits: Asset step-up and NOL utilization can justify higher prices. Scarcity value: Limited availability of attractive targets in consolidating industries.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "TAP Advisors"
    ]
  },
  {
    "id": 742,
    "question": "Why is debt cheaper than equity?What is the correlation with interest rates?",
    "answer": "Why is debt cheaper than equity? What is the correlation with interest rates? Reported in UBS Interview SA 2026, New York office, Superday Valuation Debt sits higher in the capital stack and receives fixed coupons, so investors demand lower returns than residual equity holders. Interest rates set the risk‑free baseline; as central‑bank rates rise, the absolute cost of debt climbs and the after‑tax advantage versus equity narrows.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "UBS"
    ]
  },
  {
    "id": 743,
    "question": "Is the WACC for a company financed with 100% debt higher than for a company with a mix of debt and equity?",
    "answer": "Reported in Unspecified Interview Valuation Not necessarily, and typically no. While debt has a lower cost than equity, a 100% debt-financed company faces extreme financial risk and distress costs, making that debt very expensive (high interest rates, restrictive covenants). A balanced capital structure typically minimizes WACC by capturing the tax shield benefits of debt without excessive financial distress costs. In practice, 100% debt financing is unrealistic as lenders require equity cushion.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 744,
    "question": "If debt is cheaper than equity, why would a company ever raise capital with equity?",
    "answer": "Reported in Unspecified Interview Valuation Several reasons to use equity despite higher cost: Debt capacity constraints: Lenders limit leverage ratios Financial flexibility: Equity has no mandatory payments, reducing default risk Covenant restrictions: Too much debt limits operational flexibility Credit rating concerns: Excessive debt downgrades ratings Market timing: High stock prices make equity attractive Growth companies: Unstable cash flows make debt risky Beyond a certain point, additional debt becomes prohibitively expensive due to financial distress costs.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 745,
    "question": "Under what circumstances might a valuation from Precedent Transactions be lower than a valuation from Comparable Companies?",
    "answer": "Reported in Unspecified Interview Valuation Scenarios where transaction multiples < trading multiples: Distressed sales: Transactions during downturns or forced sales at discounts Stale precedents: Old transactions when valuations were depressed Current market exuberance: Trading multiples elevated vs. historical M&A Strategic vs. financial buyers: Recent deals dominated by PE with lower prices Market timing: Precedents from bear market, comps from bull market Smaller/lower quality targets: Transaction set includes inferior assets Generally, precedents include control premium, so this situation is less common.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 746,
    "question": "Calculate the EV/Revenue multiple for the following two companies:Company A: $100M Revenue, 30% EBITDA Margin, 8x EV/EBITDA multiple.Company B: $50M Revenue, 20% EBITDA Margin, 10x EV/EBITDA multiple.",
    "answer": "Reported in Unspecified Interview Valuation Company A: EBITDA = $100M * 30% = $30M EV = $30M * 8x = $240M EV/Revenue = $240M / $100M = 2.4x Company B: EBITDA = $50M * 20% = $10M EV = $10M * 10x = $100M EV/Revenue = $100M / $50M = 2.0x",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 747,
    "question": "Why would two companies with identical financial statements trade at different P/E ratios?",
    "answer": "Reported in Unspecified Interview Valuation Multiple factors beyond current financials drive P/E: Growth expectations: Higher expected growth commands higher P/E Risk profile: Lower risk (stable industry) supports higher P/E Management quality: Better leadership drives premium valuation Competitive position: Stronger moat/market share justifies higher P/E Capital structure: Different leverage levels affect equity risk and P/E Market sentiment: Sector rotation, investor preferences Liquidity: More liquid stocks trade at premium Accounting quality: One-time items, aggressive accounting can depress P/E",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 748,
    "question": "A company's WACC is 12%, and its after-tax cost of debt is 7%. Its capital structure is 50% debt and 50% equity.What is the company's cost of equity? (Note: the provided tax rate of 30% is not needed).",
    "answer": "Reported in Unspecified Interview Valuation Answer: 17% Calculation: WACC = (Weight of Debt * Cost of Debt) + (Weight of Equity * Cost of Equity) 12% = (50% * 7%) + (50% * Cost of Equity) 12% = 3.5% + (50% * Cost of Equity) 8.5% = 50% * Cost of Equity Cost of Equity = 17%",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 749,
    "question": "You are reviewing a comparable companies analysis with five companies. Four of them trade in an 8-10x EV/EBITDA range, but one trades at 20x.What are the possible reasons for this outlier, and what steps would you take to investigate?",
    "answer": "Reported in Unspecified Interview Valuation Possible reasons for the outlier: Higher growth expectations or superior growth profile vs. peers Better margins, ROIC, or competitive positioning Recent M&A speculation or takeover premium Unique technology, IP, or strategic assets Temporarily depressed EBITDA (one-time charges, restructuring costs) Different business model or revenue streams Market inefficiency or lack of liquidity Investigation steps: Review financial metrics: growth rates, margins, ROIC, leverage Analyze EBITDA quality: check for one-time items or adjustments Compare business models and end-market exposure Review recent news for M&A activity or strategic announcements Assess whether the company truly belongs in the comp set Consider excluding the outlier or creating a separate category if justified",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 750,
    "question": "Two companies are the same size, in the same industry, and have the same revenue, but different EBITDAs.What are some possible reasons for this discrepancy?",
    "answer": "Reported in Unspecified Interview Superday Valuation Possible reasons for different EBITDA despite same revenue: Different cost structures (COGS, labor efficiency). Different operating expense levels (SG&A, R&D). Different business models (e.g., asset-light vs. asset-heavy). Different pricing strategies affecting margins. Geographic or customer mix differences. Different stages of growth (mature vs. high-growth investing heavily). One-time charges or unusual items affecting operating expenses.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 751,
    "question": "For a high-growth 'Magnificent Seven' company with a positive market outlook, what would you expect its EV/Sales multiple to do over the next few years and why?",
    "answer": "Reported in Unspecified Interview Superday Valuation The EV/Sales multiple would likely decline over time. Growth Maturation: As revenue grows, the denominator increases faster than valuations can expand. Margin Expansion: High-growth companies typically improve profitability over time, making metrics like EV/EBITDA more relevant. Multiple Compression: Markets pay premium multiples for growth; as growth moderates, multiples contract. Base Effect: With a larger revenue base, maintaining extremely high multiples becomes unsustainable. However, if innovation or market dominance accelerates beyond expectations, multiples could remain elevated.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 752,
    "question": "You are given three companies, each with an EBITDA of $100M, and EV/EBITDA multiples of 2.0x, 3.0x, and 4.0x, respectively.Part 1: Plot the Enterprise Value for the three companies on a graph.Part 2: Explain the shape of the graph and your rationale.",
    "answer": "Reported in Unspecified Interview Superday Valuation Part 1: Enterprise Values Company 1: EV = $100M * 2.0x = $200M Company 2: EV = $100M * 3.0x = $300M Company 3: EV = $100M * 4.0x = $400M Part 2: Graph Shape and Rationale The graph shows a linear relationship between EV/EBITDA multiples and Enterprise Value. Each 1.0x increase in multiple adds $100M to Enterprise Value. Higher multiples reflect better growth prospects, margins, or lower risk. The linear relationship demonstrates that valuation scales proportionally with the multiple applied.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 753,
    "question": "Part 1: How does beta typically vary across different industries?Part 2: Which company would you expect to have a higher beta: American Airlines or Amazon? Why?",
    "answer": "Reported in Unspecified Interview Superday Valuation Part 1: Beta by Industry High Beta (> 1.0): Technology, retail, airlines (cyclical, volatile earnings). Low Beta (< 1.0): Utilities, consumer staples, healthcare (stable, defensive). Beta ~1.0: Broad market average. Part 2: American Airlines vs. Amazon American Airlines would have higher beta. American Airlines: Highly cyclical, sensitive to fuel costs, economic downturns, high operational leverage. Amazon: Diversified revenue streams (e-commerce, AWS, advertising), less cyclical, more stable cash flows. Airlines have historically higher betas due to volatility and fixed cost structure.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 754,
    "question": "Why is the tax rate an important consideration in the context of valuation?",
    "answer": "Reported in Wells Fargo Interview Superday Valuation The tax rate directly impacts valuation in several ways: DCF: Tax rate affects after-tax cash flows and WACC (through after-tax cost of debt). Net Income: Higher tax rates reduce NI, lowering equity value in P/E-based valuations. After-Tax Cost of Debt: Debt provides a tax shield; lower tax rates reduce this benefit. Comparability: Companies in different jurisdictions with varying tax rates require adjustments for accurate comparisons. M&A: Tax structure of the deal (asset vs. stock purchase) significantly impacts value to buyer and seller.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Wells Fargo"
    ]
  },
  {
    "id": 755,
    "question": "On a conceptual level, how does a firm create economic value?",
    "answer": "Reported in William Blair Interview Valuation If a firm invests capital at a return that exceeds its cost of capital, it’s creating economic value. In other words, ROIC > WACC means every dollar invested returns more than it costs, leading to value creation for shareholders.",
    "topic": "Valuation",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "William Blair"
    ]
  },
  {
    "id": 756,
    "question": "For a company in the Dow 30, would you expect a valuation from public comps or a DCF to be higher?",
    "answer": "Reported in Bank of America Interview GIG, First round Valuation It depends, but DCF often yields higher valuations. DCF is forward-looking and can reflect long-term growth potential and strategic initiatives not yet priced into the market. Public comps reflect current market sentiment, which may undervalue a Dow 30 company during market downturns or sector-specific headwinds. However, if the company is fairly valued and market multiples are elevated, public comps could be higher. Dow 30 companies are typically mature with stable cash flows, so differences are usually modest. DCF allows more flexibility to model optimistic scenarios.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 757,
    "question": "How would you value Sony after they announced their entry into the electric vehicle space?",
    "answer": "Reported in Bank of America Interview FSG, First round Valuation Use Sum-of-the-Parts (SOTP) valuation: Value Core Businesses: Gaming, entertainment, electronics, financial services using comparable company multiples or DCF. Value EV Business Separately: Use pure-play EV comparable companies (Tesla, Rivian, Lucid) to derive EV/Revenue or EV/Unit multiples. Apply to Sony's projected EV revenue or unit sales. Apply Discount: Sony's EV business is nascent with high uncertainty. Apply 30-50% discount to reflect execution risk and lack of scale. Sum Components: Add discounted EV business value to core business value. Alternatively, use DCF with separate revenue/margin assumptions for EV division. Account for significant capex and cash burn during ramp-up phase. EV business may initially drag on overall valuation but offers long-term optionality.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 758,
    "question": "A company is growing at 10% into perpetuity and has a 4% dividend yield. What should you buy it at?",
    "answer": "Reported in BMO Interview SA 2026, Toronto office, First round Valuation Use Gordon Growth: required return = yield + growth = 14%. Pay 1 / (14% − 10%) = 25× the current dividend to achieve that return.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "BMO"
    ]
  },
  {
    "id": 759,
    "question": "How would you value Tesla, and what key items would you include in a pitchbook for its valuation?",
    "answer": "Reported in Centerview Partners Interview First round Valuation Valuation approaches for Tesla: DCF Analysis: Project vehicle deliveries, ASPs, margins, and potential new revenue streams (energy, autonomy, software). Use scenario analysis given high uncertainty. Trading Comps: Traditional auto OEMs (Ford, GM) and EV pure-plays (Rivian, Lucid). Note Tesla often trades at premium multiples. Precedent Transactions: Limited relevant precedents in EV space. Key Pitchbook Items: Production capacity and delivery forecasts by model. Margin trajectory and cost reduction initiatives. Market share analysis by geography. Regulatory credits and sustainability. Adjacent businesses: energy storage, solar, FSD software. Competitive landscape: traditional OEMs, Chinese EV makers, startups.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Centerview Partners"
    ]
  },
  {
    "id": 760,
    "question": "Two companies, same sizes, industry, growth, but one is American and publicly listed, and the other is private in Colombia. Which has a higher valuation, or are they the same? What factors affect that?",
    "answer": "Reported in Citi Interview Valuation The publicly listed U.S. company often trades at a higher multiple due to greater liquidity, regulatory transparency, and perceived lower risk. The private Colombian company might be discounted for less liquidity, potential political/currency risk, and less disclosure.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 761,
    "question": "A company provides the following financial data:Levered Free Cash Flow (LFCF) Yield: 10%EBITDA: $100Capital Expenditures: $5Interest Expense: $25Decrease in Working Capital: $10Tax Expense: $5What is the company's market capitalization?",
    "answer": "Reported in Citi Interview Chicago office, First round Valuation Answer: $750 Calculation: LFCF = EBITDA - Cash Interest - Cash Taxes - CapEx - Change in NWC. LFCF = $100 - $25 - $5 - $5 - (-$10) = $75. Note: We add back the decrease in NWC since it represents a source of cash. Market Cap = LFCF / LFCF Yield = $75 / 10% = $750.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 762,
    "question": "Calculate Beta given the following information:The correlation coefficient between a stock and the market is 0.5.The ratio of the standard deviation of the stock to the standard deviation of the market is 2.0.",
    "answer": "Reported in Citi Interview Superday Valuation Answer: 1.0 Calculation: Beta = Correlation * (Std Dev Stock / Std Dev Market) Beta = 0.5 * 2.0 = 1.0 A beta of 1.0 means the stock moves in line with the market on average, despite having twice the volatility, because the correlation is only 0.5.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 763,
    "question": "Company A and Company B have identical balance sheets. What are six reasons Company A could have a higher valuation?",
    "answer": "Reported in Citi Interview First round Valuation Six reasons for higher valuation: Higher Revenue Growth: Faster top-line expansion prospects. Better Margins: Superior unit economics or pricing power despite same asset base. Stronger Market Position: Greater competitive moat or brand value. Superior Management: Track record of execution and capital allocation. Lower Risk Profile: More stable, predictable cash flows. Better Industry Dynamics: Operating in more attractive sector with higher growth or profitability.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 764,
    "question": "How would you approach the valuation of a leveraged loan?",
    "answer": "Reported in Credit Suisse Interview Financial Sponsors group, New York Office, Second round Valuation Key approaches for leveraged loan valuation: Discounted Cash Flow: Discount contractual loan payments (principal and interest) at appropriate risk-adjusted rate. Market Comparables: Reference trading prices of similar loans in secondary market. Credit Analysis: Assess borrower's creditworthiness, covenant package, collateral, and recovery prospects. Yield Analysis: Compare yield-to-maturity to market benchmarks for similar credit quality. Consider seniority, security, covenants, and company performance when determining appropriate discount rate.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Credit Suisse"
    ]
  },
  {
    "id": 765,
    "question": "Walk me through some factors about why a company would be valued greater than its peers, both quantitatively and qualitatively.",
    "answer": "Reported in Evercore Interview Valuation Companies may be valued higher than peers due to a combination of quantitative and qualitative factors: Quantitative Factors: Higher revenue growth, indicating faster expansion. Superior profit margins (gross, operating, or net), reflecting greater efficiency. Strong and consistent free cash flows, enhancing valuation. Lower debt levels, reducing financial risk. Higher return metrics like Return on Equity (ROE) or Return on Invested Capital (ROIC). Qualitative Factors: Strong brand recognition and market presence. Competitive advantages such as unique products, technologies, or patents. Experienced and effective management inspiring investor confidence. Strategic partnerships that enhance market reach or operations. Positive market perception due to innovation or growth prospects. Geographic diversification reducing risk and increasing growth opportunities. These factors contribute to higher valuation by demonstrating superior performance, reduced risk, and greater growth potential compared to peers.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 766,
    "question": "ParentCo owns 100% of CoffeeCo (private, $100m EBITDA) and 80% of DonutCo (public, $200m EBITDA, trades at 5x EBITDA).ParentCo: $10/share, 100m shares, $500m debt, $200m cash.What is the implied multiple for CoffeeCo?",
    "answer": "Reported in Evercore Interview Valuation Answer: 5x Calculation: ParentCo Equity Value = $10 * 100m = $1,000m Because ParentCo consolidates DonutCo, we must add Non-Controlling Interest (NCI) to find Total Enterprise Value (TEV). DonutCo TEV = $200m * 5x = $1,000m. NCI = 20% of DonutCo's Equity Value. Assuming DonutCo has no net debt for simplicity, NCI = 20% * $1,000m = $200m. ParentCo TEV = EqV ($1,000m) + Debt ($500m) + NCI ($200m) - Cash ($200m) = $1,500m. Implied CoffeeCo TEV = ParentCo TEV – DonutCo TEV = $1,500m - $1,000m = $500m Implied CoffeeCo Multiple = $500m / $100m = 5x",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 767,
    "question": "Given: P/E=20x, EV/EBITDA=10x, Int Exp=$20M, Int Rate=5%, Dep=$20M, Market Cap=$200M.What is the effective tax rate?",
    "answer": "Reported in Evercore Interview Valuation Answer: 50% Calculation: NI = Market Cap / (P/E) = $200m / 20x = $10M. Debt = Int Exp / Int Rate = $20m / 5% = $400M. EV = Market Cap + Debt = $200m + $400m = $600M (assume no cash, preferred or NCI). EBITDA = EV / (EV/EBITDA) = $600m / 10x = $60M. Pre-Tax Income (EBT) = EBITDA - D&A - Int Exp = $60m - $20m - $20m = $20M. Tax = EBT - NI = $20m - $10m = $10M. Tax Rate = Tax / EBT = $10m / $20m = 50%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 768,
    "question": "Two airlines have the same enterprise value.One uses capital leases, the other operating leases.Which trades at a higher EBITDA multiple?",
    "answer": "Reported in Evercore Interview Valuation The airline with operating leases trades at a higher EBITDA multiple because lease expense reduces EBITDA, making the multiple higher.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 769,
    "question": "P/E is 40x, EV/Revenue is 10x, net income is $15mm, $400mm in debt, no cash.Depreciation is $10mm, EBITDA margin is 50%, and tax rate is 25%. What is the interest rate?",
    "answer": "Reported in Evercore Interview SA 2026, New York office, First round Valuation Equity value = 40 × 15 = $600 mm; EV = 600 + 400 = $1,000 mm. Revenue = 1,000 ÷ 10 = $100 mm; EBITDA = 50% × 100 = $50 mm. EBIT = 50 − 10 = $40 mm; EBT = 15 ÷ 0.75 = $20 mm. Interest expense = 40 − 20 = $20 mm. Interest rate = 20 ÷ 400 = 5%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 770,
    "question": "Why might two companies in the same industry with very similar operations trade at different EV/EBITDA multiples?",
    "answer": "Reported in Evercore Interview Valuation Multiples embed growth, risk and cash‑flow quality; small differences here drive valuation gaps. Key factors: Different forward growth rates. Margin and cost‑structure resilience. Capital intensity and FCF conversion. Return on invested capital. Business‑risk profile: cyclicality, regulatory, concentration. Size, liquidity and trading float. Scarcity value or strategic buyer interest.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 771,
    "question": "A company reports the following financials:Revenue: $100Gross Margin: 60%SG&A: $20 (includes all D&A)P/E Multiple: 25xEV/EBITDA Multiple: 10xTax Rate: 20%Cash: $0Debt: $200 at 5% interestBonds: $200 at 10% interestWhat is the company's Depreciation & Amortization expense?",
    "answer": "Reported in Evercore Interview SF office Valuation Answer: $20 Calculation: Gross Profit = Revenue * Gross Margin = $100 * 60% = $60. EBIT = GP - SG&A = $60 - $20 = $40. Interest Expense = ($200 * 5%) + ($200 * 10%) = $10 + $20 = $30. EBT = EBIT - Interest = $40 - $30 = $10. NI = EBT * (1 - Tax Rate) = $10 * (1 - 20%) = $8. Equity Value = NI * P/E = $8 * 25x = $200. EV = Equity Value + Debt - Cash = $200 + $400 - $0 = $600. EBITDA = EV / (EV/EBITDA) = $600 / 10x = $60. Since SG&A includes D&A, EBIT = GP - SG&A already reflects D&A. EBITDA = EBIT + D&A, so D&A = EBITDA - EBIT = $60 - $40 = $20.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 772,
    "question": "Explain the appropriate use cases for EV/EBIT, EV/EBITDA, and EV/EBITDAR valuation multiples.Follow-up: What are the potential drawbacks or limitations of using EV/EBITDAR?",
    "answer": "Reported in Evercore Interview New York Office, First round Valuation Part 1: Use Cases EV/EBIT: When D&A is consistent across comparables or immaterial. Closer to actual profitability. EV/EBITDA: Standard for most industries. Neutralizes depreciation policy differences and capital intensity variations. EV/EBITDAR: For companies with significant operating leases (airlines, retail). Adds back rent to compare companies with different lease vs. own decisions. Part 2: EBITDAR Limitations Less commonly used, making comparables harder to find. Can overstate profitability by excluding real operating costs. Rent is typically a genuine cash expense unlike D&A. Modern accounting (ASC 842/IFRS 16) capitalizes leases, reducing need for EBITDAR.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 773,
    "question": "You are advising a publicly traded client with two businesses: broadcasting and digital media. The facts are as follows:Broadcasting peers trade at 7x EBITDA.Digital media peers trade at 14x EBITDA.Your client's consolidated company trades at 8x EBITDA.There are no synergies between the two businesses.What strategic recommendation would you make to the client to create value? If they decide to sell a business, which one should they sell and why?",
    "answer": "Reported in Evercore Interview New York Office, Second round Valuation Recommendation: Spin off or sell the digital media business. Rationale: The conglomerate trades at 8x, below the 14x multiple for pure-play digital media companies. Market is applying a conglomerate discount, undervaluing the digital media segment. Separating allows digital media to trade at its natural 14x multiple. Broadcasting would trade at 7x standalone. Sum-of-the-parts valuation exceeds current consolidated 8x multiple. Sell the digital media business to capture the 14x multiple arbitrage and unlock shareholder value.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 774,
    "question": "Part 1: Given a bond's price, par value, coupon rate, and maturity, how do you calculate its Yield to Maturity (YTM)?Part 2: How would the YTM be impacted if the coupon payments were changed from annual to semi-annual?",
    "answer": "Reported in Evercore Interview First round Valuation Part 1: YTM Calculation YTM is the internal rate of return (IRR) that equates the present value of all future cash flows to the current bond price. Approximation Formula: YTM = [C + (F - P) / n] / [(F + P) / 2] C = Annual coupon payment F = Face value P = Current price n = Years to maturity Precise calculation requires iterative solving or financial calculator. Part 2: Semi-Annual Impact Semi-annual coupons typically result in slightly higher effective YTM due to more frequent compounding and reinvestment of coupon payments. The stated YTM with semi-annual payments must be doubled to get the annual rate (bond equivalent yield), but the effective annual rate will be marginally higher than with annual payments.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 775,
    "question": "How would you value a bank such as Goldman Sachs?",
    "answer": "Reported in Goldman Sachs Interview Valuation Banks are often valued using P/B (Price to Book) and P/E multiples. You also look at the Return on Equity (ROE), net interest margin, and capital ratios. A Dividend Discount Model (DDM) is also common, discounting the future dividends (or residual income) by the cost of equity. DCF is less common due to the complexity of bank balance sheets and regulatory capital requirements.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 776,
    "question": "A company believes its forward earnings will be significantly higher than what the market is projecting, resulting in a lower internal forecast for its forward multiple.How would you advise this company?",
    "answer": "Reported in Goldman Sachs Interview New York office Valuation If the company has credible information that forward earnings will exceed market expectations, advisory recommendations include: Enhanced disclosure: Increase transparency through detailed guidance to help the market understand earnings drivers. Investor outreach: Conduct roadshows and investor meetings to communicate the earnings story directly. Management credibility: Ensure track record of meeting/beating guidance to build trust. Strategic communication: Highlight sustainable competitive advantages and growth catalysts. Consider buybacks: If stock is undervalued, share repurchases can signal confidence. Improve business mix: Highlight higher-margin, faster-growing segments that may command premium multiples.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 777,
    "question": "A company has $100m in sales with a 10% EBITDA margin. Which would you prefer: a 10% increase in quantity sold, a 5% increase in price, or a 5% reduction in cost?",
    "answer": "Reported in Greenhill & Co. Interview Valuation The 5% increase in price yields the highest absolute EBITDA ($15M), making it the most attractive (assuming costs scale proportionally and customers are perfectly price inelastic). 10% Increase in Quantity (assuming costs scale proportionally): Revenue = $110M, Costs = $99M → EBITDA = $11M 5% Increase in Price (assuming no drop in volume): Revenue = $105M, Costs = $90M → EBITDA = $15M 5% Reduction in Costs: Revenue = $100M, Costs = $85.5M → EBITDA = $14.5M In practice, if we assume any meaningful price sensitivity on customers, the 5% increase in price would correspond to a drop in volume. Depending on how big that drop in volume is, the 5% reduction in cost may become more desirable.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 778,
    "question": "With a 2x sales multiple and a 5x EBITDA multiple, what is the EBITDA margin?",
    "answer": "Reported in Greenhill & Co. Interview Valuation EV/Sales = 2x and EV/EBITDA = 5x. EBITDA Margin = EBITDA / Sales = (EV / Sales) / (EV / EBITDA) = 2 / 5 = 40%",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 779,
    "question": "Forward revenue multiple is 5x, forward EBITDA multiple is 10x.Two-year forward revenue multiple is 10x, two-year forward EBITDA multiple is 25x.What does this tell you about the business? If EV is 200m, do some calculations.",
    "answer": "Reported in Greenhill & Co. Interview First round Valuation Next Year: Revenue₁ = 200 / 5 = 40 EBITDA₁ = 200 / 10 = 20 Two Years Out: Revenue₂ = 200 / 10 = 20 EBITDA₂ = 200 / 25 = 8 The steep jump in multiples implies earnings are expected to fall sharply—investors think the current downturn is temporary or the company is highly cyclical.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 780,
    "question": "Rank in terms of EV impact: $10 decrease in expenses, $10 decrease in CapEx, or $10 increase in revenue.",
    "answer": "Reported in Greenhill & Co. Interview First round Valuation Most to least accretive: $10 CapEx decrease $10 expense decrease $10 revenue increase CapEx cuts lift FCF dollar‑for‑dollar. Expense savings boost EBIT, but only by 10 × (1–tax). Revenue gains flow through at the after‑tax margin, so impact is smallest.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 781,
    "question": "Why might a company's EV/EBITDA multiple trade at a discount to its peers while its P/E multiple trades at a premium?",
    "answer": "Reported in Greenhill & Co. Interview M&A group, First round Valuation This suggests the company has a favorable capital structure: Lower debt levels reduce EV but not equity value. Less interest expense means higher net income. Lower EV/EBITDA (due to less debt) but higher P/E (due to higher NI). Company may also have significant cash holdings. Example: Low-leveraged company with strong cash generation trades at premium P/E but discount EV/EBITDA.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 782,
    "question": "A company has perpetual free cash flow of $100 million, which is expected to grow at 5% annually.The appropriate discount rate is 10%.The company's market capitalization is $2 billion, based on 100 million shares outstanding at a price of $20 per share.What does this information tell you about the company's valuation?",
    "answer": "Reported in Guggenheim Partners Interview New York office, First round Valuation The company appears undervalued based on DCF analysis. Calculation: DCF Enterprise Value = FCF × (1 + g) / (WACC - g) = $100M × 1.05 / (0.10 - 0.05) = $105M / 0.05 = $2,100M Current Market Cap = $2,000M Implied undervaluation = $100M or 5% Interpretation: Assuming no debt, the intrinsic equity value ($2.1B) exceeds market cap ($2.0B). This could indicate market skepticism about growth assumptions, higher perceived risk, or temporary mispricing. Alternatively, the company may have net debt, which would reconcile the difference.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 783,
    "question": "You are given a company's historical P/E, EV/EBITDA, and EV/EBIT ratios over the past five years.What factors would you analyze to understand the trends in these multiples and what might they indicate about the company's performance and market perception?",
    "answer": "Reported in J.P. Morgan Interview Chicago office Valuation Analyze the following factors to understand multiple trends: Financial Performance: Revenue and earnings growth rates. Margin expansion or contraction (gross, EBITDA, net). Changes in capital intensity (CapEx, D&A levels). Capital Structure: Leverage trends affecting EV/EBITDA vs. P/E divergence (debt increases inflate EV). Interest coverage and debt service capacity. Market Perception: Sector rotation or industry sentiment shifts. Competitive positioning changes. Growth expectations relative to peers. Operational Factors: D&A intensity (high D&A widens gap between EBITDA and EBIT multiples). Quality of earnings and sustainability. Rising multiples generally indicate improving growth prospects or market sentiment; declining multiples suggest deteriorating fundamentals or increased risk.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 784,
    "question": "Under what circumstances could a company's cost of debt exceed its cost of equity?",
    "answer": "Reported in J.P. Morgan Interview Chicago office, Superday Valuation This is rare but can occur when a company is in severe financial distress: High default risk: Debt holders demand extremely high yields due to bankruptcy risk, pushing cost of debt above cost of equity. Equity option value: In distressed scenarios, equity can be viewed as a deeply out-of-the-money call option. If the company survives, equity holders capture upside, potentially lowering implied cost of equity below distressed debt yields. Example: Company trading below liquidation value with bonds yielding 20%+ while equity holders accept lower returns for asymmetric upside potential. Under normal circumstances, cost of equity exceeds cost of debt due to equity's subordinate position in the capital structure.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 785,
    "question": "You are given a table of a company's valuation multiples (EV/EBITDA, EV/EBIT, and P/E) from 2019 to 2020.What would you look for to determine if one of the multiples might not make sense in relation to the others?",
    "answer": "Reported in J.P. Morgan Interview Chicago office, Superday Valuation Check for internal consistency across multiples: EV/EBITDA should be lower than EV/EBIT (since EBITDA > EBIT). If D&A is significant, a large gap between EV/EBIT and EV/EBITDA is expected. Compare P/E movement to EV/EBITDA—divergence may indicate changing leverage or tax rates. Look for anomalies: if EBITDA turned negative while EBIT stayed positive, or unusual changes in capital structure affecting equity vs. enterprise value. Check if Net Debt changed significantly, affecting the relationship between enterprise and equity multiples.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 786,
    "question": "If I were opening a sandwich shop, how should you value it?Follow-up 1: What would you use as the discount rate if you are using a DCF?Follow-up 2: What makes a good sandwich or coffee shop, and how can it be made more competitive?",
    "answer": "Reported in J.P. Morgan Interview Chicago office, Superday Valuation Main Question: Valuation Approach Comparable Company Analysis: Use multiples from similar food service businesses (EV/Revenue, EV/EBITDA). DCF: Project cash flows based on foot traffic, average ticket size, operating margins, and growth assumptions. Asset-Based: Consider real estate, equipment, and working capital. Precedent transactions in the quick-service restaurant space. Follow-up 1: Discount Rate Use a high discount rate (15-25%) reflecting small business risk, limited diversification, operational risk, and lack of liquidity. Higher than typical corporate WACC due to concentrated business risk. Follow-up 2: Competitive Advantages Prime location with high foot traffic. Differentiated menu or unique value proposition. Strong brand and customer loyalty. Operational efficiency and cost management. Quality ingredients and consistent execution.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 787,
    "question": "You are comparing two companies, A and B, which are operationally identical except for their size.Company A: Share price of $10, 100 shares, Net Debt of $100, EBITDA of $100.Company B: Share price of $100, 100 shares, Net Debt of $1,000, EBITDA of $1,100.Based on this information, which company would you prefer to invest in and why?",
    "answer": "Reported in J.P. Morgan Interview New York Office, First round Valuation The choice between Company A and Company B involves a trade-off between value and risk. Analysis: Company A: EV = ($10 × 100) + $100 = $1,100. EV/EBITDA = $1,100 / $100 = 11.0x. Debt/EBITDA = $100 / $100 = 1.0x. Company B: EV = ($100 × 100) + $1,000 = $11,000. EV/EBITDA = $11,000 / $1,100 = 10.0x. Debt/EBITDA = $1,000 / $1,100 = 0.91x. Conclusion: Company B is the superior investment based on these metrics. It trades at a lower valuation multiple (10.0x vs. 11.0x), suggesting it is cheaper, and it also has lower leverage (0.91x vs. 1.0x), indicating it is less risky. Therefore, an investor would prefer Company B as it offers better value with a stronger credit profile.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 788,
    "question": "Two similar companies trade at 15x and 20x EV/EBITDA, respectively.Why might you argue in favor of acquiring the company with the higher multiple?",
    "answer": "Reported in J.P. Morgan Interview SA 2025 Valuation Reasons to acquire the 20x company: Superior Growth: Higher multiple reflects stronger revenue/earnings growth prospects. Quality of Earnings: More recurring revenue, higher margins, better cash conversion. Competitive Advantages: Stronger brand, technology, or market position justifies premium. Synergy Potential: May offer greater cost or revenue synergies post-acquisition. Strategic Fit: Better alignment with acquirer's long-term strategy or capabilities. Lower Risk Profile: More diversified customer base, less cyclical, stronger balance sheet. While the 20x target is more expensive, if it generates superior long-term value through growth and synergies, the higher multiple may be justified.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 789,
    "question": "Answer the following questions:What is your favorite and least favorite valuation method?What happens to WACC if the cost of debt increases? What about the cost of equity?Why would one company have a higher valuation multiple than another?Why might a financial sponsor pay a higher multiple for a company than a strategic acquirer?",
    "answer": "Answer the following questions: What is your favorite and least favorite valuation method? What happens to WACC if the cost of debt increases? What about the cost of equity? Why would one company have a higher valuation multiple than another? Why might a financial sponsor pay a higher multiple for a company than a strategic acquirer? Reported in J.P. Morgan Interview Financial Institutions group, Second round Valuation Part 1: Favorite/Least Favorite Method Sample response: Favorite: DCF (fundamental, captures company-specific growth and risk). Least Favorite: Precedent Transactions (outdated, influenced by market timing). Part 2: WACC Changes Higher cost of debt: WACC increases (debt is now more expensive). Higher cost of equity: WACC increases (equity is now more expensive). Part 3: Multiple Differences Growth prospects, profitability, competitive position, management quality, and risk profile. Part 4: Sponsor Paying More Unusual scenario. Possible reasons: superior operational capabilities, access to cheaper capital, competitive auction, or market timing (hot PE market).",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 790,
    "question": "What is the relationship between a company's Price-to-Book (P/B) ratio and its Return on Equity (ROE)?",
    "answer": "Reported in Lazard Interview Valuation P/B ≈ ROE × (Payout Ratio) ÷ (Cost of Equity - NI Growth Rate). Higher ROE typically drives a higher P/B because investors pay more per book dollar when equity earns superior returns. Terms: P/B (Price-to-Book Ratio): Market price per share divided by book value per share; shows how much investors pay for each dollar of net assets. ROE (Return on Equity): Net income divided by average shareholders’ equity; measures how efficiently a company generates profit from its equity base. Payout Ratio: Dividends paid divided by net income; percentage of earnings returned to shareholders as dividends. NI Growth Rate (g): Sustainable growth rate of net income, calculated as ROE × (1 – Payout Ratio); shows how fast earnings can grow without new equity. Cost of Equity (k): Required return for equity investors, reflecting the risk of the company; often estimated via the Capital Asset Pricing Model (CAPM) or other methods.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 791,
    "question": "Part 1: How would you value your prior employer?Part 2: How would you value one of its specific product lines or business segments?",
    "answer": "Reported in Lazard Interview New York Office Valuation Part 1: Valuing Prior Employer Use standard valuation approaches: DCF (project cash flows, determine WACC, calculate terminal value), comparable company analysis (select public peers, analyze trading multiples), and precedent transactions (review recent M&A deals in the sector). Consider company-specific factors: business model, competitive position, growth profile, margin structure, and capital intensity. Part 2: Valuing Product Line/Segment Segment-level valuation requires allocating or carving out financials: Standalone DCF: Isolate segment revenues, EBITDA, CapEx, and working capital needs. Apply segment-specific risk (adjusted WACC). Comparable approach: Identify pure-play peers in that product category and apply relevant multiples. Consider synergies, shared costs, and whether the segment could operate independently.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 792,
    "question": "What would the WACC be for a company with a beta of 0 and no debt?Follow-up: Given this company with a beta of 0 is very risky, but has a low WACC, how would you proceed with a DCF?",
    "answer": "Reported in Lazard Interview SF Office Valuation Main Question WACC would equal the risk-free rate. WACC = Cost of Equity (no debt). Cost of Equity = Risk-Free Rate + Beta * Market Risk Premium. With Beta = 0: Cost of Equity = Risk-Free Rate. Follow-up Beta of 0 indicates no correlation with market returns, not low risk. The company may have significant idiosyncratic risk not captured by beta. Approaches: Add a company-specific risk premium to the discount rate to reflect operational risks. Adjust cash flow projections to reflect higher uncertainty (use more conservative assumptions or scenario analysis). Use comparable company analysis to cross-check valuation rather than relying solely on DCF.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 793,
    "question": "Company A has an EPS of $7 and a P/E of 15x. If the tax rate drops from 30% to 15%, what is the company's new share price?",
    "answer": "Reported in Lazard Interview SF Office Valuation Answer: $127.50 Calculation: Current Share Price = EPS * P/E = $7 * 15x = $105. Current NI after-tax = $7 per share. Pre-tax income = $7 / (1 - 30%) = $10 per share. New NI = $10 * (1 - 15%) = $8.50 per share (assumes P/E remains constant). New Share Price = $8.50 * 15x = $127.50.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 794,
    "question": "Company has $120M in perpetual unlevered free cash flow; no debt initially.RFR = 4%, Beta = 1, ERP = 6%.Part 1: What is EV?Part 2: Company raises $800M debt, tax rate 25%, interest 10%. What is EV now?Part 3: Assume CoD is 5% and the target capital structure mix is 60% equity / 40% debt. What is WACC?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Part 1: Cost of Equity = 4% + 1 × 6% = 10%. EV = 120 ÷ 0.10 = $1.2 billion. Part 2: Raising $800 million debt and holding the cash leaves EV unchanged at $1.2 billion (Debt and Cash offset). Part 3: WACC (60% equity, 40% debt): After‑tax Cost of Debt = 5% × (1 − 25%) = 3.75%. WACC = 0.6 × 10% + 0.4 × 3.75% = 7.5%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 795,
    "question": "What are the key value drivers in a DCF versus an LBO model?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation DCF drivers: Free Cash Flow growth. Discount rate (WACC). Terminal value assumptions. LBO drivers: Entry valuation. Leverage and cost of debt. Cash‑flow growth and margin expansion. Exit multiple and timing.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 796,
    "question": "Company H has $150 M unlevered FCF, a 2% risk-free rate, a 4%market risk premium, and a beta of 2.What is the EV if the company is all equity?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Answer: $1.5 B Cost of equity = 2% + (2 × 4%)= 10%. With zero-growth perpetuity formula, EV = 150 / 0.10 = 1,500 M ≈ 1.5B.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 797,
    "question": "What are levered and unlevered beta? Why do you adjust beta in that way?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Unlevered beta isolates business risk; levered beta adds financial risk from debt. We un‑lever peers to strip out capital‑structure effects, average them, then re‑lever at target debt‑to‑equity to derive a beta consistent with the firm’s planned leverage in a CAPM cost‑of‑equity.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 798,
    "question": "Two companies, A and B, both trade at 10x EV/EBITDA now. Next year, A is projected to trade at 9x, B at 11x. How is the main driver of returns different between them?",
    "answer": "Reported in LionTree Interview SA 2026 Valuation Company A’s return must come primarily from EBITDA growth and debt pay‑down because the multiple is contracting. Company B benefits from multiple expansion, so valuation re‑rating—not operating growth—will drive a larger share of returns.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 799,
    "question": "What valuation method would you use for a coal mine that will cease operations in ten years?",
    "answer": "Reported in Moelis & Co. Interview First round Valuation Build a finite‑life DCF model that forecasts yearly cash flows until shutdown and adds a salvage value, with no perpetuity. A perpetual multiple or Gordon Growth approach would overstate value because production stops after year 10.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 800,
    "question": "Equity risk premium is 5%, risk-free rate is 5%, unlevered beta is 1, D/E ratio is 1x, and tax rate is 50%.Calculate the cost of equity.",
    "answer": "Reported in Moelis & Co. Interview SA 2026 Valuation Levered β = 1 × [1 + (1 − 50%) × 1] = 1.5. Cost of Equity = 5% + 1.5 × 5% = 12.5%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 801,
    "question": "A company has $120 in EBITDA at a 10x multiple and a 20% EBITDA margin.Debt/EBITDA is 5x, interest rate is 10%, P/E is 20x.What is the tax rate?",
    "answer": "Reported in Moelis & Co. Interview SA 2026 Valuation 50%. EV = 1,200; Debt = 600 ⇒ Equity = 600. NI = 600/20 = 30. EBIT ≈ 120 (assume no D&A). Interest = 60. EBT = 60 ⇒ Taxes = 30 ⇒ 30/60 = 50%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 802,
    "question": "Assume 100 EBITDA at an 8x multiple, 20% margin, 10% cost of debt, 5x Debt/EBITDA, 10x P/E, and 5 in D&A.Calculate the implied tax rate.",
    "answer": "Reported in Moelis & Co. Interview SA 2026 Valuation ≈ 33%. EV = 800; Debt = 500 ⇒ Equity = 300. NI = 300/10 = 30. EBIT = 95. Interest = 50. EBT = 45 ⇒ Taxes = 15 ⇒ 15/45 ≈ 33%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 803,
    "question": "Calculate EV given:LFCF yield = 10%, EBITDA = 150, D&A = 50, interest expense = 10, capex = 30,Increase in A/R = 20, Decrease in A/P = 10, Increase in Inventory = 5, taxes = 25, debt = 300, cash = 75.",
    "answer": "Calculate EV given: LFCF yield = 10%, EBITDA = 150, D&A = 50, interest expense = 10, capex = 30, Increase in A/R = 20, Decrease in A/P = 10, Increase in Inventory = 5, taxes = 25, debt = 300, cash = 75. Reported in Moelis & Co. Interview SA 2026 Valuation EV ≈ 725. EBIT = 100. NI = 65. LFCF = 50 (CFO [65 NI + 50 D&A - 35 NWC] - 30 Capex). Equity Value = 50/0.10 = 500. EV = 500 + 300 − 75 = 725.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 804,
    "question": "Two companies appear very similar, yet one trades at a higher EV/EBITDA multiple.Why might this be the case?What other metrics could you look at?Would a company investing more in Capex have a higher or lower multiple?",
    "answer": "Reported in Moelis & Co. Interview SA 2026 Valuation Possible drivers of multiple divergence: Growth, margin, or cyclicality differences Leverage or liquidity risk IP quality or regulatory moats Geographic or customer concentration Other metrics: EV/Sales, EV/EBIT, P/E, FCF yield, ROIC, leverage ratios. Heavy ongoing Capex depresses FCF, usually leading to a lower EV/EBITDA multiple.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 805,
    "question": "If net interest coverage is 5x and gross debt ratio is 5x, what is the interest rate on the debt?",
    "answer": "Reported in Moelis & Co. Interview SA 2026 Valuation ≈ 4%. Interest = EBITDA/5. Debt = 5 × EBITDA. Interest rate = (EBITDA/5)/(5 × EBITDA) = 1/25 ≈ 4%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 806,
    "question": "How would you value an avocado tree?",
    "answer": "Reported in Moelis & Co. Interview Valuation You can use all the usual valuation approaches—analyzing precedent transactions; running a DCF with alternative model assumptions as benchmarks; assessing liquidation value based on land; and performing comparables analysis. Comparable Analysis: Look at what publicly-traded avocado or citrus farms are valued at on a per-acre or per-tree basis. Precedent Transactions: Analyze recent sales of similar trees or orchards to find a comparable transaction value. Discounted Cash Flow (DCF): Project the cash flows from future avocado harvests, then discount them back to their present value. Liquidation Value: As a floor, calculate the value of the land plus the salvage value of the tree itself (e.g., as timber).",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 807,
    "question": "A company provides the following financial data:Revenue: $2,000Gross Margin: 50%Operating Expenses (including D&A): $500Total Debt: $1,000Interest Rate on Debt: 10%EV/EBITDA = 7.5xTax Rate: 25%Shares Outstanding: 100P/E Multiple: 20.0xGiven this information, what is the company's share price?",
    "answer": "Reported in Moelis & Co. Interview New York Office, First round Valuation Answer: $60 per share Calculation: Gross Profit = $2,000 × 50% = $1,000. EBIT = $1,000 - $500 = $500. Interest Expense = $1,000 × 10% = $100. EBT = $500 - $100 = $400. Tax = $400 × 25% = $100. Net Income = $400 - $100 = $300. EPS = $300 / 100 shares = $3. Share Price = $3 × 20.0x P/E = $60. Note: The EV/EBITDA multiple of 7.5x is not needed for this calculation.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 808,
    "question": "You are advising a U.S. firm that is considering an acquisition of a Chinese oil field services firm.How would you value the target, and how would you determine if it's a good deal?",
    "answer": "Reported in Moelis & Co. Interview Houston office, Superday Valuation Use standard valuation methods with cross-border adjustments: DCF: Forecast cash flows in local currency, apply appropriate discount rate reflecting country risk premium, convert to USD. Comparable Companies: Use global and regional oil field services peers, adjust for market differences. Precedent Transactions: Review similar cross-border deals in the sector. Key considerations for determining if it's a good deal: Regulatory approval risk (CFIUS, Chinese authorities). Currency risk and hedging strategies. Political and operational risks in China. Synergies: Access to Chinese market, technology transfer, cost savings. Strategic fit: Does it enhance competitive position? Integration challenges and cultural differences.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 809,
    "question": "Why would a company with higher leverage have a higher beta than an otherwise identical company with lower leverage?",
    "answer": "Reported in Moelis & Co. Interview Valuation Higher leverage increases financial risk, which increases equity beta. Explanation: Debt obligations are fixed, so equity holders absorb all volatility in earnings. With more debt, small changes in operating income create larger percentage swings in net income available to equity. This amplifies equity volatility and systematic risk, raising levered beta. Formula: Levered Beta = Unlevered Beta * [1 + (1 - Tax Rate) * (Debt / Equity)] As Debt/Equity increases, levered beta rises, reflecting higher equity risk.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 810,
    "question": "How would you calculate the Terminal Value for a forestry company?",
    "answer": "Reported in Moelis & Co. Interview Valuation For a forestry company, Terminal Value should reflect the long-term, sustainable harvest and regrowth cycles. Approaches: Perpetuity Growth Method: Use a low, stable growth rate (0-2%) reflecting sustainable timber yields and inflation. Exit Multiple: Apply EV/EBITDA multiple from comparable forestry companies at maturity. Asset-Based Approach: Value standing timber inventory and land at terminal year using per-acre or per-ton metrics. Forestry is capital-intensive with long growth cycles, so Terminal Value often represents significant portion of DCF. Use conservative assumptions given commodity price volatility and biological constraints.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 811,
    "question": "How would you value Tesla, and how would you select an appropriate set of comparable companies?Follow-up: In your opinion, what is the best method to value Tesla?",
    "answer": "Reported in Moelis & Co. Interview First round Valuation Valuation Approaches: DCF: Project vehicle deliveries, ASPs, margins, energy business, services. High uncertainty in growth assumptions. Comparable Companies: Mix of auto OEMs (Ford, GM, Toyota) for vehicle business and tech companies (growth comparables) for software/AI capabilities. Sum-of-the-Parts: Value automotive, energy storage, solar, and potential autonomous driving businesses separately. Comparable Selection Challenge: Traditional auto companies trade at lower multiples (mature, capital-intensive). Tech companies trade at higher multiples but lack physical production complexity. Consider EV-only manufacturers (Rivian, Lucid) for closer fit. Best Method: DCF is most appropriate given Tesla's unique profile, but requires sensitivity analysis on key assumptions (delivery growth, margin expansion, autonomous driving monetization). Triangulate with comparables for sanity check.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 812,
    "question": "Why would an acquiror pay 30x revenue for a target with no profit? How do you value such a company?",
    "answer": "Reported in Morgan Stanley Interview Valuation Possibly for strategic value, rapid user growth, or a unique product that can become profitable at scale. You might use revenue multiples, user metrics, or a long-term DCF projection that models eventual profitability. The high multiple reflects growth expectations and potential network effects.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 813,
    "question": "Walk me through a DCF, then walk me through an LBO.Follow-up 1: If we change the discount rate, what happens to both?Follow-up 2: If we increase taxes, what happens to both?Follow-up 3: If we do a dividend recap, how does that affect the LBO?Follow-up 4: Compare high yield debt vs. bank debt in an LBO.",
    "answer": "Reported in Morgan Stanley Interview SA 2026 Valuation DCF summary: Project unlevered FCF for 5–10 years. Calculate terminal value (Gordon Growth or exit multiple). Discount both at WACC. Sum to enterprise value. LBO summary: Determine purchase price and sources/uses. Project operations and the debt schedule. Apply exit multiple to EBITDA for exit EV. Subtract remaining net debt for exit equity. Compute IRR and MOIC. Follow‑ups: Higher discount rate lowers DCF value; in an LBO it lowers the price you can pay to hit the target IRR. Higher taxes reduce FCF, decreasing DCF value and slowing debt pay‑down, which hurts LBO returns. A dividend recap raises new debt to pay a dividend, increasing leverage and boosting equity IRR if the company can service the debt. High‑yield: unsecured, higher coupons, bullet maturity, loose covenants. Bank debt: secured, lower rates, amortizing, maintenance covenants.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 814,
    "question": "What are Net Operating Losses (NOLs)?Assume you are valuing a shell company whose only asset is $1 million in NOLs. How much would you be willing to pay for this company?",
    "answer": "What are Net Operating Losses (NOLs)? Assume you are valuing a shell company whose only asset is $1 million in NOLs. How much would you be willing to pay for this company? Reported in Perella Weinberg Interview SF Office Valuation NOLs Definition Net Operating Losses are accumulated tax losses that can be carried forward to offset future taxable income, reducing future tax liabilities. Valuation Maximum value = $1M NOL * Tax Rate. At a 25% tax rate, the NOL saves $250k in future taxes. However, practical value is lower due to: Limitations on usage (Section 382 limits NOL usage after ownership changes). Time value of money (future tax savings must be discounted). Uncertainty about generating sufficient taxable income to utilize NOLs. Expiration risk (though recent law changes reduced this risk). Realistic valuation: 15-25% of face value, or $150k-$250k, depending on ability to utilize and discount rate applied.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 815,
    "question": "What types of companies might have a negative beta?Follow-up: If a company's beta is -1, is it possible to have a negative WACC? What would be the implication for a DCF valuation?",
    "answer": "Reported in Perella Weinberg Interview New York Office, Second round Valuation Part 1: Negative Beta Companies Companies with negative beta include: Gold mining companies (flight to safety during downturns). Discount retailers (benefit from economic weakness). Certain utilities or defensive consumer staples. Treasury securities and gold itself. Part 2: Negative WACC Yes, negative WACC is theoretically possible if beta is sufficiently negative. Using CAPM: Cost of Equity = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate). If beta = -1 and equity risk premium is large enough, cost of equity could be negative. DCF implication: A negative discount rate would make the valuation mathematically undefined or infinite, suggesting the model breaks down for extreme negative beta scenarios.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 816,
    "question": "What is the theoretical upper limit of a company's WACC, and what does this imply about its capital structure?",
    "answer": "Reported in PJT Partners Interview Second round Valuation The theoretical upper limit of WACC is the company's cost of equity (unlevered). This occurs when the company has zero debt (100% equity financing). Implication: As debt increases, WACC initially decreases due to tax shield benefits (interest is tax-deductible) and lower cost of debt versus equity. However, excessive leverage increases financial risk, raising both cost of debt and cost of equity. Optimal capital structure minimizes WACC, maximizing firm value.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 817,
    "question": "What's the problem with EBITDA? What's the problem with EBIT? What's another metric that helps solve both?",
    "answer": "Reported in Rothschild Interview Valuation EBITDA: Ignores capex (no reflection of ongoing maintenance or growth investments). EBIT: Includes depreciation (a non-cash item) but might still not reflect actual cash outflows for capex. EBITDA – Capex: Helps account for ongoing reinvestment needs, offering a closer proxy to true cash flow.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 818,
    "question": "Where does the cost of preferred stock range vs. Cost of Equity and Cost of Debt?",
    "answer": "Reported in Rothschild Interview SA 2026 Valuation Between them. Preferred dividends are contractually senior to common equity but junior to debt, so investors demand a return higher than debt yet lower than equity.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 819,
    "question": "What is the difference between a levered DCF and an LBO?",
    "answer": "Reported in Rothschild Interview SA 2026 Valuation Both value equity but use different mechanics and solve for different things. Levered DCF projects Levered Free Cash Flow and discounts it at the Cost of Equity to tell you what the equity is worth today. An LBO projects the same cash flows but solves for the IRR a sponsor earns given a purchase price, leverage and exit multiple; it doesn’t discount cash flows.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 820,
    "question": "A target company has the following characteristics:EV/EBITDA Multiple: 10xEBITDA: $200 millionTotal Debt: $900 millionCash: $100 millionAn acquirer purchases the company at a 25% premium to its standalone equity value.Answer the following:What is the total equity purchase price?What is the enterprise value of the transaction?",
    "answer": "Reported in Unspecified Interview Valuation Part 1: Total Equity Purchase Price Answer: $1,500M Standalone EV = 10x * $200M = $2,000M Standalone Equity Value = $2,000M - $900M + $100M = $1,200M Purchase Price = $1,200M * 1.25 = $1,500M Part 2: Enterprise Value of Transaction Answer: $2,300M Transaction EV = Equity Purchase Price + Debt - Cash Transaction EV = $1,500M + $900M - $100M = $2,300M",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 821,
    "question": "How would you value a celebrity?",
    "answer": "Reported in Unspecified Interview Valuation Apply standard valuation approaches adapted to the context: DCF: Project future cash flows from endorsements, appearances, media deals, and royalties. Discount at appropriate rate reflecting career longevity and stability risks. Comparable Approach: Analyze compensation for similar celebrities in same industry (sports, entertainment, etc.) with similar audience reach. Precedent Transactions: Review deals for similar celebrity partnerships or acquisitions of celebrity brands/likeness rights. Key considerations: Brand strength and audience demographics. Career stage and longevity. Diversification of income streams. Reputational risk and controversy exposure.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 822,
    "question": "If a company could sell for 10x EBITDA in a private sale or IPO at a 12x EBITDA multiple, how would you determine which is the better option?",
    "answer": "Reported in Unspecified Interview Valuation Key considerations beyond valuation multiple: Timing & Certainty: Private sale offers faster execution and deal certainty; IPO has market risk and longer timeline Transaction Costs: IPO involves underwriting fees (5-7%), legal costs, and ongoing compliance expenses Liquidity: IPO may have lock-up periods; private sale provides immediate full liquidity Market Conditions: IPO valuation depends on market receptivity and timing risk Strategic Value: Buyer in private sale may pay premium for synergies beyond stated multiple Future Optionality: IPO maintains independence and future strategic flexibility After adjusting for costs and risks, compare net proceeds and execution probability.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 823,
    "question": "Company A has a 1-year forward EV/Revenue multiple of 5x and a 2-year forward multiple of 3x.Company B has a 1-year forward multiple of 5x and a 2-year forward multiple of 4x.Assuming all else is equal, which company represents a better investment and why?",
    "answer": "Reported in Unspecified Interview Valuation Company A represents the better investment. The decline in forward multiples indicates expected revenue growth. Company A's multiple compresses from 5x to 3x, implying 67% revenue growth over the period (5x / 3x = 1.67x growth). Company B's multiple compresses from 5x to 4x, implying only 25% revenue growth (5x / 4x = 1.25x growth). Assuming the same EV in both periods, Company A demonstrates significantly stronger revenue growth prospects, making it the more attractive investment.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 824,
    "question": "Calculate the implied tax rate for a company with the following metrics:P/E Multiple: 20xEV/EBITDA Multiple: 10xMarket Cap: $200Interest Expense: $20Pre-tax Cost of Debt: 5%D&A: $20The company has no cash on its balance sheet.",
    "answer": "Reported in Unspecified Interview Valuation Answer: 50% Calculation: NI = Market Cap / P/E = $200 / 20x = $10 Debt = Interest Expense / Cost of Debt = $20 / 5% = $400 EV = Market Cap + Debt = $200 + $400 = $600 (no cash, preferred, NCI) EBITDA = EV / (EV/EBITDA) = $600 / 10x = $60 EBIT = EBITDA - D&A = $60 - $20 = $40 Pre-tax Income (EBT) = EBIT - Interest = $40 - $20 = $20 Tax = EBT - NI = $20 - $10 = $10 Tax Rate = Tax / EBT = $10 / $20 = 50%",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 825,
    "question": "Given the following forward multiples for a company:1Y Forward EV/EBITDA = 12x2Y Forward EV/EBITDA = 10x1Y Forward P/E = 18x2Y Forward P/E = 20xPart 1: What is implied by the change in each multiple from Year 1 to Year 2?Part 2: What is the likely cause for the change in the denominators (i.e., EBITDA and Earnings) between the two periods?",
    "answer": "Reported in Unspecified Interview Valuation Part 1: EV/EBITDA compression (12x to 10x) implies EBITDA growth outpacing EV growth, suggesting strong operational improvement P/E expansion (18x to 20x) implies earnings growth lagging equity value growth, or market assigning higher valuation to future earnings Part 2: The divergence suggests the company is experiencing EBITDA growth but margin compression or increased expenses below the EBITDA line. Likely causes: Increased D&A from capital investments (reduces earnings relative to EBITDA) Rising interest expense from new debt (widens gap between EBITDA and earnings) Higher tax rate or one-time charges impacting net income disproportionately The company is growing EBITDA faster than net income, causing P/E to rise while EV/EBITDA falls.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 826,
    "question": "Consider two identical companies, except Company A is financed with a mix of debt and equity, while Company B is 100% equity-financed.Answer the following:Which company has a higher P/E multiple?If both companies' operations outperform expectations, which will provide a greater return to equity holders?Which company has a higher WACC?",
    "answer": "Reported in Unspecified Interview Valuation Part 1: P/E Multiple Company B (100% equity) has the higher P/E. Leverage increases financial risk for equity holders, leading to a higher cost of equity. Investors demand a higher return for this risk and will pay less per dollar of earnings, compressing the P/E multiple. Part 2: Returns to Equity Company A (with debt) provides greater returns. Leverage magnifies equity returns (both positive and negative). Fixed debt costs mean incremental operating profit flows entirely to equity holders. Part 3: WACC Company B (100% equity) has a higher WACC. Debt is a cheaper source of capital than equity and its interest is tax-deductible. Company A's capital structure includes cheaper debt, lowering its overall WACC.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 827,
    "question": "Company A is financed with debt, while identical Company B has no debt.Answer the following:How would you expect their P/E multiples to differ?If both companies' revenues increase by 30%, how might their respective multiples react?Which company has a higher cost of capital?",
    "answer": "Reported in Unspecified Interview Valuation Part 1: P/E Multiples Company B (unlevered) has a higher P/E multiple. Leverage adds risk, causing investors to demand a higher return on equity. A higher required return results in a lower P/E multiple. Part 2: Multiple Reaction to Growth Company A's P/E could compress or expand. Mechanically, NI grows faster for levered companies (fixed interest), which could lower the P/E ratio. However, strong growth also leads to de-leveraging and de-risking, which could cause the market to award a higher multiple. Part 3: Cost of Capital Company B (unlevered) has a higher cost of capital. Its capital structure is 100% equity, which is more expensive than debt. Company A benefits from cheaper, tax-advantaged debt in its WACC.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 828,
    "question": "If you had a few minutes on a plane with a CEO, what key questions would you ask to quickly form a high-level valuation of their company?",
    "answer": "Reported in Unspecified Interview Valuation Essential questions to ask: What is your current annual revenue and EBITDA margin? What is your revenue growth rate over the past 2-3 years? What is your net debt position (or cash balance)? Who are your closest public comparables? What are your key value drivers and competitive advantages? What is your capital intensity (annual capex as % of revenue)? With these answers, you can quickly apply a trading comp multiple to EBITDA and triangulate an approximate Enterprise Value and Equity Value.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 829,
    "question": "A company has an EPS of $7 and a P/E multiple of 15x. The corporate tax rate then drops from 30% to 15%.Assuming the P/E multiple remains constant, what is the new share price?",
    "answer": "Reported in Unspecified Interview Valuation Answer: $127.50 Calculation: Current Share Price = EPS * P/E = $7 * 15x = $105. Current Pre-Tax Income = $7 / (1 - 30%) = $10. New Net Income = $10 * (1 - 15%) = $8.50. New Share Price = $8.50 * 15x = $127.50. Note: The lower tax rate increases NI and EPS, which flows through to a higher share price even with the same multiple.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 830,
    "question": "A bond has the following characteristics:Face Value: $1,000Annual Coupon Rate: 10%Purchase Price: $500Years to Maturity: 3What is the bond's Yield to Maturity (YTM)? Use the approximation formula.",
    "answer": "Reported in Unspecified Interview Valuation Answer: ~35.6% Calculation (using approximation formula): Annual Coupon = $1,000 * 10% = $100. YTM = [C + ((F - P) / n)] / [(F + P) / 2] YTM = [$100 + (($1,000 - $500) / 3)] / [($1,000 + $500) / 2] YTM = [$100 + $166.67] / $750 YTM = $266.67 / $750 = ~35.6% The approximate Yield to Maturity using the standard approximation formula is 35.6%.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 831,
    "question": "Two companies have the same EV/EBITDA multiple, but one is significantly more leveraged. How would you expect their P/E ratios to compare?",
    "answer": "Reported in Unspecified Interview Valuation The more leveraged company will have a lower P/E ratio. Reasoning: Same EV/EBITDA implies similar operating value before capital structure effects. Higher Leverage = Higher Risk: The company with more debt has a riskier equity stub. Investors demand a higher return for this risk. Higher Risk = Lower Multiple: A higher required return on equity (cost of equity) translates directly to a lower P/E multiple investors are willing to pay. Conclusion: The risk effect of leverage outweighs the mechanical impact on Net Income, leading to a lower P/E for the more leveraged company.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 832,
    "question": "How does Capital Expenditure (CapEx) affect the following valuation multiples: EV/EBIT, EV/EBITDA, and P/E?",
    "answer": "Reported in Unspecified Interview Superday Valuation EV/EBITDA: No direct impact, as EBITDA excludes D&A (which results from past CapEx). EV/EBIT: Higher CapEx leads to higher D&A, which lowers EBIT, increasing the EV/EBIT multiple. P/E: Higher CapEx leads to higher D&A, which lowers pre-tax income and NI, increasing the P/E multiple (assuming EV/equity value held constant). Note: While CapEx itself doesn't appear in these metrics directly, it drives depreciation which impacts EBIT and NI.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 833,
    "question": "Beyond the four main valuation methodologies (Comps, Precedents, DCF, LBO), what is a fifth methodology and how does it work?",
    "answer": "Reported in Unspecified Interview Superday Valuation Sum-of-the-Parts (SOTP) Valuation SOTP values a company by separately valuing each business segment or division, then summing them to derive total Enterprise Value. Process: Segment the company into distinct business units. Apply appropriate valuation methodology to each segment (DCF, Comps, etc.). Sum segment values to calculate total Enterprise Value. Subtract Net Debt to arrive at Equity Value. SOTP is useful for conglomerates or companies with diverse operations where a single multiple doesn't capture the full value.",
    "topic": "Valuation",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  }
];

module.exports = { VALUATION };
