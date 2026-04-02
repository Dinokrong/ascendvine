// Auto-generated — do not edit directly. Source of truth is questions.json
/** @type {import('../types').Question[]} */
const DCF = [
  {
    "id": 142,
    "question": "Can you explain, in simple terms, how a DCF provides a company's value?",
    "answer": "A DCF values a company by forecasting its cash flows and determining how much those cash flows are worth today. You project free cash flow each year and discount it at an appropriate rate, then estimate a terminal value at the end and discount that as well. Summing these discounted values yields the company’s total present value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 143,
    "question": "How do you define free cash flow in a DCF context?",
    "answer": "Free cash flow is the cash flow available to all providers of capital, after operating expenses, taxes, and reinvestment needs. It’s typically EBIT × (1 – Tax Rate), plus non-cash items, minus CapEx, minus changes in working capital.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 144,
    "question": "What is the purpose of discounting future cash flows?",
    "answer": "Money in the future is worth less than money today because of factors like inflation and opportunity cost. Discounting adjusts those future amounts back to a present value so you can compare them on an apples-to-apples basis.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 145,
    "question": "What is the typical projection period for a DCF, and why?",
    "answer": "Usually it's around 5 to 10 years. Anything shorter than 5 years might be too little time, and beyond 10 years becomes too speculative.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 146,
    "question": "How do you estimate the discount rate used in a standard DCF?",
    "answer": "You typically use the Weighted Average Cost of Capital (WACC), which reflects the required returns of both debt and equity holders. It includes factors like the cost of equity, the cost of debt, and the capital structure mix.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 147,
    "question": "Can you describe how to get from revenue to unlevered free cash flow?",
    "answer": "Start with revenue and subtract operating costs to get EBIT. Then multiply by (1 – Tax Rate), add back depreciation and other non-cash items. Finally, subtract CapEx and any increases in working capital.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 148,
    "question": "What are two ways to estimate the terminal value in a DCF?",
    "answer": "The first is the Multiples Method, applying an exit multiple to the final year's EBITDA or EBIT. The second is the Gordon Growth Method, using a perpetual growth rate formula.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 149,
    "question": "How is the terminal value calculated under the Gordon Growth Method?",
    "answer": "You take the final year’s free cash flow, multiply by (1 + growth rate), then divide by (discount rate – growth rate).",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 150,
    "question": "Which typically produces a higher valuation: the Multiples Method or the Gordon Growth Method for Terminal Value?",
    "answer": "It varies. Multiples can be more volatile due to changing market sentiment, while Gordon Growth depends on a stable long-term rate. No strict rule says which is higher; it depends on assumptions.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 151,
    "question": "How would you respond if the terminal value makes up 80% of the DCF’s total value? Is that too high?",
    "answer": "Many DCFs yield high reliance on the terminal value. If it's above 70–80%, you might review assumptions, but it’s not necessarily wrong.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 152,
    "question": "Why might you use levered free cash flow instead of unlevered free cash flow in your DCF?",
    "answer": "If you're only interested in equity value, you can use levered FCF to reflect cash flow available after debt payments. This approach discounts at the cost of equity rather than WACC.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 153,
    "question": "How would you switch from enterprise value to equity value in a DCF model?",
    "answer": "The unlevered (FCFF) DCF (discounted at WACC) gives you Enterprise Value (TEV). You then apply the standard TEV formula to get to equity value (EqV): TEV = EqV - Cash + Debt + Preferred Stock + Minority Interest EqV = TEV + Cash - Debt - Preferred Stock - Minority Interest Once you have your equity value, you can then divide that by fully diluted shares outstanding to obtain the implied share price. One key difference to understand is: TEV = unlevered (FCFF) DCF discounted at WACC EqV = levered (FCFE) DCF discounted at cost of equity However, if you already have the output of the unlevered DCF (TEV), you don't need to worry about discount rates; you can just apply the standard bridge to get to equity value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 154,
    "question": "If cost of equity rises, does that necessarily mean WACC rises as well?",
    "answer": "WACC might rise if the debt portion doesn’t change. But if the company’s debt ratio is large, or cost of debt changes, it may offset the equity changes. So it’s not guaranteed, but often a higher cost of equity increases WACC.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 155,
    "question": "How do you handle working capital changes in a DCF forecast?",
    "answer": "If working capital increases, it’s a cash outflow, so you subtract it from free cash flow. If working capital decreases, it releases cash, so it’s an inflow you add to free cash flow.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 156,
    "question": "In what scenario might a DCF not be very useful?",
    "answer": "It’s less useful for companies with unpredictable cash flows or for financial institutions where debt is integral to operations (working capital). In these cases, other valuation methods like comps or transaction multiples, or a dividend discount model, might be preferred.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 157,
    "question": "If a company's growth is expected to slow drastically after year 3, what does that mean for your DCF model?",
    "answer": "You’d likely project higher growth in initial years, then reflect a step-down to a lower growth rate afterward. It underscores the importance of carefully modeling revenue growth and margins each year, not just a uniform growth assumption.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 158,
    "question": "What are some ways to sanity-check your DCF results?",
    "answer": "Compare implied multiples (like EV/EBITDA) to the current market or comps. Run sensitivity analyses on key inputs and see if valuations seem reasonable. Check if terminal value is dominating too large a portion of total value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 159,
    "question": "How do you factor cyclical industries, like steel or semiconductors, into a DCF?",
    "answer": "It’s tricky. You might project through an entire cycle or normalize earnings over an average cycle to avoid overstating or understating any single year. You could also do scenario analyses for boom vs. bust conditions.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 160,
    "question": "How do you treat stock-based compensation in a DCF?",
    "answer": "Some view it as a real expense and subtract it from cash flow, then factor in additional share count as well. Others might add it back as a non-cash expense but increase diluted shares outstanding, thus adjusting equity value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 161,
    "question": "Why do you typically use 5-10 years for the projection period?",
    "answer": "Need enough time before terminal value to achieve steady state Less than 5 years is too short, more than 10 is too speculative",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 162,
    "question": "What is the relationship between Debt and the Cost of Equity?",
    "answer": "More debt raises a company’s levered beta, increasing its Cost of Equity.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 163,
    "question": "How do you calculate WACC for a private company?",
    "answer": "Use comparables to estimate the cost of equity and debt, and approximate capital structure from similar companies.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 164,
    "question": "What is a mid-year convention in a DCF, and why might you use it?",
    "answer": "Mid-year convention assumes cash flows are generated evenly throughout the year, rather than all at period-end. It shifts discount periods by 0.5 for each year, slightly increasing present value because you discount less heavily.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 165,
    "question": "How do you adjust the terminal value if you use the mid-year convention?",
    "answer": "When using the mid-year convention, projection period cash flows are discounted using (n - 0.5) to reflect mid-year timing. For the Terminal Value using the Exit Multiple Method, the sale is assumed to occur at the end of the year. Therefore, you must discount the Terminal Value using the full period \"n\" rather than \"n-0.5\".",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 166,
    "question": "How would you implement a partial stub period (like 6 months) in a mid-year convention DCF?",
    "answer": "You’d split the initial period into that half-year, discounting at 0.5 / 2 = 0.25 if truly mid-quarter. Then for subsequent full years, the mid-point would be the end of the stub period plus half a year (0.5 + 0.5 = 1.0), then 2.0, 3.0, etc.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 167,
    "question": "How would you value a company that’s planning a major acquisition in Year 3 of your DCF forecast?",
    "answer": "You might either model the combined company’s free cash flow from Year 3 onward, adjusting for synergy assumptions and purchase price. Or you could keep it simpler by showing an outflow (or negative CapEx line item) in Year 3 if it’s purely a cash purchase, though more detailed M&A modeling might be needed for accuracy.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 168,
    "question": "If you’re using leveraged free cash flow (LFCF) in a DCF, what discount rate should you use?",
    "answer": "You’d use the cost of equity, because leveraged free cash flow is cash available only to equity holders.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 169,
    "question": "How would you handle a significant debt repayment each year in a levered DCF model?",
    "answer": "Since levered FCF includes interest and debt principal payments, you’d explicitly subtract the mandatory principal repayment each period. This reduces the free cash flow available to equity holders each year.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 170,
    "question": "Explain why a DCF might not be accurate for certain cyclical sectors like airlines.",
    "answer": "Airlines can have large swings in revenue and expenses due to fuel costs, demand cycles, and labor contracts. Projecting stable growth or margins is difficult, and a small assumption error can greatly skew valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 171,
    "question": "If your mid-year convention DCF is yielding a much higher value than the standard approach, is that logical?",
    "answer": "It can be higher, but typically the difference is modest. If it’s dramatically higher, you might be double-counting or applying mid-year discounting incorrectly for the terminal value.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 172,
    "question": "When does using a Dividend Discount Model (DDM) make more sense than a typical DCF?",
    "answer": "DDM is often used for financial institutions or firms that pay out a stable dividend tied closely to earnings, such as certain utilities. These companies’ capital structures rely heavily on deposits or insurance float, making standard unlevered FCF analysis less relevant.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 173,
    "question": "In a Dividend Discount Model, how do you calculate the terminal value?",
    "answer": "You typically use a P/E-based approach for the final projected year. Multiply that year’s estimated EPS by an appropriate P/E multiple, or use a Gordon Growth approach on dividends.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 174,
    "question": "If two companies share identical WACC, cash flows, and growth, but one has convertible debt and the other does not, do they have the same enterprise value in a DCF?",
    "answer": "Enterprise value from the DCF might be similar initially, but the convertible debt may convert to equity if in-the-money, affecting final equity calculations. On a purely enterprise value basis, they could appear similar, but final per-share equity might differ.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 175,
    "question": "Does a high beta necessarily mean a higher WACC?",
    "answer": "Yes, because beta influences cost of equity, so a higher beta typically increases that. Since equity is part of WACC, a higher beta usually raises the overall discount rate unless debt is large enough to offset it.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 176,
    "question": "How do you reflect a rapidly changing capital structure (e.g., repeated share issuances) in a DCF?",
    "answer": "You might do a levered DCF, factoring new equity issuances into the share count each year. Alternatively, if using unlevered FCF, you still note changes that might affect WACC or net debt. Some advanced models recalc WACC yearly.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 177,
    "question": "If a company has intangible assets that amortize over time, how does that factor into a DCF?",
    "answer": "Amortization is a non-cash expense, so you add it back if it’s lowering EBIT. However, watch for any real cash costs tied to intangible maintenance or renewal that might not appear as standard CapEx.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 178,
    "question": "If your DCF's implied value is far below a public company's current share price, what are possible reasons?",
    "answer": "You might have used overly conservative forecasts or a too-high discount rate. The market may be factoring intangible positives or synergy prospects not captured in your model. Or the stock might be overvalued, at least from a pure fundamental standpoint.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 179,
    "question": "Why might you unlever and re-lever beta when looking at comparable companies for a DCF?",
    "answer": "Each company has a unique capital structure, so you unlever betas to remove the effect of debt. Then you re-lever with your target’s structure to reflect its specific risk profile.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 180,
    "question": "How do you handle capital leases or operating leases in the DCF discount rate calculation?",
    "answer": "Capital leases are typically treated like debt, which can slightly affect WACC. Operating leases might be off-balance historically, but under new standards, they appear as lease liabilities, so they can also be seen as debt-like.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 181,
    "question": "If your discount rate is 10% and your terminal growth is 3%, does a 3% perpetual growth automatically mean you’re assuming infinite expansion in real terms?",
    "answer": "Mathematically, yes, a 3% growth rate into perpetuity implies the company grows forever. Practically, we keep that rate modest (like GDP or inflation) to avoid unrealistically large values.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 182,
    "question": "Could we use a negative growth rate for terminal value in a DCF if the business is declining?",
    "answer": "Technically yes. If the company's cash flows are expected to shrink perpetually, you could model a small negative rate. However, negative indefinite growth often implies the business goes to zero, so you must be cautious.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 183,
    "question": "In your final output, do you present a single figure for your DCF valuation or a range?",
    "answer": "Typically, you present a range using sensitivity tables for the discount rate and terminal multiples (or growth rates). You rarely rely on a single “magic number” but rather show best-case, base-case, and worst-case scenarios.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 318,
    "question": "What is a DCF/can you walk me through a DCF in under 60 seconds?",
    "answer": "You project and discount a company’s FCF plus its terminal value: Forecast free cash flow 5-10 years Discount at WACC Find terminal value (exit multiple or perpetuity growth) Discount terminal value back and sum for enterprise value",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 319,
    "question": "What is WACC, conceptually? How do you calculate it?",
    "answer": "WACC is the required return on the company’s capital structure, weighted by each capital slice’s proportion. WACC = Cost of Equity x % Equity + Cost of Debt x % Debt x (1 - Tax Rate) + Cost of Preferred x % Preferred.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 320,
    "question": "Tell me 3 places where taxes affect a DCF.",
    "answer": "Calculating Beta (conversion from unlevered to levered) Calculating FCF (NOPAT) Calculating Cost of Debt (interest is tax deductible)",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 321,
    "question": "If you are valuing a coal mine company, would you use the Gordon Growth Method or the Multiples Method to calculate the TV? Explain.",
    "answer": "Would use the multiples method, since Gordon Growth assumes cash flows exist into perpetuity and coal is a depleting resource.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 322,
    "question": "How would you change a DCF to value a highly speculative technology company?",
    "answer": "Longer projection horizon, as it may take longer to stabilize Higher discount rate to reflect higher risk Adjust growth/margin assumptions for uncertainty",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 323,
    "question": "A company buys a factory for $100 in its 4th year. How would the DCF/Enterprise Value change for the company?",
    "answer": "Add $100 of CapEx in Year 4, reducing that year’s FCF by $100 and lowering EV by its PV: 100 / (1 + r)^4.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 324,
    "question": "How would you calculate the long-term growth rate for the GGM?",
    "answer": "Typically choose a conservative rate (e.g. inflation or GDP ~ 2-3%). Anything above 5% is aggressive for most developed markets.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 325,
    "question": "What are the three ways that lowering tax can affect a DCF valuation?",
    "answer": "Boosts net income → higher FCF Raises cost of debt (less tax shield) → WACC up Lowers tax shield in levered beta → cost of equity up Net effect depends on which is stronger: FCF increase or WACC increase.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 326,
    "question": "What are common alterations that one can make to the basic WACC formula to make it more company-specific?",
    "answer": "Add a size premium or liquidity discount for smaller/private entities Include preferred stock if part of the capital structure Use alternative cost of equity formulas if Beta is unusable",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 327,
    "question": "Ignoring the effect of taxes, how would changing from LIFO to FIFO affect FCF during a period of rising costs?",
    "answer": "Lower COGS via FIFO increases net income, but also increases inventory, which is a use of cash. The two effects offset, so FCF is neutral (in a simplified scenario).",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 328,
    "question": "In a DCF valuation, which of the following actions increases the valuation the most:$10 decrease in capital expenditures$10 decrease in expenses$10 increase in revenues",
    "answer": "IB Vine Select DCF The $10 decrease in CapEx has the most significant impact on valuation. Decreasing CapEx by $10 directly increases FCF by $10 with no tax effect. Reducing expenses by $10 increases FCF by $10 x (1 - tax rate), which is less than $10. Increasing revenues by $10 also increases FCF by $10 x (1 - tax rate), which is less than $10.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 329,
    "question": "What is the difference between asset beta and equity beta?",
    "answer": "Asset beta (unlevered) measures business risk excluding debt. Equity beta (levered) includes debt risk, making it higher if leverage exists.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 330,
    "question": "How would raising $100M debt in Year 3 affect the DCF valuation of a company?",
    "answer": "Unlevered FCF is unaffected by new interest costs, but the capital structure changes after Year 3 could alter WACC. You might recalc WACC post-Year 3, discounting from that point onward.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 331,
    "question": "How do you categorize maintenance, growth, and acquisition CapEx when analyzing a company's spending?",
    "answer": "Maintenance CapEx is the baseline amount needed to sustain operations. Growth CapEx supports expansion into new products or markets and can often be deferred if necessary. Acquisition CapEx is funding used for M&A activity. In valuation, mandatory maintenance spending is more critical to subtract from operating cash flow, while other categories can be more discretionary.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 332,
    "question": "What is cheaper – debt or equity?",
    "answer": "Debt is cheaper because interest is tax-deductible, and debt sits above equity in a firm’s capital structure.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 333,
    "question": "Within WACC, can the cost of debt ever be higher than the cost of equity?",
    "answer": "Typically, no. Debt ranks above equity in the capital structure, so it carries a lower required return. However, in extreme distress, yields on debt can spike, but rational equity investors would still demand a higher return than debt holders.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 334,
    "question": "How does changing an asset affect the DCF?",
    "answer": "If an asset decreases, the change in NWC is lower, so FCF is higher. If an asset increases, the change in NWC is higher, so FCF is lower.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 335,
    "question": "Calculate stub-year discount factors with mid-year convention for the end of Q1, Q2, Q3, and Q4.",
    "answer": "Answer: Q1: First = 0.375, Second = 1.25 Q2: First = 0.25, Second = 1 Q3: First = 0.125, Second = 0.75 Q4: First = 0.5, Second = 1.5 Explanation: Stub period = months to 12/31 ÷ 12 (Q1 0.75 yr, Q2 0.5 yr, Q3 0.25 yr, Q4 0 yr). Mid-year convention discounts the stub cash flow at half the stub length (s / 2). First full-year cash flow arrives six months into the next year → exponent = s + 0.5. Each subsequent year’s midpoint is one year later (add 1.0 to the exponent).",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 336,
    "question": "If a company has 11% NWC/Sales and another has 12% NWC/Sales, which is valued higher if sales are increasing?",
    "answer": "The company with the lower NWC ratio (11%) is generally valued higher because it ties up less cash in working capital as sales grow.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 337,
    "question": "Can you describe a company with a beta close to zero?",
    "answer": "A government utilities company (or extremely non-cyclical, regulated entity) typically has a near-zero market beta.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 338,
    "question": "How do you get from Unlevered FCF to Levered FCF?",
    "answer": "Subtract interest expense (net of tax) and mandatory debt repayments from Unlevered FCF.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 339,
    "question": "If debt of a company is going down, how does that affect the cost of equity and the cost of capital?",
    "answer": "Less debt lowers beta, theoretically reducing cost of equity. Overall WACC could move either way, but typically, if you reduce cheaper debt, cost of capital may rise slightly.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 340,
    "question": "Rank these three changes from biggest to smallest impact on FCF: 10% increase in Revenue, 10% decrease in COGS, 10% decrease in Working Capital.",
    "answer": "Biggest: 10% decrease in Working Capital (no tax effect). Next: 10% decrease in COGS. Least: 10% increase in Revenue.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 341,
    "question": "What are three questions you would ask the CEO of a company to do a DCF?",
    "answer": "Ask about business outlook, model assumptions, and competitive landscape.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 342,
    "question": "What are ways you could have negative free cash flow in a DCF?",
    "answer": "High capex, large changes in net working capital, or low/zero sales can push FCF negative.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 343,
    "question": "How can you calculate the Equity Value of a company using a DCF?",
    "answer": "Either use a Levered DCF directly to calculate Equity Value, or find Implied Enterprise Value from an Unlevered DCF and then subtract net debt (subtract debt, add cash).",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 344,
    "question": "Let's say you have WACC on the y-axis and the debt/equity ratio on the x-axis. What does the graph look like?",
    "answer": "It is a U-shaped parabola, where moderate leverage can minimize WACC, but too much or too little raises it.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 345,
    "question": "You are valuing a company. How do you increase the valuation only using NWC?",
    "answer": "Increase current liabilities (or reduce current assets) so that the changes in NWC are smaller and FCF is higher, boosting valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 834,
    "question": "What is the greatest driver of value in a DCF?",
    "answer": "Reported in Bank of America Interview GIG, First round DCF The terminal value is typically the greatest driver. Terminal value usually represents 50-80% of total enterprise value in a DCF. It captures the value of all cash flows beyond the explicit forecast period in perpetuity. Within terminal value, the perpetuity growth rate and terminal multiple assumptions have outsized impact. Small changes in these inputs dramatically affect valuation. Other key drivers include discount rate (WACC) and near-term cash flow growth, but terminal value sensitivity dominates due to its magnitude and long time horizon.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 835,
    "question": "Explain the concept of WACC as if you were talking to a 6-year-old.",
    "answer": "Reported in Citi Interview New York Office, Superday DCF Imagine you want to buy a lemonade stand. You need money, so you ask your parents for some and borrow the rest from your piggy bank. Your parents want you to share some of your lemonade profits with them as a thank you. Your piggy bank doesn't care about profits, but you have to put a little money back each week. WACC is like figuring out how much, on average, it costs you to get all that money from both places. You need to make sure your lemonade stand earns more than what it costs to borrow the money, so you can keep some profit for yourself.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 836,
    "question": "How does a decrease in the tax rate impact a Discounted Cash Flow (DCF) analysis?",
    "answer": "Reported in Evercore Interview DCF A decrease in the tax rate impacts a DCF analysis in the following ways: Increased Net Income: Lower taxes result in higher net income, enhancing profitability. Higher Free Cash Flows: With lower taxes, more cash is available for operations, investments, and distributions, leading to higher free cash flows. Higher WACC (reduces the tax shield): The cost of debt is adjusted by the tax rate (Rd * (1 - Tax Rate)), so a lower tax rate increases the after-tax cost of debt. Higher Enterprise Value: Increased free cash flows typically lead to a higher present value of cash flows, thus increasing Enterprise Value. Overall, a decrease in the tax rate generally increases the valuation derived from a DCF analysis due to higher free cash flows.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 837,
    "question": "Walk from revenue to levered free cash flow (FCFE).",
    "answer": "Reported in Evercore Interview DCF Conceptually, levered free cash flow (free cash flow to equity) represents the remaining cash available to equity holders once the company has satisfied its reinvestment requirements (including net capital expenditures and working capital adjustments) and met all debt obligations (interest payments and principal repayments). Steps to Levered Free Cash Flow (FCFE): Revenue – COGS = Gross Profit (GP) GP – OpEx = Operating Income (EBIT) EBIT – Interest Expense - Taxes = Net Income Net Income + D&A – CapEx – Increase in NWC + Net Borrowing (Debt Issued - Debt Repayments) = Levered Free Cash Flow (FCF)",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 838,
    "question": "If WACC is 10% and the perpetuity growth rate (g) is 5%, what is the implied perpetuity exit multiple?",
    "answer": "Reported in Evercore Interview First round DCF Answer: 21x Calculation: Terminal Value = FCF * (1 + g) / (WACC - g) TV / FCF = (1 + g) / (WACC - g) TV / FCF = (1.05) / (0.10 - 0.05) = 1.05 / 0.05 = 21x The implied exit multiple is 21x the terminal year's FCF (not next year's).",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 839,
    "question": "How do you set key assumptions when building a DCF?",
    "answer": "Reported in FT Partners Interview DCF You analyze historical performance, discuss management guidance, examine industry benchmarks for growth, margins, capex, and working capital. Then form best estimates for revenue growth rates, operating margins, tax rates, capex, and WACC or discount rate.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "FT Partners"
    ]
  },
  {
    "id": 840,
    "question": "What would make the cost of equity low for a company?",
    "answer": "Reported in Goldman Sachs Interview DCF A lower beta (less volatile stock relative to the market), lower risk-free rate environment, or a lower equity risk premium can bring down cost of equity. Also, stable, diversified business models or strong brand moats lead to lower perceived risk, reducing the required return by investors.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 841,
    "question": "Assuming a 5% discount rate, how much would you pay to receive $1 per day, every day, forever?",
    "answer": "Reported in Goldman Sachs Interview New York office DCF Answer: $7,300 Calculation: Annual cash flow = $1/day × 365 days = $365 Perpetuity Value = Annual Cash Flow / Discount Rate PV = $365 / 0.05 = $7,300",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 842,
    "question": "Answer the following questions about a DCF analysis:What are the two most important drivers of value in a DCF?How do you calculate the Weighted Average Cost of Capital (WACC), Cost of Equity, and Beta?How do you determine the Beta for a private company?",
    "answer": "Reported in Goldman Sachs Interview First round DCF Part 1: Key Drivers The two most important value drivers are: Cash flow growth (revenue growth, margins, working capital). Discount rate (WACC) and terminal value assumptions. Part 2: Formulas WACC = (E/V × Cost of Equity) + (D/V × Cost of Debt × (1 - Tax Rate)). Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium. Beta = Covariance(Stock, Market) / Variance(Market). Part 3: Private Company Beta Use comparable public companies: Find betas of similar public companies. Unlever each beta: Unlevered Beta = Levered Beta / [1 + (1 - Tax Rate) × (D/E)]. Average the unlevered betas. Relever using the private company's target capital structure.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 843,
    "question": "What is the impact of a rising risk-free rate on a company's WACC and its valuation from a DCF?",
    "answer": "Reported in Goldman Sachs Interview DCF A rising risk-free rate increases WACC, which decreases DCF valuation. Mechanism: Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium. Higher risk-free rate directly increases Cost of Equity. Cost of Debt also typically rises with risk-free rates. Higher WACC means future cash flows are discounted more heavily. Lower present value of cash flows results in lower valuation.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 844,
    "question": "Walk me from revenue down to unlevered free cash flow.",
    "answer": "Reported in Greenhill & Co. Interview SA 2024, Industrials M&A, Chicago office DCF Revenue - COGS - OpEx = EBIT (operating income) EBIT * (1 - tax rate) = NOPAT NOPAT + D&A and other non-cash charges - CapEx - Change in Working Capital = Unlevered Free Cash Flow",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 845,
    "question": "What is the effect of using the mid-year convention in a DCF?",
    "answer": "Reported in Greenhill & Co. Interview SA 2024, Industrials M&A, Chicago office DCF Shifts each cash‑flow discount date back half a period, raising present value and enterprise value. The uplift reflects the fact that cash is earned throughout the year, not just at year‑end.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 846,
    "question": "What is Free Cash Flow, and why do we focus on it?",
    "answer": "Reported in Jefferies Interview SA 2026 DCF Free Cash Flow is the discretionary cash a company generates after funding operations and maintenance capex. Unlevered FCF = EBIT × (1 − tax rate) + D&A − Capex − ΔNWC It matters because it is the cash available to all capital providers and drives intrinsic value in a DCF.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 847,
    "question": "What happens to a DCF valuation if the tax rate increases?",
    "answer": "Reported in Lazard Interview DCF Higher taxes reduce after-tax EBIT (NOPAT), and thus reduce unlevered free cash flow. The lower cash flows lead to a lower DCF valuation, all else being equal. You might also adjust WACC if the capital structure is affected, but typically the direct effect is on lower free cash flow.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 848,
    "question": "When valuing an apple tree using a DCF, would you prefer to use the Gordon Growth Model or the Exit Multiple Method for the terminal value, and why?",
    "answer": "Reported in Lazard Interview DCF Gordon Growth Model. The tree is a stand‑alone, non‑traded asset whose cash flows are expected to grow at a steady, biologically limited rate rather than be sold at a market multiple. Using a perpetual growth assumption: Aligns with the asset’s economic reality (ongoing harvests). Avoids arbitrary selection of exit multiples that have no observable market comps. Reduces valuation noise—growth rate and discount rate are easier to justify than comparables for trees.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 849,
    "question": "Is the cost of equity always greater than the cost of debt? Explain your reasoning.",
    "answer": "Reported in Lazard Interview DCF Yes in theory; usually in practice. Equity holders are residual claimants and face greater risk of loss than debt holders. Debt enjoys contractual coupons, seniority, and often collateral. Tax deductibility of interest lowers the after‑tax cost of debt further. Exceptions arise in distress situations (very high debt yields) or when models break down (e.g. negative earnings), so cost of debt can technically exceed cost of equity.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 850,
    "question": "Back-to-back DCF questions:Why do we typically use unlevered free cash flow in a DCF instead of levered free cash flow?How do you calculate the Weighted Average Cost of Capital (WACC)?How do you calculate the cost of equity? Explain the Capital Asset Pricing Model (CAPM).",
    "answer": "Back-to-back DCF questions: Why do we typically use unlevered free cash flow in a DCF instead of levered free cash flow? How do you calculate the Weighted Average Cost of Capital (WACC)? How do you calculate the cost of equity? Explain the Capital Asset Pricing Model (CAPM). Reported in Lazard Interview DCF UFCF: UFCF represents cash flow available to all investors (equity and debt) and is used to produce an Enterprise Value, which is typically the output of a DCF. WACC: WACC = Cost of Equity * (% Equity) + Cost of Debt * (% Debt) * (1 – Tax Rate) + Cost of Preferred * (% Preferred). Cost of Equity using CAPM: Cost of Equity = Risk-Free Rate + Beta * Equity Risk Premium. The Risk-Free Rate reflects the return on long-term government bonds (typically 10–20 year U.S. Treasuries). Beta measures how volatile the stock is relative to the market, based on peer companies. The Equity Risk Premium is the market’s expected return above the risk-free rate You may also add a size premium (for smaller, riskier companies) and an industry premium (for sector-specific outperformance expectations) Intuitively, CAPM says investors need to be compensated for both the time value of money (via the risk-free rate) and the risk they’re taking (via beta × equity risk premium). In short, the riskier the stock relative to the market, the higher the return investors will demand.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 851,
    "question": "Why is the yield on the 10-year U.S. Treasury note often used as the risk-free rate?In practice, how do you determine a company's actual cost of debt?",
    "answer": "Reported in Lazard Interview DCF Risk‑Free Rate Backed by the U.S. government > negligible default risk. 10‑year matches long‑term corporate cash‑flow horizon. Highly liquid benchmark traded daily. Cost of Debt Use the yield‐to‑maturity on existing traded bonds. If private, add credit‑spread from rating comps to risk‑free rate. Adjust for tax shield: after‑tax cost = pretax × (1 − tax rate).",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 852,
    "question": "$10 in revenue, Opex, and Capex: Which has the biggest impact on a DCF?(Rank order in terms of magnitude of effect)",
    "answer": "Reported in LionTree Interview SA 2026 DCF Greatest negative to least: $10 increase in CapEx (full $10 cash outflow). $10 increase in Operating Expenses (hits EBIT but is partly offset by lower taxes). $10 increase in Revenue actually raises value; a decrease would mirror OpEx. CapEx directly reduces Free Cash Flow dollar‑for‑dollar, so its impact is largest.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 853,
    "question": "Which has the bigger impact on valuation in a DCF: $10 increase in revenue, $10 decrease in operating expenses, or $10 decrease in Capex?",
    "answer": "Reported in LionTree Interview SA 2026 DCF $10 lower Capex. Capex reduction raises free cash flow dollar‑for‑dollar (no tax). Operating‑expense savings add $10 × (1 – tax), and extra revenue lifts FCF by margin × (1 – tax); both smaller than the Capex impact.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 854,
    "question": "What does the cost of equity represent in a valuation context?Follow up 1: How is it calculated?Follow up 2: Can you explain each component of the formula.",
    "answer": "Reported in Moelis & Co. Interview DCF The cost of equity represents the annual return investors require to compensate for the risk of investing in a company's equity. Follow up 1: Formula The cost of equity can be calculated using the Capital Asset Pricing Model (CAPM) Cost of Equity = Risk-Free Rate + (Beta * Equity Risk Premium) Follow up 2: Components of the formula Risk-Free Rate: The rate of return on a risk-free investment, such as a government bond. Beta: Measure of sensitivity to systematic risk (volatility) relative to broader market. Equity Risk Premium: The additional return investors demand for investing in stocks compared to risk-free investments.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 855,
    "question": "Walk me through the calculation from EBITDA to Unlevered Free Cash Flow (UFCF).",
    "answer": "Reported in Moelis & Co. Interview DCF Walk through: EBITDA - D&A and other non-cash charges = EBIT EBIT * (1 - tax rate) = NOPAT NOPAT + D&A and other non-cash charges - Capex - Changes in WC = UFCF",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 856,
    "question": "In a DCF model, what are three key levers you could adjust to increase the company's valuation?",
    "answer": "Reported in Moelis & Co. Interview DCF Raise revenue/margin growth, lower the discount rate, and use a higher terminal growth or exit multiple. Why they work: Higher cash flows in explicit forecast period. Lower WACC increases the present value of each dollar. Higher terminal value boosts the perpetuity portion, often the largest slice of intrinsic value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 857,
    "question": "What is unlevered free cash flow, and how do you calculate it?",
    "answer": "Reported in Moelis & Co. Interview DCF Unlevered Free Cash Flow (UFCF) is the cash flow available to all investors (debt and equity) before debt payments. Calculation: Start with EBIT (Earnings Before Interest and Taxes). Subtract Taxes on EBIT = EBIT * (1 - Tax Rate) = NOPAT. Add back Depreciation & Amortization (non-cash). Subtract Capital Expenditures (CapEx). Subtract Increase in Net Working Capital (NWC). Formula: UFCF = NOPAT + D&A - CapEx - Δ NWC UFCF represents cash generated by operations available to all capital providers, making it appropriate for enterprise valuation (DCF).",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 858,
    "question": "If WACC is used to discount unlevered free cash flow, what rate would you use to discount levered free cash flow?",
    "answer": "Reported in Moelis & Co. Interview DCF Cost of Equity Levered Free Cash Flow (FCFE) represents cash available to equity holders after debt obligations are met. Since FCFE is an equity-level cash flow, it should be discounted at the Cost of Equity, which reflects the return required by equity investors. WACC is inappropriate because it reflects the blended cost of all capital (debt and equity), while FCFE only accrues to equity holders.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 859,
    "question": "How would you explain the Cost of Equity to someone with no finance background?",
    "answer": "Reported in Moelis & Co. Interview DCF Cost of Equity is the return that investors expect for investing in a company's stock, given the risk involved. Simple analogy: If you lend money to a friend, you might expect them to pay you back with some interest as compensation for the risk. Similarly, when investors buy stock, they expect returns (dividends, price appreciation) as compensation for the risk of owning that company. Riskier companies require higher returns to attract investors—that's their Cost of Equity. For the company, this represents the minimum return it must generate to satisfy equity investors.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 860,
    "question": "Why would one company have a higher WACC than another?",
    "answer": "Reported in Moelis & Co. Interview DCF A company would have a higher WACC due to: Higher Business Risk: More volatile cash flows, cyclical industry, or uncertain outlook increases Cost of Equity. Higher Financial Risk: More leverage increases Cost of Debt and Cost of Equity (higher beta). Lower Credit Rating: Riskier companies pay higher interest rates on debt. Less Debt in Capital Structure: Less tax shield from interest, raising blended WACC. Smaller Size: Smaller companies often have higher cost of capital due to liquidity and risk premiums. Industry: Some industries (e.g., tech startups) have inherently higher WACC than stable utilities.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 861,
    "question": "Theoretically, how is a company's ability to generate cash linked to its value?If you were given a company's cash flow for each of the next 30 years, how would you derive its value?",
    "answer": "Reported in Moelis & Co. Interview DCF A company's value equals the present value of all future cash flows it can generate for investors. To derive value from 30 years of projected cash flows, discount each year's cash flow to present value using an appropriate discount rate (typically WACC), then sum all discounted values. Formula: Value = Σ (CFₜ / (1 + r)ᵗ) for t = 1 to 30. This is the foundation of DCF valuation. In practice, you'd also add a terminal value beyond year 30 to capture perpetual cash flows.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 862,
    "question": "Please answer the following questions about the Discounted Cash Flow (DCF) valuation method:Walk me through a DCF.How is Free Cash Flow (FCF) impacted by an increase in capital expenditures?How is FCF impacted by an increase in depreciation?How do you calculate a company's terminal value?",
    "answer": "Reported in Morgan Stanley Interview London office DCF Part 1: DCF Walkthrough Project unlevered free cash flows (UFCF) over 5-10 years: Revenue → EBITDA → EBIT → NOPAT (EBIT * (1-tax rate)) → add back D&A → subtract CapEx → subtract increase in NWC = UFCF. Discount UFCF to present value using WACC. Calculate terminal value, discount to present. Enterprise Value = PV of UFCFs + PV of Terminal Value. Part 2: CapEx Increase Impact FCF decreases dollar-for-dollar. Higher CapEx directly reduces cash available after reinvestment needs. Part 3: Depreciation Increase Impact FCF increases. Higher D&A reduces taxable income (creating tax shield), then D&A is added back as non-cash expense, resulting in net cash flow increase equal to the tax savings (D&A * tax rate). Part 4: Terminal Value Calculation Two methods: Perpetuity Growth: TV = Final Year FCF * (1+g) / (WACC - g), where g is perpetual growth rate. Exit Multiple: TV = Final Year EBITDA (or EBIT) * Exit Multiple.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 863,
    "question": "How does an increase in leverage affect unlevered free cash flow?",
    "answer": "Reported in Perella Weinberg Interview First round DCF No direct impact. Unlevered FCF excludes interest and debt principal, so changing the capital structure leaves the metric unchanged.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 864,
    "question": "How does an increase in A/R affect valuation in a DCF?",
    "answer": "Reported in Rothschild Interview SA 2026 DCF It lowers the valuation. An A/R build is a use of cash, raising ΔNWC and reducing Free Cash Flow in every forecast period. Lower FCF, when discounted, translates into a smaller present value and lower enterprise (and equity) value.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 865,
    "question": "An asset is expected to generate $100 in cash flow each year into perpetuity.If the appropriate discount rate is 10%, what is this asset worth today?",
    "answer": "Reported in Rothschild Interview First round DCF Answer: $1,000 Calculation: Perpetuity Value = Annual Cash Flow / Discount Rate Perpetuity Value = $100 / 10% = $1,000",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 866,
    "question": "Walk me through a DCF, and conceptually explain what WACC is.",
    "answer": "Reported in UBS Interview SA 2026, New York office, Superday DCF DCF steps: Project unlevered FCF out over a reasonable horizon (i.e. 5-10 years). Discount and sum those cash flows at WACC. Calculate and add PV of terminal value (Gordon Growth or exit multiple). WACC = blended opportunity cost to all capital providers weighted by their market value shares. It reflects required return on a like‑risk asset and is the discount rate for enterprise‑level cash flows.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "UBS"
    ]
  },
  {
    "id": 867,
    "question": "Can a Discounted Cash Flow (DCF) analysis be used to calculate the value of synergies in a transaction? If so, how?",
    "answer": "Reported in Unspecified Interview DCF Yes, DCF can value synergies. Approach: Build standalone DCF for target without synergies. Separately forecast incremental cash flows from synergies (revenue growth, cost savings, reduced CapEx, working capital benefits). Apply appropriate timing (e.g., phase in over 2-3 years). Discount synergy cash flows at appropriate rate (potentially higher rate for execution risk). Present value of synergy cash flows represents synergy value. The sum of standalone value plus synergy value equals the combined company value. The difference between this and the acquisition price determines value creation.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 868,
    "question": "What is the effect of using the mid-year convention in a DCF analysis on the company's valuation?",
    "answer": "Reported in Unspecified Interview Superday DCF The mid-year convention assumes cash flows occur in the middle of each year rather than at year-end. This results in a higher valuation because cash flows are discounted for 0.5 fewer years, increasing their present value. The mid-year convention is generally more accurate as companies generate cash throughout the year, not just on December 31st. Formula adjustment: Discount factor becomes 1/(1+r)^(n-0.5) instead of 1/(1+r)^n.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 869,
    "question": "What are the key drivers you would sensitize in a DCF model to see the impact on valuation?",
    "answer": "Reported in Unspecified Interview Superday DCF Key sensitivity drivers in a DCF: Revenue growth rate (most impactful top-line driver). EBITDA margin or operating margin (profitability). WACC (discount rate reflecting risk). Terminal growth rate (perpetuity value assumption). Terminal multiple (alternative exit assumption). CapEx as % of revenue (reinvestment needs). Working capital changes (cash conversion). Tax rate (affects after-tax cash flows). Typically create 2-way sensitivity tables for WACC vs. terminal growth rate or terminal multiple.",
    "topic": "DCF",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 870,
    "question": "Walk me through a DCF.Follow-up 1: Why use a 5-10 year projection?Follow-up 2: Could we do a 25-year DCF?",
    "answer": "Walk me through a DCF. Follow-up 1: Why use a 5-10 year projection? Follow-up 2: Could we do a 25-year DCF? Reported in Allen & Company Interview SA 2026 DCF DCF steps: Project unlevered FCF for 5–10 years. Estimate terminal value (Gordon Growth or exit multiple). Discount both at WACC and sum to get enterprise value. Follow‑ups: Forecast accuracy drops sharply beyond 5–10 years; using that range balances visibility and value capture. A 25‑year DCF is theoretically possible but small forecasting errors compound, so most value practitioners rely on a shorter explicit period plus a terminal value.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 871,
    "question": "What is a levered DCF?Follow-up 1: What discount rate do you use?Follow-up 2: How do you calculate cost of equity?",
    "answer": "What is a levered DCF? Follow-up 1: What discount rate do you use? Follow-up 2: How do you calculate cost of equity? Reported in Allen & Company Interview SA 2026 DCF A levered DCF discounts cash flows after interest and mandatory principal at the Cost of Equity to value equity directly. Follow‑ups: The discount rate is the company’s Cost of Equity. Cost of Equity = Risk‑free rate + Beta × Equity risk premium ± size/sector adjustments (CAPM).",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 872,
    "question": "How would you factor cross-border risk in a DCF?",
    "answer": "Reported in Bank of America Interview DCF To account for cross-border risk, you might add a country risk premium to the cost of equity. This premium reflects political, economic, and currency risks in the target country. You also might adjust the discount rate to reflect higher uncertainty or incorporate scenario analyses to account for potential currency swings, regulatory changes, or macroeconomic volatility.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 873,
    "question": "A stable utility company shifts to renewables and a new business model.How far out would you project cash flows, and what is the risk of using a shorter projection period?",
    "answer": "Reported in Bank of America Interview DCF Project 10–15 years to capture the full transition, ramping renewables build-out and new model adoption. Longer asset useful lives in renewables (20–30 years) mean benefits accrue well beyond a 10-year window, which is another reason for a longer projection. A shorter period pushes too much value into the terminal, making your valuation overly sensitive to exit assumptions. You risk missing multi-year capex and operational inflection points unique to the shift.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 874,
    "question": "You’re valuing a high-growth SaaS firm (30% growth, 30% margin) in a DCF.How do you build projections, choose an EBITDA exit multiple for terminal value, and should you base the multiple on the final projected year or the following year?",
    "answer": "Reported in Bank of America Interview DCF Key steps & guidance: Build projections: Model revenue ramp from 30% toward a long-term stable rate (e.g. 3–5%), gradually expand margins from 30% to mature levels (40–45%) as fixed costs leverage out. Choose exit multiple: Use public & M&A comps in a stable-growth SaaS group (e.g. 12–15× EBITDA), adjusted for size, growth differential, and margin profile. Which year: If applying an LTM (Last Twelve Months) exit multiple, anchor it on the final year of your projection period (Year N). If applying an NTM (Next Twelve Months) forward multiple, apply it to the year after your projection period (Year N+1). Either way, it yields the Terminal Value at Year N.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 875,
    "question": "A company switches accounting from LIFO to FIFO.How does that affect a DCF valuation?",
    "answer": "Reported in Bank of America Interview DCF In an inflationary environment (rising costs), FIFO lowers cost of goods sold, raising EBITDA but also increasing taxes; inventory balances increase, which ties up cash in working capital and reduces free cash flow. In a deflationary environment (falling costs), FIFO raises cost of goods sold, lowering EBITDA and taxes; inventory balances decrease, which releases working capital and increases free cash flow. In your DCF you must project the new EBITDA, adjust the cash‐tax line accordingly, model the working capital changes, and base terminal value on the resulting free cash flow profile. The net impact on enterprise value therefore depends on the relative size of the EBITDA change versus the changes in taxes and working‐capital cash flow Keep in mind that these are simply different ways of recording the value of inventory (LIFO (last-in-first-out) = most recent inventory additions; FIFO (first-in-first-out) = oldest inventory additions). Revenue stays the same for both LIFO and FIFO.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 876,
    "question": "Walk me from Net Income to EBIT, then EBITDA, then back to EBIT and get me to FCF, then walk me through a DCF.",
    "answer": "Reported in BMO Interview DCF Net Income to EBIT: Add back interest and taxes to Net Income. EBIT to EBITDA: Add back depreciation and amortization. EBITDA back down to EBIT: Subtract depreciation and amortization again. EBIT to FCF: Subtract taxes, add non-cash expenses, adjust for changes in working capital, and subtract capex to get unlevered free cash flow. DCF: Project free cash flows over 5-10 years, discount them at WACC, and calculate a terminal value (exit multiple or perpetuity method). Discount the terminal value as well, sum to get enterprise value, then adjust for net debt to arrive at equity value.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "BMO"
    ]
  },
  {
    "id": 877,
    "question": "How do you account for Stock-Based Compensation (SBC) in a DCF?",
    "answer": "Reported in Centerview Partners Interview First round DCF Stock-Based Compensation is a non-cash expense that should be added back in the cash flow statement when calculating unlevered free cash flow. However, SBC creates real economic dilution to shareholders. Two approaches to account for this dilution: Add back SBC in cash flows but use diluted share count (including in-the-money options using treasury stock method) when calculating equity value per share. Treat SBC as a real cash expense by not adding it back, keeping the basic share count. Most practitioners use approach #1, as it better reflects the economic reality of dilution while maintaining consistency with accounting treatment.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Centerview Partners"
    ]
  },
  {
    "id": 878,
    "question": "How would you calculate cost of equity for a company whose cash flows are in a foreign currency?",
    "answer": "Reported in Citi Interview DCF You could use CAPM but factor in a country risk premium if it’s an emerging market, or if currency risk is significant. Alternatively, you’d convert the cash flows to USD (if using USD-based CAPM) or use a local risk-free rate, local market risk premium, and local beta to do it in the foreign currency, then convert final values back to USD.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 879,
    "question": "What if you're 90% terminal value in a DCF?",
    "answer": "Reported in Citi Interview DCF That suggests the company’s value is heavily in the terminal period, typical of high-growth or long-duration cash flows. It also indicates forecasting uncertainty in earlier years and that small changes in the terminal assumptions (multiple or growth rate) can dramatically affect the valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 880,
    "question": "Answer the following questions:What is Net Working Capital (NWC) given: Accounts Receivable = $100, Inventory = $20, and Accounts Payable = $20?Walk me from Revenue to Unlevered Free Cash Flow (UFCF).Calculate UFCF given: Revenue = $2,000, Gross Margin = 50%, SG&A = $500, Tax Rate = 25%, Capex = $100, D&A = $50, and NWC in the current year = $40. Assume the NWC from the previous part was for the prior year.",
    "answer": "Answer the following questions: What is Net Working Capital (NWC) given: Accounts Receivable = $100, Inventory = $20, and Accounts Payable = $20? Walk me from Revenue to Unlevered Free Cash Flow (UFCF). Calculate UFCF given: Revenue = $2,000, Gross Margin = 50%, SG&A = $500, Tax Rate = 25%, Capex = $100, D&A = $50, and NWC in the current year = $40. Assume the NWC from the previous part was for the prior year. Reported in Citi Interview Superday DCF Part 1: Net Working Capital Answer: $100 NWC = AR + Inventory - AP NWC = $100 + $20 - $20 = $100 Part 2: Revenue to UFCF Revenue - COGS = Gross Profit Gross Profit - SG&A - D&A = EBIT EBIT * (1 - Tax Rate) = NOPAT NOPAT + D&A - Capex - Increase in NWC = UFCF Part 3: Calculate UFCF Answer: $347.50 Revenue = $2,000 Gross Profit = $2,000 * 50% = $1,000 EBIT = $1,000 - $500 - $50 = $450 NOPAT = $450 * (1 - 25%) = $337.50 Change in NWC = $40 - $100 = -$60 (decrease) UFCF = $337.50 + $50 - $100 - (-$60) = $347.50 Note: The decrease in NWC is a source of cash, so we add it back in the UFCF calculation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 881,
    "question": "Walk me through a DCF for a solar farm, starting with how you would project revenue and cash flows.",
    "answer": "Reported in Credit Suisse Interview Energy & Infrastructure group, First round DCF Revenue Projection: Capacity (MW) * Capacity Factor (%) * Hours per Year * Power Price ($/MWh). Consider Power Purchase Agreements (PPAs) with fixed pricing or merchant exposure to spot prices. Account for degradation (typically 0.5% annually). Cash Flow Projection: Revenue - Operating Costs (O&M, insurance, land lease). Subtract taxes (consider ITC or PTC benefits). Subtract minimal maintenance CapEx. Minimal working capital needs. Terminal Value: Use perpetuity with low/zero growth or asset salvage value. Consider useful life (typically 25-30 years). Discount Rate: Use project WACC reflecting contracted cash flows and asset-backed financing.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Credit Suisse"
    ]
  },
  {
    "id": 882,
    "question": "Which of the following has a greater impact in a DCF valuation? A $1 increase in revenue, a $1 increase in cash OpEx, or a $1 increase in changes in NWC?Rank them from greatest to least impact.",
    "answer": "Reported in Evercore Interview DCF NWC > OpEx > Revenue. The greatest impact is from changes in NWC, followed by cash OpEx, and then revenue. NWC has the largest effect because it impacts cash flows directly without influencing taxes (it is applied after taxes in the model). Cash OpEx ranks higher than revenue because increasing revenue also drives up COGS, partially offsetting its effect. Caveat: This ranking assumes the changes occur during the explicit projection period. If the change occurs in the terminal year (assuming an Exit Multiple method), the order flips to OpEx > Revenue > NWC, because OpEx and Revenue permanently affect EBITDA (the driver of Terminal Value), whereas NWC changes do not.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 883,
    "question": "As an investor who uses a DCF, would you rather have a $10 increase in revenue, a $10 increase in gross profit, or a $10 decrease in CapEx?Rank them from greatest to least impact.",
    "answer": "Reported in Evercore Interview DCF The most impactful would be a decrease in CapEx (no tax impact), followed by an increase in gross profit, and then an increase in revenue (since revenue growth also drives up COGS).",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 884,
    "question": "Assuming a 40% tax rate, which of the following three scenarios has the biggest impact on Free Cash Flow?A $10 increase in RevenueA $10 decrease in DepreciationA $10 decrease in CapExFollow-up: Which of these would have the biggest impact on the terminal value in a DCF?",
    "answer": "Reported in Evercore Interview New York Office, Second round DCF Part 1: FCF Impact A $10 decrease in CapEx has the biggest positive impact on FCF. Impact Analysis: $10 Decrease in CapEx: This is a direct cash savings. FCF increases by +$10. $10 Increase in Revenue: This increases after-tax profit. Assuming for simplicity a 100% margin, Pre-tax Income rises by $10, and Net Income rises by $6 ($10 × (1-40%)). FCF increases by +$6. (The actual impact would be lower depending on the company's true operating margin). $10 Decrease in Depreciation: This increases Pre-tax Income by $10, which increases taxes by $4 ($10 × 40%). Because depreciation is a non-cash expense that is added back, the net impact is the loss of the tax shield. FCF decreases by -$4. Ranking by Impact: The ranking from most positive to most negative impact on FCF is: (3) CapEx Decrease > (1) Revenue Increase > (2) Depreciation Decrease. Part 2: Terminal Value Impact The $10 increase in Revenue has the biggest impact on the terminal value. Terminal value calculations (both perpetuity growth and exit multiple methods) are based on the final year's cash flow or EBITDA. A revenue increase grows the base for all future periods, compounding its effect into perpetuity, whereas a change in CapEx or Depreciation is a one-time adjustment in the terminal year calculation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 885,
    "question": "If WACC increases, can the Present Value in a DCF also increase?",
    "answer": "Reported in Evercore Interview First round DCF Yes, in rare cases where future cash flows are negative (cash outflows). Typically, higher WACC reduces PV since future positive cash flows are discounted more heavily. However, if a project has significant upfront investment followed by negative terminal cash flows (e.g., decommissioning costs), a higher discount rate would reduce the PV of those negative flows, potentially increasing net present value. In practice, this is extremely rare and DCF valuations almost always decrease with higher WACC.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 886,
    "question": "If you could only see one number from an analyst's DCF model to determine the Enterprise Value, which number would you choose?",
    "answer": "Reported in Goldman Sachs Interview New York office DCF The terminal value. Terminal value typically represents 60-80% of total enterprise value in a DCF model, as it captures all cash flows beyond the explicit forecast period. Knowing the terminal value and assuming a reasonable PV of forecast period cash flows would give you a strong approximation of enterprise value. Alternative answer: WACC, since combined with cash flow assumptions you could reconstruct the valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 887,
    "question": "If your terminal value assumptions in a DCF imply a perpetuity growth rate of 6%, what does that signify and what adjustments should you make?",
    "answer": "Reported in Goldman Sachs Interview Superday DCF A 6% perpetuity growth rate is unrealistically high and implies the company will grow faster than GDP indefinitely. Adjustments: Reduce the growth rate to 2-3% (closer to long-term GDP growth). Alternatively, use an exit multiple approach instead of perpetuity growth. Review your terminal year assumptions to ensure they're sustainable. Consider if you're in a high-growth year that shouldn't be perpetualized.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 888,
    "question": "A company discovers its annual depreciation was understated by $10 million. After correcting this accounting error, what is the net impact on its Unlevered Free Cash Flow? Assume a 40% tax rate.",
    "answer": "Reported in Goldman Sachs Interview Superday DCF Answer: +$4M increase Correcting the depreciation error increases depreciation expense, which reduces pre-tax income and taxes, but depreciation is a non-cash expense that gets added back in the cash flow calculation. Higher Depreciation reduces Pre-Tax Income by $10M This reduces Taxes by $10M * 40% = $4M Net Income decreases by $10M * (1 - 40%) = $6M In UFCF: Start with lower NI (-$6M) Add back higher Depreciation (+$10M) Net impact = -$6M + $10M = +$4M The tax shield from additional depreciation increases UFCF by $4M.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 889,
    "question": "How do you handle changes to debt levels in your cost of debt and WACC for an all-equity company that “matures” in 10 years?",
    "answer": "Reported in Greenhill & Co. Interview DCF Even if the company is all equity now, you might assume it will add debt as it matures. You can model a target capital structure for year 10 and gradually move the WACC toward that. Alternatively, you keep a pure equity discount rate but mention that if the company leverages, the cost of debt would be factored in once it’s introduced.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 890,
    "question": "What are three ways that a change in interest rates can affect a DCF valuation?",
    "answer": "Reported in J.P. Morgan Interview SA 2025 DCF Three ways interest rates impact DCF: Discount Rate (WACC): Higher rates increase WACC (both risk-free rate and cost of debt rise), reducing PV of cash flows and lowering valuation. Cash Flows (Interest Expense): Higher rates increase interest expense on debt, reducing Net Income and Free Cash Flow, lowering valuation. Terminal Value: Higher discount rate reduces the present value of terminal value, which typically comprises 50-80% of total DCF value, materially lowering valuation. Net effect: Rising interest rates compress valuations through multiple channels. Falling rates have the opposite effect.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 891,
    "question": "If an analyst miscalculates Depreciation & Amortization to be 50% too low, how would correcting this error affect a DCF valuation?",
    "answer": "Reported in J.P. Morgan Interview Second round DCF Valuation would increase. Analysis: Correcting D&A upward increases the D&A add-back in FCF. EBIT decreases, but the tax shield increases (lower taxes). Net effect: Higher FCF due to the non-cash add-back exceeding the tax impact. Higher FCF leads to higher present value and thus higher valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 892,
    "question": "When would it be appropriate to use a negative growth rate in the perpetuity calculation of a DCF?",
    "answer": "Reported in J.P. Morgan Interview Second round DCF Use a negative growth rate when the company is in structural decline: Obsolete technology or products (e.g., print newspapers, DVDs). Shrinking end markets with no pivot strategy. Regulated industries facing phase-outs (e.g., coal power plants). Companies with depleting natural resources. A negative growth rate reflects the reality that cash flows will decline perpetually.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 893,
    "question": "What does a levered DCF represent, conceptually?",
    "answer": "Reported in Jefferies Interview SA 2026 DCF It discounts the cash flows left after debt service to equity holders at the Cost of Equity, giving equity value directly and therefore embedding the capital structure in the valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 894,
    "question": "Revenues = 1000, COGS + SG&A = 400, D&A = 200, Capex = 100, tax rate = 10%.Last year NWC was 150; this year it's 175. Calculate FCF.",
    "answer": "Reported in Jefferies Interview SA 2026 DCF Answer: $435 EBIT = 1000 − 400 − 200 = 400 NOPAT = 400 × 0.9 = 360 Add back D&A: +200 Less Capex: −100 Less ΔNWC: 175 − 150 = 25 FCF = 360 + 200 − 100 − 25 = 435",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 895,
    "question": "Why is WACC U-shaped?",
    "answer": "Reported in Lazard Interview DCF As you initially add debt to a capital structure, WACC decreases due to the tax shield on debt (lower cost than equity). But if you add too much debt, financial distress risk rises, pushing the cost of both debt and equity higher. So at low leverage, adding debt lowers WACC; at high leverage, adding debt raises WACC. This creates a U-shaped curve.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 896,
    "question": "Discuss the key components and assumptions involved in deriving a discount rate for a DCF analysis.Specifically address the risk-free rate, equity risk premium (ERP), size premium, and country risk premium.",
    "answer": "Reported in Lazard Interview New York Office, Second round DCF Key discount rate components: Risk-Free Rate: Typically 10-year government bond yield, representing time value of money without risk. Equity Risk Premium (ERP): Additional return investors demand for equity vs. risk-free assets (typically 5-7%). Beta: Measures systematic risk relative to market, multiplied by ERP in CAPM. Size Premium: Small-cap stocks require higher returns due to liquidity and risk (0-3%). Country Risk Premium: Additional return for emerging market or political risk, added for non-US companies. Cost of Equity = Risk-Free Rate + (Beta × ERP) + Size Premium + Country Risk Premium WACC then blends Cost of Equity with after-tax Cost of Debt based on target capital structure.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 897,
    "question": "What is the difference between DCF and LBO cash flows, from revenue down?(UFCF vs. LFCF)",
    "answer": "UFCF vs. LFCF) Reported in LionTree Interview SA 2026 DCF From Revenue Down: DCF: EBIT × (1 − Tax) + D&A and other non-cash items − CapEx − ΔNWC → Unlevered Free Cash Flow. LBO: Net Income + D&A and other non-cash items − CapEx − ΔNWC − Debt service → Levered Free Cash Flow to equity. UFCF vs LFCF UFCF ignores the capital structure; it’s cash available to all providers of capital and is discounted at WACC. LFCF reflects interest expense & principal pay-down; it’s cash only to equity holders and feeds an IRR calculation in the LBO context.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 898,
    "question": "Revenue is 1000, EBITDA margin 20%, tax rate 20%, depreciation 50, capex 60, inventory up 10, accounts payable up 50.Calculate unlevered free cash flow (UFCF).",
    "answer": "Reported in Moelis & Co. Interview First round DCF EBITDA = 200. EBIT = 200 − 50 = 150. NOPAT = 150 × (1 − 20%) = 120. ΔNWC = 10 − 50 = −40 (source of cash). UFCF = 120 + 50 − 60 + 40 = 150.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 899,
    "question": "Two companies:1 - A coal company whose cash flows go from 100 down to 0 over 10 years.2 - A tech company whose cash flows go from 0 up to 100 over 10 years.Over this time, the FED rate goes from 3% to 8%. Which company is valued higher?",
    "answer": "Two companies: 1 - A coal company whose cash flows go from 100 down to 0 over 10 years. 2 - A tech company whose cash flows go from 0 up to 100 over 10 years. Over this time, the FED rate goes from 3% to 8%. Which company is valued higher? Reported in Moelis & Co. Interview SA 2026 DCF At 8%, the coal company may be valued higher. Its cash is front‑loaded, so higher discount rates hurt less. Tech’s long‑duration cash flows get heavily discounted, crushing terminal value. At low rates the result reverses; duration drives sensitivity.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 900,
    "question": "How would you determine the cost of equity for a gold mine, and what would be unusual about its beta?",
    "answer": "Reported in Moelis & Co. Interview DCF Apply CAPM using an un‑levered average of publicly traded gold‑miner betas, then re‑lever for the target capital structure. The beta is often low or even slightly negative because gold prices can move counter‑cyclically to equities.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 901,
    "question": "How do you incorporate considerations of risk into a DCF analysis?",
    "answer": "Reported in Moelis & Co. Interview DCF Risk is incorporated into a DCF through: Discount Rate (WACC): Higher risk → higher WACC → lower valuation. Risk reflected in Cost of Equity (beta) and Cost of Debt. Cash Flow Projections: Conservative assumptions for uncertain scenarios reduce projected cash flows. Terminal Growth Rate: Lower perpetual growth rates reflect maturity and competitive pressures. Scenario Analysis: Model base, upside, and downside cases to assess range of outcomes. Probability Weighting: Assign probabilities to different scenarios for expected value. Sensitivity Analysis: Test impact of key variables (revenue growth, margins, WACC) on valuation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 902,
    "question": "Walk me through how you would perform a DCF valuation for a gold mine.",
    "answer": "Reported in Moelis & Co. Interview First round DCF Key steps for gold mine DCF: Forecast Production: Estimate annual gold production (ounces) based on reserves, extraction rates, and mine life. Gold Price Assumptions: Project gold prices (spot, futures curve, or long-term average). Revenue: Annual production * gold price forecast. Operating Costs: Cash costs per ounce (mining, processing, admin) + capital expenditures (development, equipment, reclamation). Calculate Unlevered Free Cash Flow: Revenue - Operating Costs - CapEx - Taxes. Discount Rate: Use WACC reflecting mining sector risk, commodity price volatility, and geopolitical factors. Terminal Value: Typically zero (finite reserves) or residual land value. Sum discounted cash flows to get NPV.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 903,
    "question": "If a company has a changing capital structure over the forecast period, should you use levered or unlevered free cash flow for a DCF valuation?",
    "answer": "Reported in Morgan Stanley Interview SF Office DCF Use unlevered free cash flow (FCFF). Unlevered FCF isolates operating performance from financing decisions. When capital structure changes, levered FCF becomes inconsistent as it reflects varying interest expenses and debt levels. By using unlevered FCF and WACC, you value the enterprise independent of capital structure changes. The changing debt levels are captured in the WACC calculation, which should be updated annually to reflect the evolving capital structure. Alternatively, if using levered FCF, you must use a flow-to-equity approach with a changing cost of equity, which is more complex.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 904,
    "question": "If given a 100-year DCF, what would you expect about CAPEX and D&A at the 100th year?",
    "answer": "Reported in Nomura Greentech Interview Full-Time Analyst 2024, SF Office, Superday DCF They should converge: maintenance CAPEX ≈ D&A, both growing at or below inflation, reflecting a steady‑state business with no incremental growth spend.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Nomura Greentech"
    ]
  },
  {
    "id": 905,
    "question": "Holding all else equal, which depreciation method results in a higher DCF valuation: straight-line or accelerated depreciation?",
    "answer": "Reported in Perella Weinberg Interview New York Office DCF Accelerated depreciation results in higher DCF valuation. Accelerated depreciation front-loads tax deductions, creating larger tax shields in earlier years. This increases near-term free cash flows, which are more valuable in a DCF due to time value of money (earlier cash flows are discounted less). While total depreciation over the asset's life is identical under both methods, the present value of tax savings is higher with accelerated depreciation.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 906,
    "question": "Part 1: How would your DCF approach differ for a Starbucks located on a college campus, in a downtown city area, and in an airport terminal?Part 2: For each location, what are the key supply-side constraints you would need to consider in your forecast?",
    "answer": "Reported in Perella Weinberg Interview New York Office DCF Part 1: DCF Approach by Location College campus: Seasonal demand (lower during breaks), predictable customer base, moderate pricing. Forecast adjusted for academic calendar. Downtown city: Steady weekday traffic, commuter-driven, premium pricing. Higher rent, stable cash flows with strong morning/lunch peaks. Airport terminal: High volume, captive customers, premium pricing. Volatile based on flight schedules and travel trends. Very high rent and operating costs. Part 2: Supply-Side Constraints College campus: Limited operating hours, restricted access during breaks, lease terms tied to university contracts. Downtown city: Commercial lease terms, zoning restrictions, labor availability and costs, parking/accessibility. Airport terminal: Concession agreements, strict operating hours tied to terminal schedules, very high rent as % of sales, security and regulatory compliance costs.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 907,
    "question": "You are comparing two companies with the same EBITDA: a management consulting firm (asset-light) and a heavy manufacturing firm (capital-intensive).Which company's DCF would likely yield a higher valuation, and why?",
    "answer": "Reported in Perella Weinberg Interview New York Office, Second round DCF The consulting firm would likely have a higher DCF valuation. Key reasons: Lower CapEx requirements mean higher Free Cash Flow despite same EBITDA. Less working capital investment needed for growth. Higher cash conversion ratio. Lower reinvestment needs to maintain operations. The manufacturing firm requires significant ongoing CapEx for equipment maintenance and replacement, reducing FCF available to equity holders.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 908,
    "question": "3 places taxes affect the DCF?Follow-up: How does each place get affected if taxes increase?",
    "answer": "3 places taxes affect the DCF? Follow-up: How does each place get affected if taxes increase? Reported in Rothschild Interview SA 2026 DCF NOPAT in FCF — higher taxes cut NOPAT and FCF. Cost of Debt — higher taxes increase the shield, lowering the after‑tax cost and WACC. Levered Beta — conversion from Unlevered to Levered. Overall, FCF falls and the discount rate may fall; valuation typically declines.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 909,
    "question": "In a DCF analysis, where is idiosyncratic (company-specific) risk accounted for: in the numerator (projected cash flows) or the denominator (WACC)?",
    "answer": "Reported in Unspecified Interview DCF Idiosyncratic risk is primarily accounted for in the numerator through probability-weighted cash flow projections and scenario analysis. The denominator (WACC) reflects systematic market risk via beta, not company-specific risk. Under CAPM theory, idiosyncratic risk can be diversified away and thus is not priced in the discount rate. In practice, company-specific risks are addressed by adjusting cash flow assumptions, creating downside cases, or applying appropriate probability weightings to different scenarios.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 910,
    "question": "How would you adjust a DCF for a major, unexpected economic shock (e.g., a global pandemic)?How would this affect your assumptions for the terminal growth rate?",
    "answer": "Reported in Unspecified Interview DCF Key adjustments to near-term forecasts: Model severe revenue declines in shock years Adjust margins for operational disruptions Incorporate government support or liquidity needs Extend recovery period before normalization Increase discount rate to reflect heightened risk Terminal growth rate impact: Typically unchanged if shock is temporary and doesn't alter long-term structural economics Reduce if shock permanently impairs industry (e.g., retail shift to e-commerce) Consider scenario analysis with multiple terminal assumptions given uncertainty",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 911,
    "question": "How would an increase in employee stock-based compensation impact unlevered free cash flow?",
    "answer": "Reported in Unspecified Interview DCF Mechanically, Stock-Based Compensation (SBC) is a non-cash operating expense, so it is added back in the calculation of unlevered free cash flow, which increases reported UFCF relative to cash compensation. However, many practitioners prefer to treat SBC as a cash expense (do not add it back) to reflect the real economic dilution to shareholders, which results in a lower UFCF.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 912,
    "question": "In the final year of a DCF projection, a company has the following metrics:EBITDA: $125D&A: $25Taxes: $25Capital Expenditures: $25Change in Working Capital: $0Assuming a perpetual cash flow growth rate of 3% and a required rate of return of 13%, what is the company's Terminal Value?",
    "answer": "Reported in Unspecified Interview DCF Answer: $773 Calculation: EBIT = EBITDA - D&A = $125 - $25 = $100. NOPAT = EBIT - Taxes = $100 - $25 = $75. Unlevered FCF = NOPAT + D&A - CapEx - Change in NWC. Unlevered FCF = $75 + $25 - $25 - $0 = $75. Terminal Value = FCF * (1 + g) / (WACC - g). Terminal Value = $75 * (1.03) / (0.13 - 0.03) = $77.25 / 0.10 = $772.50.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 913,
    "question": "In a DCF analysis, Company A and Company B are identical in every way, except Company A has a terminal multiple of 20x EBITDA and Company B has a terminal multiple of 12x EBITDA.What could justify this difference?",
    "answer": "Reported in Unspecified Interview DCF Factors that could justify higher terminal multiples for Company A: Higher expected perpetual growth rate beyond the forecast period Superior competitive positioning or sustainable competitive advantages Lower risk profile or more stable cash flows Better management quality or corporate governance Operating in a more attractive industry with better long-term dynamics Higher barriers to entry or network effects Better capital efficiency or higher returns on invested capital Lower capital intensity or working capital requirements The terminal multiple should reflect the company's long-term competitive position and growth prospects at steady state. Market multiples at the time of exit also play a role in selecting appropriate terminal multiples.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 914,
    "question": "Part 1: A pre-revenue startup is expected to take 20 years to reach maturity. Your boss asks for a 5-year DCF. What are the challenges with this approach?Part 2: If a DCF is not suitable, what valuation methods could you use instead?",
    "answer": "Reported in Unspecified Interview Superday DCF Part 1: DCF Challenges No Historical Financials: Difficult to project cash flows without revenue history. High Uncertainty: 20-year maturity means 5-year forecast misses most value creation. Terminal Value Dominance: TV would represent nearly 100% of value, making DCF unreliable. Discount Rate Complexity: High risk and no comparable betas make WACC calculation difficult. Part 2: Alternative Methods Venture Capital Method: Value at exit based on comparable exits, discount back at target IRR. Precedent Transactions: Value based on prices paid for similar early-stage companies. Comparable Company Analysis: Use EV/Revenue or EV/Users for similar pre-revenue firms. Scorecard/Checklist Method: Adjust average startup valuations based on qualitative factors.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 915,
    "question": "Let's say you are building a DCF analysis. If a company only gave you one year of financials, how would you calculate FCF for the remaining four years?",
    "answer": "Reported in Wells Fargo Interview DCF You’d still project revenue growth, operating margins, and capex assumptions for years 2–5, even if they’re estimates. For year 1, use the actuals. Then apply logical assumptions or benchmarks for subsequent years (e.g., industry growth rates, historical trends, management guidance) to forecast free cash flows and discount them back.",
    "topic": "DCF",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Wells Fargo"
    ]
  }
];

module.exports = { DCF };
