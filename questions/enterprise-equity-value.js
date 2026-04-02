// Auto-generated — do not edit directly. Source of truth is questions.json
/** @type {import('../types').Question[]} */
const ENTERPRISE_EQUITY_VALUE = [
  {
    "id": 43,
    "question": "Why do we look at both Enterprise Value and Equity Value?",
    "answer": "Enterprise Value reflects the company’s value attributable to all investors. Equity Value represents only the portion available to shareholders. We look at both because Equity Value is what the public sees, while Enterprise Value offers a more holistic view of the company’s worth.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 44,
    "question": "When evaluating an acquisition, should you focus on Enterprise Value or Equity Value?",
    "answer": "You focus on Enterprise Value, because it reflects the total amount that all investors (debt and equity) are entitled to. Equity Value ignores debt and other obligations that an acquirer will likely have to assume or refinance.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 45,
    "question": "What is the basic formula for Enterprise Value?",
    "answer": "Enterprise Value = Equity Value + Debt + Preferred Stock + Minority Interest – Cash Sometimes, other items like capital leases and unfunded pension obligations are added, but this is the standard starting formula.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 46,
    "question": "Why is Minority Interest added in the calculation of Enterprise Value?",
    "answer": "When a company owns more than 50% of another entity, it consolidates 100% of that subsidiary’s financial results in its own statements. Metrics like revenue and EBITDA then reflect the entire subsidiary, so you add Minority Interest to align the ownership value with those consolidated figures.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 47,
    "question": "How do you calculate fully diluted shares?",
    "answer": "Start with the basic share count and add the dilutive effect of options, warrants, or convertible securities. Use the Treasury Stock Method for options and warrants: assume in-the-money instruments are exercised and any proceeds buy back shares.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 48,
    "question": "A company has 100 shares at $10 each and 10 options at a $5 strike. What is its fully diluted Equity Value?",
    "answer": "Basic Equity Value is 100 × $10 = $1,000. Those 10 in-the-money options generate $5 × 10 = $50 if exercised. The company uses that $50 to repurchase 5 shares at $10 each, so net new shares = 5. Fully diluted share count is 105. Fully diluted Equity Value is 105 × $10 = $1,050.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 49,
    "question": "Another company has 100 shares at $10 each and 10 options at a $15 strike. What is its fully diluted Equity Value?",
    "answer": "Since the exercise price ($15) exceeds the current share price ($10), the options are out-of-the-money. No dilution occurs, so fully diluted Equity Value remains 100 × $10 = $1,000.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 50,
    "question": "Why subtract cash when calculating Enterprise Value? Is it always correct?",
    "answer": "Cash is subtracted because it’s seen as a non-operating asset that can reduce the net purchase price. In reality, you should subtract only excess cash beyond what’s needed for daily operations, but most models subtract total cash for simplicity.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 51,
    "question": "Should Debt always be added to Equity Value when calculating Enterprise Value?",
    "answer": "In almost all cases, yes. Debt typically has to be repaid or assumed by the acquirer, so it increases the effective price of the target. Very rare exceptions exist if the acquirer doesn’t pay off the debt, but that’s uncommon in M&A.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 52,
    "question": "Can Enterprise Value be negative? What does that imply?",
    "answer": "Yes. If a company has very large cash balances or a minuscule market capitalization, the result can be negative. This situation typically arises for distressed companies or certain financial institutions with huge cash holdings.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 53,
    "question": "Can a company have a negative Equity Value?",
    "answer": "A company's market equity value (i.e., its market cap) cannot be negative, as share prices and share counts cannot be negative. However, a company's book equity value (from the balance sheet) can be negative if it has sustained significant losses over time. Additionally, a company's implied equity value (calculated from Enterprise Value) can be negative in a valuation or restructuring scenario. This occurs if the company's total debt and other senior claims exceed its enterprise value, indicating that equity holders would receive nothing in a sale.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 54,
    "question": "Why do we add Preferred Stock to Equity Value when calculating Enterprise Value?",
    "answer": "Preferred Stock has debt-like characteristics: fixed dividends and a higher claim on assets than common equity. From an acquirer’s viewpoint, it’s more like debt than equity, so it’s included in Enterprise Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 55,
    "question": "A company has 1 million shares at $100 each and $10 million in convertible bonds, par $1,000, conversion price $50. How many diluted shares are there?",
    "answer": "Each $1,000 bond converts into $1,000 ÷ $50 = 20 shares. There are $10 million ÷ $1,000 = 10,000 bonds, for 10,000 × 20 = 200,000 new shares. Total shares = 1,000,000 + 200,000 = 1.2 million (since the bonds are in-the-money).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 56,
    "question": "How is Equity Value different from Shareholders’ Equity?",
    "answer": "Equity Value is a market-based measure (share price × shares), while Shareholders’ Equity is the book value from the Balance Sheet. Equity Value can’t be negative, but Shareholders’ Equity can be, depending on a company’s assets and liabilities.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 57,
    "question": "Besides Cash, Debt, Preferred Stock, and Minority Interest, which other items might appear in Enterprise Value?",
    "answer": "You might adjust for capital leases, unfunded pension obligations, equity investments, or other non-operating assets or liabilities. Different banks treat these differently, but the main idea is “add debt-like items, subtract cash-like items.”",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 58,
    "question": "Why do you add Non-Controlling Interest (Minority Interest) when moving from Equity Value to Enterprise Value?",
    "answer": "Minority Interest pertains to a subsidiary that you partially own and fully consolidate. It’s not truly your “equity,” but you still recognize 100% of the subsidiary’s performance (EBITDA). Hence, you add Minority Interest separately to Enterprise Value so that the numerator (EV) captures the full value of the subsidiary, matching the denominator (EBITDA) which captures the full earnings.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 59,
    "question": "In an acquisition, do you value a target based on basic shares or fully diluted shares?",
    "answer": "You typically use the fully diluted share count, because any in-the-money options or convertible securities will likely vest or convert in a change-of-control scenario. That increases the effective purchase price.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 60,
    "question": "Could a company's Enterprise Value ever match its Equity Value exactly?",
    "answer": "Yes, in theory EV can equal Equity Value when all bridge items sum to zero: Net Debt = Debt – Cash = 0 (either both are zero or they offset) No preferred stock No non-controlling (minority) interests Because most companies carry some net debt, preferred stock, or minority interest, exact parity is uncommon in practice.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 61,
    "question": "Why might you subtract “long-term investments” in the Enterprise Value formula?",
    "answer": "If the company owns sizable non-core investments (like minority stakes or securities) that generate returns unrelated to its main operations, some argue those should be subtracted (like cash) to reflect net operating value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 62,
    "question": "Is the Enterprise Value the same as the purchase price in an acquisition?",
    "answer": "It’s generally close to the purchase price, but not always exactly the same. For instance, you might negotiate adjustments for cash and debt levels at closing, so the final “purchase price” may differ slightly from the initially calculated EV.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 63,
    "question": "Would you consider “marketable securities” similarly to cash when calculating Enterprise Value?",
    "answer": "Generally yes, if they are liquid and can be easily converted to cash. They’re often treated as cash equivalents and subtracted from Equity Value in arriving at Enterprise Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 64,
    "question": "How might unfunded pension obligations affect Enterprise Value?",
    "answer": "Unfunded pension obligations represent additional liabilities and are added to Enterprise Value as they signify future cash outflows and financial obligations.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 65,
    "question": "What role does preferred stock play in Enterprise Value calculations?",
    "answer": "Preferred stock has debt-like characteristics, such as fixed dividends and higher claim on assets than common equity. Therefore, it is added to Equity Value when calculating Enterprise Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 66,
    "question": "Why might you add Unfunded Pension Obligations but not Accounts Payable in Enterprise Value?",
    "answer": "Accounts Payable is usually a short-term, operational liability that doesn’t require separate financing. Unfunded Pension Obligations are larger, long-term obligations that often demand external financing. They’re more “debt-like.”",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 67,
    "question": "How might you treat Equity Interests when calculating Enterprise Value?",
    "answer": "If a company’s metrics (like revenue or EBITDA) exclude the affiliate company’s performance, you subtract the Equity Interest from the parent’s EV. The logic: you don’t want to “pay” for a business whose revenue or EBITDA you aren’t actually consolidating.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 68,
    "question": "Should you use the market or book value for Debt in Enterprise Value?",
    "answer": "Ideally, use market value if it's available (especially if the debt trades significantly above or below par). In practice, many models just use the book value from the Balance Sheet for simplicity.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 69,
    "question": "Could the dilution from stock options exceed 10% of the company’s market cap?",
    "answer": "Theoretically yes, especially for tech or startup companies with significant option pools. Such large dilution is uncommon but not impossible.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 70,
    "question": "How do you factor in Convertible Preferred Stock in the Enterprise Value calculation?",
    "answer": "If it’s in-the-money, treat it like additional shares. If it’s out of the money, consider it more like debt (since it pays a fixed dividend and ranks above common equity).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 71,
    "question": "How do RSUs and Performance Shares affect the diluted share count?",
    "answer": "RSUs are effectively common shares that vest, so you add them to the share count once they’re granted. Performance Shares convert if certain targets are met (e.g. share price, EPS), so you include them in the diluted count if they are in-the-money.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 72,
    "question": "How are Options Exercisable vs. Options Outstanding handled for share dilution?",
    "answer": "If not all options are exercisable yet, you might only consider the portion that’s exercisable. However, in an acquisition, typically all outstanding options become exercisable, so you might use the total.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 73,
    "question": "Why might we not apply the Treasury Stock Method to convertible bonds?",
    "answer": "Convertible bonds don’t generate cash proceeds for the company upon conversion, unlike stock options with an exercise price. They’re treated as either 100% debt (if out-of-the-money) or additional shares (if in-the-money).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 74,
    "question": "Does free cash flow (FCF) calculation impact how Equity Interests are handled in Enterprise Value?",
    "answer": "Yes. If your EBITDA or other operational metrics exclude the affiliate’s performance, you subtract the Equity Interest. If you included affiliate earnings in FCF, you wouldn’t subtract the Equity Interest in EV to remain consistent.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 75,
    "question": "How do you treat performance-based stock options in the share count?",
    "answer": "Similar to standard options, but with an extra hurdle. You only count them in the diluted share count if the performance conditions (e.g., hitting an EBITDA or Revenue target) are met or are highly likely to be met. If the performance targets are not met, you ignore them, even if the strike price is otherwise in-the-money.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 76,
    "question": "Can convertible debt ever be subtracted from Equity Value?",
    "answer": "Normally, no. You either treat it as debt (out-of-the-money) or additional shares (in-the-money). There’s no scenario where it directly subtracts from Equity Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 77,
    "question": "What if a company's debt trades at a discount? Does that affect Enterprise Value?",
    "answer": "Technically yes, if you use market values. The “true” debt liability is lower. Practically, most models use book values for Debt, so it usually doesn’t alter the Enterprise Value in standard practice.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 78,
    "question": "How do capital leases factor into Enterprise Value?",
    "answer": "They are generally treated like debt, since they represent a contractual obligation. So you add them to Equity Value to arrive at Enterprise Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 79,
    "question": "How do you treat operating leases for Enterprise Value under new accounting standards?",
    "answer": "Under ASC 842/IFRS 16, many operating leases appear on the Balance Sheet with corresponding liabilities. These lease liabilities are generally considered debt-like, so they get added in the Enterprise Value calculation.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 80,
    "question": "Why do you subtract equity investments (20-50% ownership) when calculating Enterprise Value from Equity Value?",
    "answer": "The parent doesn’t consolidate those financials in its top-line metrics (Revenue/EBITDA). So you remove the value of that ownership stake from Equity Value to keep the resulting Enterprise Value aligned with the portion of revenue/EBITDA being captured (Operating Value).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 81,
    "question": "How might you handle Net Operating Losses (NOLs) in Enterprise Value?",
    "answer": "NOLs can be viewed as an asset that reduces future taxes, so some practitioners subtract them (like cash). Many ignore them because they’re less liquid than cash and may expire. Treatment varies by bank and scenario.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 82,
    "question": "Do options always create more dilution than warrants?",
    "answer": "Not necessarily. It depends on strike prices, volumes, and structures. Either can be more dilutive if they are deeply in-the-money and represent many potential shares.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 83,
    "question": "What if only part of a convertible issue is in-the-money?",
    "answer": "You would split it proportionally. The in-the-money portion converts into equity, and the rest remains as debt.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 84,
    "question": "How are minority interests treated when consolidating financial statements?",
    "answer": "Minority interests represent the portion of subsidiary equity not owned by the parent. In EV calculations, minority interests are added to reflect the full consolidated financial performance.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 290,
    "question": "Would you rather buy a company with a high or low P/E multiple?",
    "answer": "Enterprise & Equity Value Typically, you'd prefer buying at a lower P/E for better value. But it’s relative to growth and risk; sometimes a high P/E might still be worthwhile if growth justifies it.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical"
  },
  {
    "id": 291,
    "question": "A company has a stock price of $20 a share and a P/E of 20x (so EPS is 1). The company has 10M shares outstanding. How does a 2-for-1 stock split affect EV?",
    "answer": "Enterprise & Equity Value Does not affect EV. There are now 20m shares outstanding, and EPS is now 0.5, but EV stays unchanged.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 292,
    "question": "How does ____ affect Enterprise Value?Raise $200m in Debt, use cash to buy a new piece of equipment.",
    "answer": "How does ____ affect Enterprise Value? Raise $200m in Debt, use cash to buy a new piece of equipment. IB Vine Select Enterprise & Equity Value EV up by 200. EV = EqV + Debt - Cash etc. +200 debt (from raise) -200 cash (borrowing in form of debt) +200 cash (equipment purchase is a decrease in cash, which gets subtracted from EV, thereby boosting it)",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 293,
    "question": "How does ____ affect Enterprise Value?Issue $200m in Equity for an IPO.",
    "answer": "How does ____ affect Enterprise Value? Issue $200m in Equity for an IPO. IB Vine Select Enterprise & Equity Value EV stays unchanged. Equity +200, Cash +200, net zero effect on EV formula.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 294,
    "question": "Two companies are 100% comparable. Why might one trade at a premium (e.g. higher EV/EBITDA multiple)?",
    "answer": "Enterprise & Equity Value Differences in margins, growth rates, investor sentiment, management strength, capex, capital structure, or working capital needs can all drive a higher multiple for one over the other.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 295,
    "question": "What are some multiples you could use for a company with a negative Net Income?",
    "answer": "Enterprise & Equity Value EV / Revenue Industry-specific metrics, e.g. EV / Unique Visitors",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 296,
    "question": "Company A and Company B have identical EV/EBITDA. Company A has a higher P/E multiple. Why might this be the case?",
    "answer": "Enterprise & Equity Value The difference often lies in: Capital structure (e.g. varying interest expense) Tax rates Different non-cash charges affecting net income but not EBITDA",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 297,
    "question": "You have a company with an EV/Revenue of 2x and an EV/EBITDA of 10x. What is the EBITDA margin?",
    "answer": "Enterprise & Equity Value 20% Because an EV/Revenue of 2x and EV/EBITDA of 10x implies EBITDA is 1/5th of revenue (i.e. 20% margin).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 298,
    "question": "A company has 10,000 shares at $20 a share. There are 100 call options at an exercise price of $10, 50 restricted stock units (RSUs), and 100 convertible bonds at a price of $10 and par value of $100. What is the diluted equity value?",
    "answer": "Enterprise & Equity Value Basic shares: 10,000 x $20 = $200,000 nominal market cap perspective. Options: 100 options @ $10 = $1,000 in proceeds. At $20 share price, you buy back 50 shares, net 50 new shares. RSUs add 50 shares, total +100 so far. Convertibles: $100 par / $10 convert price = 10 shares per bond x 100 bonds = 1,000 shares. Total new shares = 1,100, so diluted shares = 11,100. 11,100 x $20 = $222,000 diluted equity value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 299,
    "question": "How does paying down $100M debt affect a company's enterprise value?",
    "answer": "Enterprise & Equity Value Debt -100, Cash -100, net zero on the EV formula. EV remains unchanged.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 300,
    "question": "If two companies have the same growth prospects, market capitalizations and industries, why might you value one using EV/Sales and the other using EV/EBITDA?",
    "answer": "Enterprise & Equity Value Possibly one has negative or unreliable EBITDA, so EV/EBITDA isn’t meaningful. Or large non-cash/one-time items might distort EBITDA, pushing you toward a top-line multiple like EV/Sales.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 301,
    "question": "What characteristics of a company would generate a higher valuation multiple?",
    "answer": "Enterprise & Equity Value Common reasons include: Higher revenue/EBITDA growth than peers Market leadership or strong moat Valuable patents/IP Favorable geography/resources Exceptional management team",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 302,
    "question": "What are limitations of using the Exit Multiple Method when conducting valuation?",
    "answer": "Enterprise & Equity Value It assumes you can sell the company at a chosen multiple in the future, which may be unpredictable (especially in cyclical industries). Often you mitigate by providing a range of exit multiples and compare with a Gordon Growth approach for cross-checking.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 303,
    "question": "You serve on a company's board and own a significant stake. The CEO claims the stock is up 20% this year. Does that mean it's performing well?",
    "answer": "Enterprise & Equity Value You need context: if the market or sector is up 50%, then a 20% gain is an underperformance. It’s about relative returns, not just absolute percentage change.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 304,
    "question": "What items are sometimes considered “debt-like” and added back when calculating enterprise value?",
    "answer": "Enterprise & Equity Value Capital leases Unfunded pension obligations Legal or environmental liabilities Some forms of preferred stock or near-debt instruments",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 305,
    "question": "What items might be considered “cash-like” and therefore subtracted from enterprise value?",
    "answer": "Enterprise & Equity Value Short-term investments or marketable securities Excess cash beyond operating needs Some equity investments or JV stakes, if easily liquidated Potentially net operating loss carryforwards under certain assumptions",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical"
  },
  {
    "id": 554,
    "question": "How do we find the diluted share count?",
    "answer": "Reported in Allen & Company Interview SA 2026 Enterprise & Equity Value Pull basic shares from the latest filing, then adjust: Add net in‑the‑money options/warrants via the Treasury Stock Method. Add all RSUs. Add shares from in‑the‑money convertibles using the if‑converted method. The sum equals diluted shares.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 555,
    "question": "When would you focus on valuing a company's equity rather than their enterprise value, and why?",
    "answer": "Reported in Bank of America Interview Enterprise & Equity Value You focus on equity value when you care about the portion of value attributable specifically to shareholders, such as evaluating stock price performance or assessing per-share metrics. Enterprise value is more relevant when you’re comparing operating performance across companies that have different capital structures. In situations like acquisitions that affect the entire capital structure, enterprise value is often the starting point. But if your primary consideration is the shareholder impact or any equity-based return, you focus on equity value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 556,
    "question": "How do you find a company's market cap using only its 10-K?",
    "answer": "Reported in Centerview Partners Interview SA 2026, New York office, Superday Enterprise & Equity Value The cover page discloses “aggregate market value of common stock held by non‑affiliates” as of the last business day of the second fiscal quarter—effectively the market cap on that date.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Centerview Partners"
    ]
  },
  {
    "id": 557,
    "question": "What will happen to equity value as net debt increases?",
    "answer": "Reported in Citi Interview Enterprise & Equity Value If net debt rises, the enterprise value could stay the same (theoretically), so equity value could decrease to keep EV constant (assuming no other changes). Another way to see it: higher net debt often signals more financial risk, possibly reducing the market's valuation of equity.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 558,
    "question": "If a company has $6 per share with 50 shares outstanding, $100 in cash, and an Enterprise Value (EV) of $500, what is the company's debt?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value First, calculate the Equity Value: $6/share * 50 shares = $300. Using the EV formula: EV = Equity Value + Debt - Cash $500 = $300 + Debt - $100 ⇒ Debt = $300",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 559,
    "question": "How does paying down $300 of debt affect the Enterprise Value?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value No change. Remember: EV = Equity Value + Debt - Cash According to the enterprise value formula, the changes in debt and cash offset each other. Since paying down debt is a capital structure change, it’s important to recognize that this action does not impact the company's enterprise value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 560,
    "question": "A company trades at 7x EV/EBITDA with $100M in EBITDA, $100M in cash, $300M in debt, and 100M shares outstanding.What is the implied share price?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Answer: $5 Calculation: Enterprise Value (EV) = Multiple x EBITDA = 7 x $100M = $700M Equity Value = EV + Cash – Debt = $700M + $100M - $300M = $500M Implied Share Price = Equity Value / Shares Outstanding = $500M / 100M = $5",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 561,
    "question": "You have an EPS of $2, 100 shares outstanding, a P/E of 4x, $200 in debt, $75 in NCI, $50 in cash and $100 in inventory.What is the Enterprise Value (EV)?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Answer: $1,025 Calculation: Net Income (NI) = EPS * Shares Outstanding = $2 * 100 = $200 Equity Value = P/E * NI = 4 * $200 = $800 EV = Equity Value + Debt + NCI – Cash = $800 + $200 + $75 - $50 = $1,025",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 562,
    "question": "A company issues $500m in new shares.How do equity value, enterprise value, EV/EBITDA, and P/E change?",
    "answer": "A company issues $500m in new shares. How do equity value, enterprise value, EV/EBITDA, and P/E change? Reported in Evercore Interview Enterprise & Equity Value Impacts: Equity Value: Increases by $500m (cash raised). Enterprise Value: Unchanged (Equity +$500m, Cash +$500m offset). EV/EBITDA: Unchanged (EV and EBITDA unchanged). P/E: Increases (Equity Value increases, Net Income initially unchanged).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 563,
    "question": "Why add Noncontrolling Interest (NCI) to Enterprise Value?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value When a company owns more than 50% of another company, it must consolidate the entire financial performance of that subsidiary into its own financial statements (even if it doesn't own 100%). This means the parent company reports the subsidiary’s full (100%) financial results. When consolidating a subsidiary not fully owned, metrics like EBITDA reflect 100% of the sub. Therefore, to make EV comparable to metrics like EBITDA, you need to include Noncontrolling Interest when calculating Enterprise Value to ensure that both your numerator and denominator fully reflect 100% ownership of the subsidiary.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 564,
    "question": "A company trades at 11x EV/EBITDA with $100M EBITDA, $100M cash, $300M debt, 100M shares.What is the implied share price?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Answer: $9 Calculation: EV = 11 * $100M = $1,100M Equity Value = $1,100M + $100M - $300M = $900M Share Price = $900M / 100M Shares Outstanding = $9",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 565,
    "question": "A firm shows share price of $6, cash of $100 million, total enterprise value of $500 million, and 100 million shares outstanding.What is its current debt balance?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Answer: $0 EqV = Share Price * Shares Outstanding = $6 * 100m = $600m TEV = EqV + Debt - Cash $500 = $600 + Debt - $100 Debt = $500 - $600 + $100 = $0",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 566,
    "question": "A company has share price $6, 50 million shares, and $100 million cash.What is enterprise value (assuming no debt)?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Answer: $200m EqV = 6 x 50m = $300m. Basic EV formula = EqV + Debt - Cash EV = 300 + 0 - 100. EV = $200m.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 567,
    "question": "The company issues $300 million of new equity that is not invested in the business.What happens to enterprise value?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value EV is unchanged. Equity +300, Cash +300, net zero on EV formula.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 568,
    "question": "A $100 fine is announced.What is the impact on enterprise value?",
    "answer": "A $100 fine is announced. What is the impact on enterprise value? Reported in Evercore Interview Enterprise & Equity Value No impact on TEV. Either reduces cash (if immediately paid) or is recognized as a liability (fine payable), offsetting the decrease in equity value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 569,
    "question": "You are given a company's share price, number of shares outstanding, cash balance, and a relevant peer-derived EV/EBITDA multiple.How would you calculate the implied value of the company's debt?",
    "answer": "Reported in Evercore Interview First round Enterprise & Equity Value Steps: Calculate Equity Value: Share Price × Shares Outstanding. Estimate EBITDA from comparable analysis or financial statements. Calculate Enterprise Value: EBITDA × Peer EV/EBITDA Multiple. Solve for Debt: EV = Equity Value + Debt - Cash → Debt = EV - Equity Value + Cash.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 570,
    "question": "In a public comparables analysis, why is the EV/Earnings multiple conceptually flawed and therefore not used?",
    "answer": "Reported in Evercore Interview Superday Enterprise & Equity Value EV/Earnings is conceptually flawed due to a mismatch between numerator and denominator: Enterprise Value represents value to all stakeholders (debt and equity holders). Earnings (Net Income) is after interest expense, representing value only to equity holders. This creates inconsistency: EV should be paired with pre-interest metrics (EBITDA, EBIT, Unlevered FCF), while Earnings should be paired with equity value (P/E ratio). Using EV/Earnings would make companies with different capital structures incomparable, defeating the purpose of using capital structure-neutral metrics.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 571,
    "question": "When bridging from Enterprise Value to Equity Value, why are Non-Controlling Interest (NCI) and Preferred Stock subtracted?",
    "answer": "Reported in Evercore Interview Superday Enterprise & Equity Value Both NCI and Preferred Stock are subtracted because: Non-Controlling Interest (NCI): When a company consolidates a majority-owned subsidiary, it includes 100% of the subsidiary's value in Enterprise Value. However, the parent doesn't own 100% of the equity - minority shareholders own a portion. NCI represents the claim that minority shareholders have on the consolidated entity. Must subtract NCI to arrive at equity value attributable only to common shareholders of the parent. Preferred Stock: Preferred shareholders have a claim senior to common equity but junior to debt. Enterprise Value includes all claims, but equity value refers specifically to common equity. Must subtract preferred stock value to isolate value for common shareholders.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 572,
    "question": "Walk me from Enterprise Value to a per-share stock price.",
    "answer": "Reported in Goldman Sachs Interview Enterprise & Equity Value Steps: Start with Enterprise Value. Subtract Net Debt (Debt - Cash). Subtract Noncontrolling Interest and Preferred Stock. This gives you Equity Value. Divide Equity Value by Diluted Shares Outstanding. Result is the per-share stock price.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Goldman Sachs"
    ]
  },
  {
    "id": 573,
    "question": "A company has an Enterprise Value (EV) of $200 and a face value of debt of $300. What is the equity value? Why?",
    "answer": "Reported in Greenhill & Co. Interview Enterprise & Equity Value Equity Value can be calculated using the formula: EV = Equity Value + Debt - Cash. However, since no cash is mentioned, we can rearrange the formula to find Equity Value: Equity Value = EV - Debt Equity Value = $200 - $300 = -$100 The negative result means creditors’ claims exceed EV. Common equity is effectively out-of-the-money and would be worth ≈ $0 in practice, indicating distress. In practice, a company's market cap can’t be negative (shares would trade at (or near) zero), but an implied negative number like this is common in distress modeling exercises.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 574,
    "question": "A company with an Enterprise Value of $5 billion has no debt and no cash.If it issues $2 billion in new debt and holds the proceeds as cash, what is its new Enterprise Value and Equity Value?",
    "answer": "Reported in Greenhill & Co. Interview M&A group, First round Enterprise & Equity Value Answer: EV = $5B, Equity Value = $5B EV = Equity Value + Debt - Cash. Initially: $5B = Equity Value + $0 - $0, so Equity Value = $5B. After issuance: EV = Equity Value + $2B - $2B = Equity Value. Enterprise Value remains $5B (debt and cash offset). Equity Value remains $5B (no change to underlying business value).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 575,
    "question": "How would raising capital through a primary share issuance affect earnings per share (EPS)? Assume proceeds are held in cash.",
    "answer": "Reported in Guggenheim Partners Interview Enterprise & Equity Value EPS declines because the share count rises while net income remains relatively flat. The higher denominator dilutes EPS. Interest income on the new cash slightly lifts net income but rarely offsets the dilution.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 576,
    "question": "You are evaluating two potential acquisition targets with identical financial performance and the same equity value.Company A has $100 in cash and no debt.Company B has no cash and $100 in debt.Which company would you prefer to acquire and why?",
    "answer": "Reported in Guggenheim Partners Interview New York office Enterprise & Equity Value Company A is preferable. Since both have the same Equity Value (Price), Company A has a significantly lower Enterprise Value (effectively $200 less than B). Assuming Equity Value = X: EV(A) = X - 100 Cash. EV(B) = X + 100 Debt. You are paying the same upfront price for both (Equity Value), but with Company A you get $100 cash, whereas with B you assume $100 debt. A is much cheaper.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 577,
    "question": "Walk me from Enterprise Value to Equity Value for the following two companies:Company A: EV of $1.5B, Debt of $500M, Cash of $200MCompany B: EV of $1.0B, Debt of $100M, Cash of $500M",
    "answer": "Reported in Guggenheim Partners Interview M&A group, First round Enterprise & Equity Value Equity Value = EV - Debt + Cash Company A: Equity Value = $1.5B - $500M + $200M = $1.2B Company B: Equity Value = $1.0B - $100M + $500M = $1.4B",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 578,
    "question": "After an acquisition, how are the pro-forma Enterprise Value and Equity Value of the combined company calculated?",
    "answer": "Reported in J.P. Morgan Interview SA 2025 Enterprise & Equity Value Pro-Forma Equity Value Acquirer Equity Value + Value of Consideration Paid (cash, stock, or both). If all-stock: Acquirer EqV + (shares issued × acquirer share price). If cash/debt: Typically just acquirer's standalone equity value (no dilution). Pro-Forma Enterprise Value Sum of standalone Enterprise Values: Acquirer TEV + Target TEV. Alternatively: PF Equity Value + PF Net Debt + PF Preferred Stock + PF NCI. PF Net Debt = (Acquirer Debt + Target Debt + New Debt Issued) - (Acquirer Cash + Target Cash - Cash Used). Key: Account for new debt issued for financing and cash used to fund the deal when calculating pro-forma metrics.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 579,
    "question": "100 shares outstanding at $5 a share, $600 debt, $300 cash. Calculate EV.",
    "answer": "Reported in Jefferies Interview SA 2026 Enterprise & Equity Value Answer: $800 Enterprise Value = Equity Value (100 × $5 = $500) + Debt ($600) − Cash ($300).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 580,
    "question": "What metric is used in the numerator of the EBITDA multiple, and what is the underlying principle for pairing them?",
    "answer": "Reported in Lazard Interview Enterprise & Equity Value Enterprise Value. Principle: pair a capital‐structure‑neutral numerator (EV) with a capital‐structure‑neutral denominator (EBITDA) so both reflect value available to all stakeholders before interest.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 581,
    "question": "What are the primary benefits and drawbacks of using the EV/EBITDA multiple compared to the P/E multiple for valuation?",
    "answer": "Reported in Lazard Interview Enterprise & Equity Value EV/EBITDA Neutral to capital structure and taxes. Useful across sectors and leverage levels. Ignores capex - can overvalue capital-intensive firms. P/E Directly reflects equity return after all expenses. Simple and widely quoted. Distorted by leverage, tax strategies, and non‑cash items.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 582,
    "question": "A company has an EBITDA of $200 million and is valued at a 10.0x EV/EBITDA multiple. It has $500 million in debt, $100 million in cash, and 50 million shares outstanding. What is the company's implied share price?",
    "answer": "Reported in Lazard Interview Enterprise & Equity Value Answer: $32 Enterprise Value = $200 × 10 = $2,000. Equity Value = $2,000 − $500 + $100 = $1,600. Share Price = $1,600 / 50 = $32.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 583,
    "question": "Part 1: If you had to explain Enterprise Value to a 10-year-old, how would you do it?Part 2: What's the formula?Part 3: Bridge to equity value.Part 4: What are some other non-equity claims subtracted out to get to equity?Part 5: Why do we add minority interest?",
    "answer": "Reported in LionTree Interview SA 2026 Enterprise & Equity Value Part 1: Imagine buying a lemonade stand: you pay for the stand plus any IOUs the owner owes (debt), but you keep the cash in the jar. Part 2: Formula: EV = Equity + Debt + Preferred Stock + Minority Interest − Cash. Part 3: Bridge: Equity = EV − Debt − Preferred Stock − Minority Interest + Cash. Part 4: Other claims: Pension obligations Operating lease liabilities (capitalized) Deferred tax liabilities Part 5: Minority Interest is added because consolidated financials include 100% of a subsidiary’s results; adding the minority piece keeps valuation consistent.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 584,
    "question": "What is enterprise value, conceptually?",
    "answer": "Reported in LionTree Interview SA 2026 Enterprise & Equity Value The value of a firm’s core operations attributable to all capital providers.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 585,
    "question": "If equity value doubles with debt and cash unchanged, what happens to enterprise value?",
    "answer": "Reported in M. Klein & Co. Interview SA 2026 Enterprise & Equity Value EV rises by the same absolute amount as the equity increase. Formula EV = Equity + Debt – Cash; only equity changed.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "M. Klein & Co."
    ]
  },
  {
    "id": 586,
    "question": "Please provide the standard formula for Enterprise Value. Then, discuss what other items you might add to create a more comprehensive or fully-loaded Enterprise Value calculation.",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value Simple EV Formula EV = Equity Value + Debt + Minority Interest + Preferred Stock - Cash More comprehensive EV Formula EV = Equity Value + Debt + Minority Interest + Preferred Stock - Cash - Net Operating Losses - Investments + Capital Leases + Pension Obligations The more comprehensive version simply adjusts for other non-operating assets and off-balance-sheet obligations that behave just like debt or cash In short, you add anything you’re assuming that acts like debt or a claim on the business, and subtract everything you’re acquiring that acts like cash or a receivable",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 587,
    "question": "Consider the following list of valuation multiples. Which of them are conceptually valid?EV/SalesPrice/SalesEV/EBITDAP/E",
    "answer": "EV/Sales Price/Sales EV/EBITDA P/E Reported in Moelis & Co. Interview Enterprise & Equity Value EV/Sales, EV/EBITDA, and P/E are valid; Price/Sales is conceptually flawed. Enterprise numerator (EV) should pair with pre‑interest denominators (Sales, EBITDA). Equity numerator (Price) must pair with post‑interest Net Income. Price/Sales mixes equity value with a metric available to all capital providers.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 588,
    "question": "From the following list, which valuation multiples are conceptually flawed because they mismatch capital structure claims? Explain why.EV/EBITDAPrice/EBITDAEV/Net IncomeP/E",
    "answer": "Explain why. EV/EBITDA Price/EBITDA EV/Net Income P/E Reported in Moelis & Co. Interview Enterprise & Equity Value Price/EBITDA and EV/Net Income are flawed. Price/EBITDA pairs equity value with a pre‑interest metric. EV/Net Income pairs enterprise value with a post‑interest metric. EV/EBITDA and P/E are correctly matched.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 589,
    "question": "What are five reasons you might prefer using an EV/EBITDA multiple over a P/E multiple for valuation?",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value EV∕EBITDA is capital‑structure neutral and more reflective of core operating performance. Advantages: Ignores financing choices (debt vs equity) and share‑count differences. Excludes non‑cash depreciation and amortisation distortions. Not affected by jurisdiction‑specific tax rates or NOL utilisation. Can value pre‑tax loss‑making companies if EBITDA is positive. More comparable across industries with different accounting standards.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 590,
    "question": "A company has $50 million of EBITDA and is valued at a 4.0x multiple. It has $100 million of senior debt and $200 million of junior debt.What is the value of the company's equity?",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value Answer: -$100 million (negative equity / underwater) Calculation: EV = $50M EBITDA * 4.0x = $200M. Total Debt = $100M + $200M = $300M. Equity Value = EV - Debt = $200M - $300M = -$100M. The company is over-leveraged. Equity holders would receive nothing; even junior debt holders may face losses in liquidation.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 591,
    "question": "When using valuation multiples, why does an EBITDA multiple yield Enterprise Value while an Earnings multiple yields Equity Value?",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value The difference lies in what each metric represents in the capital structure. EBITDA: Earnings before interest, taxes, depreciation, and amortization. It's an operating metric available to all investors (debt and equity), so it corresponds to Enterprise Value. Earnings (Net Income): Bottom-line profit after interest and taxes, belonging only to equity holders. Therefore, it corresponds to Equity Value. Multiples must match: enterprise-level metrics (EBITDA) pair with EV, while equity-level metrics (Earnings) pair with Equity Value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 592,
    "question": "A company has an enterprise value of $100 but a market cap of $50.Does that mean the firm is undervalued?",
    "answer": "Reported in Morgan Stanley Interview Enterprise & Equity Value Not necessarily. Market cap (equity value) is one of multiple components that make up total enterprise value. Whether the firm is undervalued depends on fundamental/intrinsic analysis, not just TEV vs. EqV.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 593,
    "question": "Would a company generally prefer to finance with debt or equity, and why?",
    "answer": "Reported in Morgan Stanley Interview Enterprise & Equity Value There's no one right answer; it depends. Debt can be preferred due to lower cost (tax deductibility) and no ownership dilution. But too much debt is risky. Equity financing can be preferable if the company is early-stage or experiencing unstable cash flows, making regular debt payments risky. Equity doesn't require repayment, provides financial flexibility, and can strengthen the balance sheet, despite diluting existing ownership.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 594,
    "question": "How does paying cash dividends impact enterprise value?",
    "answer": "Reported in Morgan Stanley Interview Enterprise & Equity Value A cash dividend reduces Cash and Equity Value by the same amount, so EV is unchanged.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 595,
    "question": "Given the following information, what is the company's share price?EBITDA: $100 millionEV/EBITDA Multiple: 7.0xNet Debt: $400 millionShares Outstanding: 50 million",
    "answer": "Reported in Morgan Stanley Interview New York Office, First round Enterprise & Equity Value Answer: $6 per share Calculation: Enterprise Value = $100m × 7.0x = $700m. Equity Value = $700m - $400m Net Debt = $300m. Share Price = $300m / 50m shares = $6.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 596,
    "question": "How do share buybacks affect a company's Earnings Per Share (EPS)?",
    "answer": "Reported in Morgan Stanley Interview Generalist Second round Enterprise & Equity Value Share buybacks typically increase EPS. Mechanics: Company repurchases shares, reducing shares outstanding. If Net Income remains constant, EPS = NI / Shares Outstanding increases. However, if buyback is debt-financed, increased interest expense reduces NI, partially offsetting EPS benefit. If cash-financed, company loses interest income on that cash, slightly reducing NI. Net effect is usually accretive to EPS, especially if company buys back shares at prices below intrinsic value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Morgan Stanley"
    ]
  },
  {
    "id": 597,
    "question": "A company's share price is $51. It has 30 shares authorized and 20 shares outstanding.What is its equity value?",
    "answer": "Reported in Perella Weinberg Interview Superday Enterprise & Equity Value $1,020 (51 × 20). Authorized shares are irrelevant to market cap.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 598,
    "question": "A company has $200 in equity value, $300 in debt, $50 in cash, preferred stock of 25, and goodwill of 100.What is enterprise value?",
    "answer": "Reported in Perella Weinberg Interview Superday Enterprise & Equity Value $475. EV = 200 + 300 + 25 – 50 = 475. Goodwill is already embedded in equity value and need not be adjusted.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 599,
    "question": "Beyond the standard components of debt, cash, preferred stock, and minority interest, what are some less-common items you might consider when calculating a company's Enterprise Value?",
    "answer": "Reported in Perella Weinberg Interview SF Office Enterprise & Equity Value Less-common EV adjustments: Operating Leases: Under new accounting standards (ASC 842), these may need adjustment. Pension Obligations: Unfunded pension liabilities can be added to EV. Contingent Liabilities: Pending litigation or environmental liabilities. Equity Investments in Affiliates: Non-controlling stakes in other companies. Earnout Obligations: Future payments contingent on performance. Non-Core Assets: Excess real estate or investments held for sale may be subtracted like cash. Deferred Tax Assets/Liabilities: In certain contexts, material DTLs may be added.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 600,
    "question": "A company has $55M in EBITDA and trades at a 10x EV/EBITDA multiple.Assuming the company has $150M in debt, $50M in cash, and 20M shares outstanding, what is its share price?",
    "answer": "Reported in PJT Partners Interview First round Enterprise & Equity Value Answer: $22.50 Calculation: EV = 10x * $55M = $550M Equity Value = EV - Debt + Cash = $550M - $150M + $50M = $450M Share Price = $450M / 20M shares = $22.50",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 601,
    "question": "Explain why valuation multiples such as EV/Net Income and Equity Value/EBITDA are conceptually flawed.",
    "answer": "Reported in PJT Partners Interview Second round Enterprise & Equity Value These multiples mismatch numerator and denominator. EV/Net Income: EV represents value to all capital providers (debt + equity). Net Income is value to equity holders only (after interest and taxes). Mismatch makes comparison across companies invalid. Equity Value/EBITDA: Equity Value represents value to equity holders only. EBITDA is operating profit available to all capital providers (debt + equity). Different capital structures distort the multiple, making comparisons meaningless. Correct pairings: EV with operating metrics (EBITDA, EBIT, Revenue), Equity Value with equity metrics (Net Income, EPS).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 602,
    "question": "Conceptually, what is enterprise value?",
    "answer": "Reported in Raine Group Interview Enterprise & Equity Value Total value of a company’s core operations available to all investors (debt and equity).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Raine Group"
    ]
  },
  {
    "id": 603,
    "question": "Why would a company prefer to take out debt instead of equity?",
    "answer": "Reported in RBC Interview Enterprise & Equity Value Debt financing can be cheaper than equity (tax-deductible interest), and it avoids diluting existing shareholders. Also, if the company generates stable cash flows, servicing debt is feasible, and it potentially boosts ROE through leverage.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "RBC"
    ]
  },
  {
    "id": 604,
    "question": "A company's stock trades at $15 per share, and it has 100 shares outstanding. The company also has $600 in debt, $100 in cash, and generated $200 in EBITDA.What is the company's EV/EBITDA multiple?",
    "answer": "Reported in Unspecified Interview Enterprise & Equity Value Answer: 10.0x Calculation: Equity Value = $15 * 100 = $1,500 EV = $1,500 + $600 - $100 = $2,000 EV/EBITDA = $2,000 / $200 = 10.0x",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 605,
    "question": "What is the difference between total cash and excess cash?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value Total Cash is all cash and cash equivalents on the balance sheet. Excess Cash is cash beyond what the company needs for day-to-day operations (working capital requirements). In Enterprise Value calculations, only excess cash is subtracted, as operating cash is necessary for the business. Determining excess cash requires judgment about minimum cash needs.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 606,
    "question": "If a company finds $1,000 in cash, what is the impact on its Enterprise Value and Equity Value?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value Equity Value increases by $1,000 (cash is an asset belonging to equity holders). Enterprise Value remains unchanged (EV = Equity Value + Debt - Cash; cash increase offsets equity value increase).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 607,
    "question": "Why is a multiple such as Equity Value / Sales conceptually flawed?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value Equity Value / Sales is flawed because it compares an equity metric (Equity Value) to an enterprise metric (Sales). Sales benefits all stakeholders (debt and equity holders), not just equity. Companies with different capital structures would be incomparable. A highly leveraged company would appear cheaper despite higher financial risk. The correct multiple is EV/Sales, which compares enterprise-level value to enterprise-level revenue.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 608,
    "question": "A firm with $500 million EV issues $100 million of new debt to invest in a project with $100 million NPV.What is the new enterprise value?",
    "answer": "Reported in William Blair Interview Enterprise & Equity Value EV goes up by $100m. $100m of debt has no impact on TEV (increase in debt is offset by increase in cash) Positive NPV project adds $100m to operational value",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "William Blair"
    ]
  },
  {
    "id": 609,
    "question": "In a tax-free world, a firm with $500 million EV issues $100 million of new debt.What is the new EV?",
    "answer": "What is the new EV? Reported in William Blair Interview Enterprise & Equity Value Enterprise value remains $500 million, assuming the cash is retained on the balance sheet and not spent. TEV = Equity Value + Debt - Cash. Adding debt and adding the same amount of cash cancels out.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Basic",
    "type": "technical",
    "firms": [
      "William Blair"
    ]
  },
  {
    "id": 610,
    "question": "Company has 100 common shares at $10 each, with 10 options at a $20 strike price. What is the fully diluted equity value?",
    "answer": "Reported in Allen & Company Interview SA 2026 Enterprise & Equity Value $1,000 The options are out‑of‑the‑money (strike $20 > share price $10), so no dilution. Diluted shares = 100; equity value = 100 × $10.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Allen & Company"
    ]
  },
  {
    "id": 611,
    "question": "What is unusual about a company with an EV/EBITDA multiple of 15x and an EV/EBIT multiple of 12x?",
    "answer": "Reported in Bank of America Interview SF office Enterprise & Equity Value This implies negative Depreciation & Amortization, which is impossible under normal accounting. Analysis: If EV/EBITDA = 15x, then EBITDA = EV / 15. If EV/EBIT = 12x, then EBIT = EV / 12. Since EBITDA = EBIT + D&A, we have: EV / 15 = EV / 12 + D&A. Solving: D&A = EV / 15 - EV / 12 = -EV / 60. This implies negative D&A, which is not possible. The situation is unusual because EV/EBIT should always exceed EV/EBITDA since EBIT is smaller than EBITDA. The data likely contains an error or special accounting treatment.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Bank of America"
    ]
  },
  {
    "id": 612,
    "question": "Debt/EBITDA = 8x, Debt/Equity = 1x. What is EV/EBITDA?",
    "answer": "Reported in CIBC Capital Markets Interview SA 2026, Toronto office, First round Enterprise & Equity Value Answer: 16x. Debt (E) = Equity (E) EV = D + E → EV = 2D Debt/EBITDA = 8x → D = 8 x EBITDA EV / EBITDA = (2D) / EBITDA = 2D / EBITDA = 2 * 8 = 16x",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "CIBC Capital Markets"
    ]
  },
  {
    "id": 613,
    "question": "You are given the following information for a company:EPS = $1.00P/E Multiple = 15xShares Outstanding = 100Total Debt = $500Cash = $0Part 1: Calculate the Equity Value and Enterprise Value.Part 2: Now, assume the following:Tax Rate = 20%Interest Rate on Debt = 10%D&A = $25Calculate the EV/EBITDA multiple.",
    "answer": "Reported in Citi Interview New York Office Enterprise & Equity Value Part 1: Equity Value and Enterprise Value Equity Value = $1,500 Enterprise Value = $2,000 Share Price = EPS × P/E = $1.00 × 15 = $15 Equity Value = Share Price × Shares = $15 × 100 = $1,500 EV = Equity Value + Debt - Cash = $1,500 + $500 - $0 = $2,000 Part 2: EV/EBITDA Multiple Answer: 10.0x Net Income = EPS × Shares = $1.00 × 100 = $100 Pre-Tax Income = NI / (1 - Tax Rate) = $100 / 0.80 = $125 Interest Expense = Debt × Interest Rate = $500 × 10% = $50 EBIT = Pre-Tax Income + Interest Expense = $125 + $50 = $175 EBITDA = EBIT + D&A = $175 + $25 = $200 EV/EBITDA = $2,000 / $200 = 10.0x",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 614,
    "question": "Company A has an EV/EBITDA multiple of 10x, and Company B has a multiple of 12x. Which company is more leveraged?",
    "answer": "Reported in Citi Interview Enterprise & Equity Value Cannot determine leverage from EV/EBITDA multiples alone. EV/EBITDA is a capital structure-neutral metric. A higher multiple typically indicates higher growth expectations, better margins, lower risk, or superior market position - not leverage levels. To assess leverage, you need to examine Debt/EBITDA, Debt/Equity, Interest Coverage, or review the balance sheet directly.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 615,
    "question": "Calculate the Fully Diluted Equity Value for a company with the following details:Basic Shares Outstanding: 1 billionCurrent Share Price: $50Restricted Stock Units (RSUs): 50 millionOptions: 40 million outstanding at a $25 strike price",
    "answer": "Reported in Credit Suisse Interview SF office Enterprise & Equity Value Answer: $53.5 billion Calculation: RSUs convert 1:1 into shares, adding 50 million shares. Options are in-the-money ($25 strike < $50 price). Using TSM: 40m - (40m * $25 / $50) = 40m - 20m = 20m net new shares. Total Diluted Shares = 1,000m + 50m + 20m = 1,070m. Fully Diluted Equity Value = 1,070m * $50 = $53.5 billion.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Credit Suisse"
    ]
  },
  {
    "id": 616,
    "question": "A company has $100M EBITDA, is comparable at 5x EV/EBITDA, has $200M in Debt, and issues $100M in Equity. What is the impact on EV and Equity Value? How does ownership change?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Enterprise Value is unchanged at $500M, Equity Value increases to $400M, and existing shareholders are diluted to 75% ownership (25% dilution). Pre-Raise Analysis: EBITDA = $100M and EV/EBITDA = 5x ⟹ Enterprise Value (EV) = $500M Total Debt = $200M ⟹ Equity Value = $300M (since EV = Equity + Net Debt) After Raising $100M in Equity: Equity Value increases from $300M to $400M Net Debt becomes $200M (existing debt) - $100M (new cash) = $100M EV remains $500M (Equity + Net Debt = $400M + $100M) New investors own $100M / $400M = 25% dilution",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 617,
    "question": "Company EV/EBITDA goes from 10x to 20x, and EV/Revenue goes from 2x to 4x. What happened to EBITDA margin and revenue?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value The EBITDA margin remained perfectly unchanged (at 20%). You calculate this via: EV/Revenue divided by EV/EBITDA (4x / 20x = 20% margin, which is the same as the initial 2x / 10x = 20%). While the absolute level of revenue cannot be determined from the ratios alone, a common interview interpretation is that valuation expanded (multiple expansion) while underlying operations and margins stayed roughly flat.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 618,
    "question": "Net Income: $100, EBITDA: $350, P/E: 8x, EV/EBITDA: 4x. What is net debt?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value First, calculate Equity Value using P/E: Equity Value = P/E * Net Income = 8 * $100 = $800 Next, calculate Enterprise Value using EV/EBITDA: EV = EV/EBITDA * EBITDA = 4 * $350 = $1,400 Finally, Net Debt = EV - Equity Value = $1,400 - $800 = $600",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 619,
    "question": "A company has the following information. Calculate the share price:P/E = 25xEV/EBITDA = 12xTax Rate = 25%Revenue = $2,000MShares Outstanding = 150MGross Margin = 50%$1,000M debt at 10% interestSG&A (including D&A) = $500MAssume no other liabilities or equity line items besides debt and common shareholders' equity.",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value The answer is $50 per share. First, build an Income Statement: Revenue: $2,000M Gross Profit: $1,000M (given Gross Margin of 50%) SG&A: $(500M) EBIT: $500M Interest: $(100M) Pre-Tax Income: $400M Taxes: $(100M) Net Income: $300M Then, calculate the valuation: P/E Ratio = Equity Value / Net Income = 25x Equity Value = 25 * $300M = $7.5B Share Price = Equity Value / Shares Outstanding = $7.5B / 150M shares = $50 / share",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 620,
    "question": "In FY1, EV/EBITDA = 5x and EV/Revenue = 2x. In FY2, EV/EBITDA = 6x and EV/Revenue = 1x. Assume EV remains constant. How do EBITDA margins change between FY1 and FY2?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value EBITDA margins decrease from 40% in FY1 to approximately 16.7% in FY2. Here’s the calculation: FY1: EBITDA = EV / 5 EBITDA = EV / 5 Revenue = EV / 2 EBITDA Margin = (EV / 5) / (EV / 2) = 2/5 = 40% FY2: EBITDA = EV / 6 Revenue = EV EBITDA Margin = (EV / 6) / EV = 1/6 ≈ 16.7%",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 621,
    "question": "In FY1, EV/EBITDA = 5x and EV/Revenue = 2x.In FY2, EV/EBITDA = 6x and EV/Revenue = 1x.Assume EV remains constant. How much does revenue change between FY1 and FY2?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Revenue doubles from FY1 to FY2, increasing by 100%. Here’s the calculation: FY1: EV/Revenue = 2x → Revenue = EV / 2 FY2: EV/Revenue = 1x → Revenue = EV Change in Revenue: Revenue in FY2 = 2 x Revenue in FY1",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 622,
    "question": "Share price=$50, Basic shares=200.Securities: 50 options (strike $20), 30 RSUs, $6k converts ($1k par, $40 conversion price).What is the fully diluted equity value?",
    "answer": "Share price=$50, Basic shares=200. Securities: 50 options (strike $20), 30 RSUs, $6k converts ($1k par, $40 conversion price). What is the fully diluted equity value? Reported in Evercore Interview Enterprise & Equity Value Answer: $20,500 Calculation: The options are in-the-money since the exercise price ($20) is below the current price ($50). Exercising 50 options at $20 each generates $1,000 for the company, which it uses to buy back shares at the current price of $50 per share ($1,000 / $50 = 20 shares repurchased). Thus, there is a net issuance of 30 new shares. RSUs lead to the creation of 30 additional shares. Each convertible bond ($1,000 par value) converts at $40 per share, resulting in 25 new shares per bond ($1,000 / $40). With a total bond value of $6,000, the total new shares issued are 150 ($6,000 / $1,000 x 25). The total diluted shares outstanding are 200 (original) + 30 (options) + 30 (RSUs) + 150 (convertibles) = 410 shares. At the current share price of $50, the diluted equity value equals 410 x $50 = $20,500. Common mistake: options add 30, not 20 — TSM = 50 − (50×20)/50 = 30.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 623,
    "question": "If a company has 10 options outstanding with a $50 average strike and the stock trades at $100, what happens to net income when they are all exercised?",
    "answer": "Reported in Evercore Interview Enterprise & Equity Value Net income is not directly impacted by a plain vanilla option exercise because the company issues shares for cash. The direct effect is on share count (dilution) rather than NI. However, any associated stock-based comp expense would have already been recognized earlier, not at exercise. The company receives cash equal to the strike price × options exercised (here, $50 × 10 = $500), which increases Assets (Cash) and Additional Paid-In Capital.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 624,
    "question": "You acquire 60% of a company for $1.5bn in equity.It has $400m revenue, $200m EBITDA, $175m cash, and $75m debt.What is the equity value, what is the net debt, and what is the EV?",
    "answer": "Reported in Evercore Interview SA 2025, New York Office, First round Enterprise & Equity Value Equity Value = $2.5 bn. Net Debt = $75 m – $175 m = –$100 m (net cash). Enterprise Value = 2.5 – 0.1 = $2.4 bn.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 625,
    "question": "Why might a company with the same P/E ratio as its peers have a lower EV/EBITDA multiple?",
    "answer": "Reported in Evercore Interview New York office Enterprise & Equity Value This wedge occurs when a company has a different capital structure or D&A profile. Key drivers: Higher Depreciation & Amortization: This depresses Net Income (raising P/E) but is added back to EBITDA (lowering EV/EBITDA). Different Tax Rates: A higher tax rate depresses Net Income without affecting EBITDA. Different Interest Expenses: Higher leverage/interest lowers Net Income, keeping P/E high, while EV/EBITDA is capital structure neutral.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 626,
    "question": "A company has a Market Cap of $500 million, Debt of $700 million, and Cash of $200 million.Part 1: What is its Enterprise Value?Part 2: The company then uses all its cash to repurchase debt at 50 cents on the dollar. Walk me through the impact on Enterprise Value. Assume a 25% tax rate.",
    "answer": "Reported in Evercore Interview New York Office, First round Enterprise & Equity Value Part 1: Initial Enterprise Value is $1,000 million. EV = Market Cap + Debt - Cash EV = $500M + $700M - $200M = $1,000M Part 2: The new Enterprise Value is $950 million. Analysis: The company uses $200M cash to repurchase debt at a 50% discount, retiring $400M of face value ($200M / 0.50). This creates a $200M pre-tax gain on debt extinguishment ($400M face value - $200M cash paid). This gain is taxed at 25%, resulting in a $50M tax payment ($200M * 25%). This tax is a cash outflow that reduces the total value of the firm. The after-tax gain is $150M ($200M - $50M), which flows to Retained Earnings and increases Market Cap by $150M to $650M. New Debt = $700M - $400M = $300M New Cash = $200M - $200M = $0 New EV = $650M (New Mkt Cap) + $300M (New Debt) - $0 (New Cash) = $950M Enterprise value decreases by $50M, which is the amount of value lost to the government via taxes on the gain.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Evercore"
    ]
  },
  {
    "id": 627,
    "question": "A company has an Equity Value of $5 billion, $2 billion of debt, and $2 billion of cash.If the company uses all of its cash for operations, what happens to its Enterprise Value?",
    "answer": "Reported in Greenhill & Co. Interview M&A group, First round Enterprise & Equity Value Answer: EV increases to $7 billion Calculation: Initial EV = $5B + $2B - $2B = $5B. After using cash: EV = $5B + $2B - $0 = $7B. Cash decreases by $2B, increasing EV by $2B. Note: Equity Value remains unchanged initially, but the use of cash for operations may impact future value.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Greenhill & Co."
    ]
  },
  {
    "id": 628,
    "question": "Use the following information:Enterprise value – $1,500Market value of equity – $1,000Book value of equity – $500Non‑controlling interest – $50Net income – $100Net income margin – 25%EPS – $2Answer the following:Net debtCurrent share priceP/E multipleRevenueEV / Revenue multipleWhy might you use P/E instead of EV / Revenue?",
    "answer": "Use the following information: Enterprise value – $1,500 Market value of equity – $1,000 Book value of equity – $500 Non‑controlling interest – $50 Net income – $100 Net income margin – 25% EPS – $2 Answer the following: Net debt Current share price P/E multiple Revenue EV / Revenue multiple Why might you use P/E instead of EV / Revenue? Reported in Guggenheim Partners Interview Enterprise & Equity Value Part 1 – Net Debt: $450 Net debt = EV − Equity value − NCI = 1,500 − 1,000 − 50 = 450. Part 2 – Share Price: $20 Shares = Net income / EPS = 100 / 2 = 50. Price = Market cap / Shares = 1,000 / 50 = 20. Part 3 – P/E Multiple: 10× P/E = Price / EPS = 20 / 2 = 10×. Part 4 – Revenue: $400 Revenue = Net income / Margin = 100 / 25% = 400. Part 5 – EV / Revenue: 3.75× 1,500 / 400 = 3.75×. Part 6 – P/E vs. EV / Revenue P/E is widely available for profitable public companies and reflects equity‑holder economics. EV / Revenue is useful when earnings are negative or distorted but is a cruder measure because it ignores margins and capital structure.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Guggenheim Partners"
    ]
  },
  {
    "id": 629,
    "question": "How does a $100 million secondary sale of shares by existing investors impact TEV and equity value?",
    "answer": "Reported in Jefferies Interview SA 2026, New York office, M&A group Enterprise & Equity Value No change in either. Shares simply move from existing holders to new investors; the company raises no cash and issues no new shares → equity value and TEV stay flat.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Jefferies"
    ]
  },
  {
    "id": 630,
    "question": "A company has the following characteristics:Total Assets: $3,000Leverage (Total Debt / Book Equity): 3.0xPrice to Book Value (P/BV): 2.0xAnswer the following questions based on this data:What are the company's Total Debt, Book Equity, and Market Cap?Assuming zero cash on the balance sheet, what is the company's Enterprise Value?If the company trades at a 15.0x P/E multiple, what is its Net Income?In a separate scenario, if this company has an EBITDA of $200 and is sold for an 8.0x EV/EBITDA multiple, what is the implied Enterprise Value of the transaction?Following on from the previous part, what is the implied P/E ratio of the transaction?",
    "answer": "Reported in Lazard Interview Enterprise & Equity Value Key Outputs Total Debt $2,250 Book Equity $750 Market Cap $1,500 Enterprise Value $3,750 Net Income $100 Transaction EV $1,600 Implied P ÷ E ≈ −6.5× (equity underwater) Calculations: Assets = Debt + Equity ⇒ 3,000 = 4E ⇒ E = 750. Debt = 3× 750 = 2,250. Market Cap = 2.0× 750 = 1,500. EV = 1,500 + 2,250 = 3,750. NI = 1,500 ÷ 15 = 100. Transaction EV = 8× 200 = 1,600. Equity Value at exit = 1,600 − 2,250 = −650 ⇒ P ÷ E = −650 ÷ 100.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 631,
    "question": "What is the impact on a company's EV/EBITDA and P/E multiples from the following actions?Part 1: The company issues debt to buy back shares.Part 2: The company issues new shares and holds the proceeds as cash on its balance sheet.",
    "answer": "Reported in Lazard Interview FIG First round Enterprise & Equity Value Part 1: Debt-Financed Buyback EV/EBITDA: Generally unchanged (EV remains constant as Debt rises and Equity falls by similar amounts; EBITDA is unaffected). P/E: Usually decreases. Mechanically, if Cost of Debt (after-tax) is lower than Earnings Yield, EPS increases. Higher EPS with same share price = lower P/E. The P/E may also contract because the company is now more leveraged and riskier, increasing the cost of equity. Part 2: Equity Issuance EV/EBITDA: Unchanged (Equity up, Cash up; EV = Equity + Debt - Cash remains constant). P/E: Increases. Equity Value rises immediately due to new shares, but Net Income only increases slightly (interest income on cash), causing P/E to rise (or EPS to dilute).",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Lazard"
    ]
  },
  {
    "id": 632,
    "question": "If all cash is needed for operations, is it included in Enterprise Value?",
    "answer": "Reported in LionTree Interview SA 2026 Enterprise & Equity Value Yes. Operating cash is an operating asset, so it remains inside EV just like working capital.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 633,
    "question": "Why is NCI (Non-Controlling Interest) included in EV?",
    "answer": "Reported in LionTree Interview SA 2026 Enterprise & Equity Value Because the parent consolidates 100% of the subsidiary’s revenue and EBITDA, you add NCI so Enterprise Value reflects 100% of those earnings.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "LionTree"
    ]
  },
  {
    "id": 634,
    "question": "Enterprise Value is 500, senior debt 100, undrawn revolver 50, cash 50, equity investments 50, and unfunded pension obligations of 100.What is the equity value?",
    "answer": "Reported in Moelis & Co. Interview SA 2025, Los Angeles Office, First round Enterprise & Equity Value $400. Net Debt = 100 – 50 = 50 Debt‑like Pension Obligation = 100 Non‑core Equity Investments (cash‑like) = -50 EV = Eq Value + 50 + 100 – 50 = Eq Value + 100 Set 500 = Eq Value + 100 → Eq Value = 400.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 635,
    "question": "If a company has an EV of 900, debt of 300, and cash of 100, what is the equity value, and what is it after a 3-for-1 stock split?",
    "answer": "Reported in Moelis & Co. Interview First round Enterprise & Equity Value Equity value = EV − Net Debt = 900 − 300 + 100 = 700. After a 3‑for‑1 split, equity value remains 700; share price divides by 3 while share count triples.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 636,
    "question": "A company provides the following financial data:Revenue: $2,000SG&A: $500Total Debt: $1,000Interest Rate on Debt: 10%Tax Rate: 25%Shares Outstanding: 100P/E Multiple: 20.0xWhat is the company's current share price?",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value $210 EBIT = 2,000 − 500 = 1,500. Interest = 1,000 × 10% = 100. Pre‑tax = 1,400 ⇒ NI = 1,400 × (1 − 25%) = 1,050. EPS = 1,050 / 100 = 10.5. Price = EPS × P/E = 10.5 × 20 = 210.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 637,
    "question": "If two companies are in the same industry and have the exact same Enterprise Value, why might one have a significantly different EBITDA than the other?",
    "answer": "Reported in Moelis & Co. Interview Enterprise & Equity Value The market assigns a higher EV∕EBITDA multiple to the perceived higher‑quality firm, so identical EVs translate into different EBITDA levels. Drivers of multiple variation: Growth prospects and margin durability. Recurring versus transactional revenue mix. Regulatory or geographic risk profile. Capital‑expenditure intensity and free‑cash conversion. Potential synergies or strategic value to acquirers.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 638,
    "question": "How would you calculate a company's equity value given its P/E ratio, tax rate, revenue, shares outstanding, gross margin, debt, interest rate, and SG&A expenses?",
    "answer": "Reported in Moelis & Co. Interview First round Enterprise & Equity Value Calculation steps: Gross Profit = Revenue * Gross Margin EBIT = Gross Profit - SG&A Interest Expense = Debt * Interest Rate EBT = EBIT - Interest Expense Net Income = EBT * (1 - Tax Rate) Equity Value = Net Income * P/E Ratio Alternatively: EPS = Net Income / Shares Outstanding. Share Price = EPS * P/E. Equity Value = Share Price * Shares Outstanding.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Moelis & Co."
    ]
  },
  {
    "id": 639,
    "question": "How do enterprise value and equity value change if $50 in cash is stolen?What if that cash was operational?",
    "answer": "Reported in Perella Weinberg Interview Superday Enterprise & Equity Value Excess Cash Equity Value –50, EV unchanged (cash is subtracted in the EV bridge). Operational Cash Both Equity Value and EV drop 50 because operating cash is part of core assets and not deducted from EV.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Perella Weinberg"
    ]
  },
  {
    "id": 640,
    "question": "A firm has Net Debt / EBITDA = 3x, EV / EBITDA = 10x, and market cap = $560 million.What is its enterprise value?",
    "answer": "Reported in PJT Partners Interview Enterprise & Equity Value Answer: $800m Net Debt = 3x EBITDA → EV = 10x EBITDA. EV = EqV + Net Debt → 10x EBITDA = 560 + 3x EBITDA → 7x EBITDA = 560 → EBITDA = 80m EV = 10 x $80m = $800m.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 641,
    "question": "Two companies have the same EV/EBITDA multiple but different P/E multiples. What could explain this difference?",
    "answer": "Reported in PJT Partners Interview New York Office Enterprise & Equity Value Key factors explaining the difference: Capital structure: Different debt levels affect equity value (P/E numerator) but not enterprise value (EV/EBITDA numerator). Depreciation & Amortization: Higher D&A reduces Net Income (lowering EPS, raising P/E) but doesn't affect EBITDA. Interest expense: Higher debt means more interest, reducing NI and EPS, thus raising P/E, while EBITDA is unaffected. Tax rates: Different effective tax rates impact NI but not EBITDA. Non-operating items: One-time gains/losses, investments in associates affect NI but not EBITDA.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 642,
    "question": "A company has the following metrics:Gross Debt / EBITDA = 5.0xEV / EBITDA = 10.0xMarket Cap = $400MCash = $100MCalculate its Total Enterprise Value (TEV).",
    "answer": "A company has the following metrics: Gross Debt / EBITDA = 5.0x EV / EBITDA = 10.0x Market Cap = $400M Cash = $100M Calculate its Total Enterprise Value (TEV). Reported in PJT Partners Interview First round Enterprise & Equity Value Answer: $600M Calculation: Debt = 5.0x * EBITDA and EV = $400M + 5.0x * EBITDA - $100M = 10.0x * EBITDA $300M + 5.0x * EBITDA = 10.0x * EBITDA $300M = 5.0x * EBITDA EBITDA = $60M TEV = 10.0x * $60M = $600M",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "PJT Partners"
    ]
  },
  {
    "id": 643,
    "question": "Can a company have a negative EV? What does that mean?Follow-up: How would you value a company with negative EV?",
    "answer": "Reported in Rothschild Interview SA 2026 Enterprise & Equity Value Yes — it happens when cash and equivalents exceed market cap plus debt and other claims. It often signals distress, excess cash or market mispricing. Valuation approach: Value cash at face and debt at par. Use relative or asset‑based methods for operations. Cross‑check with liquidation analysis if distress is likely.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Rothschild"
    ]
  },
  {
    "id": 644,
    "question": "If the EV/EBIT of a company is 3x and its EV/EBITDA is 4x, what does that tell you about the company?",
    "answer": "Reported in Union Square Advisors Interview SA 2026, Pre-first round Interview Enterprise & Equity Value EBITDA is < EBIT, so D&A is negative. Because EV is constant, a higher EV/EBITDA multiple means the EBITDA denominator is smaller than EBIT, which only happens if D&A is recorded as a credit (e.g., reversal of impairment, amortization of negative goodwill, or other non-recurring income). It's worth noting that this scenario is unusual and likely reflects an accounting anomaly rather than normal operations.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Union Square Advisors"
    ]
  },
  {
    "id": 645,
    "question": "You have two identical companies, except for their capital structure.Company A is capitalized with 30% debt and 70% equity, while Company B is capitalized with 100% equity.Which company has the higher Net Income, WACC, and Enterprise Value?",
    "answer": "Reported in Unspecified Interview Enterprise & Equity Value Comparison: Net Income: Company B is higher. Company A has interest expense reducing NI, while B has none. WACC: Company A is lower. Debt is cheaper than equity (due to tax shield), lowering overall WACC. Enterprise Value: Company A is higher. Due to the tax-deductibility of interest, using debt creates a \"tax shield\" that adds value to the firm. Therefore, the levered firm's Enterprise Value will be greater than the unlevered firm's value by the present value of this tax shield, assuming all else is equal.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 646,
    "question": "Part 1: A company has an Enterprise Value of $550, Debt of $60, Cash of $10, and 10 shares outstanding. What is its share price?Part 2: The company then raises $50 of new debt and holds it as cash. What is the new share price?Part 3: Instead, the company raises $50 of debt and uses the proceeds to pay a dividend. What is the new share price?Part 4: As another alternative, the company raises $50 of debt and uses the proceeds to repurchase stock. What is the new share price?Part 5: Comparing the dividend and share repurchase scenarios, in which case are investors better off?",
    "answer": "Reported in Unspecified Interview Enterprise & Equity Value Part 1: Share Price Answer: $50 Equity Value = EV - Debt + Cash = $550 - $60 + $10 = $500 Share Price = $500 / 10 shares = $50 Part 2: Raise Debt, Hold Cash Answer: $50 New Cash = $10 + $50 = $60 New Debt = $60 + $50 = $110 Equity Value = $550 - $110 + $60 = $500 Share Price = $500 / 10 shares = $50 (unchanged) Part 3: Raise Debt, Pay Dividend Answer: $45 New Debt = $60 + $50 = $110 Cash unchanged at $10 (raised cash paid out) Equity Value = $550 - $110 + $10 = $450 Share Price = $450 / 10 shares = $45 Part 4: Raise Debt, Repurchase Stock Answer: $50 New Debt = $60 + $50 = $110 Shares Repurchased = $50 / $50 = 1 share New Shares Outstanding = 10 - 1 = 9 shares Equity Value = $550 - $110 + $10 = $450 Share Price = $450 / 9 shares = $50 Part 5: Investor Comparison Investors are economically indifferent in a perfect market with no taxes. Dividend: Investors receive $5/share cash, hold shares worth $45 = $50 total value Buyback: Investors hold shares worth $50 However, in practice, buybacks are often preferable due to tax efficiency (capital gains vs. dividend taxation)",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 647,
    "question": "Calculate Enterprise Value given the following information. Assume a 20% tax rate.Annual Interest Expense = $20Equity Value = $1,000EV/EBITDA = 12xP/E = 25xCost of Debt = 10%Annual D&A = $30",
    "answer": "Assume a 20% tax rate. Annual Interest Expense = $20 Equity Value = $1,000 EV/EBITDA = 12x P/E = 25x Cost of Debt = 10% Annual D&A = $30 Reported in Unspecified Interview Enterprise & Equity Value Answer: $1,200 Method 1 (Shortcut): Total Debt = Interest Expense / Cost of Debt = $20 / 10% = $200 EV = Equity Value + Debt = $1,000 + $200 = $1,200 (assuming no cash) Method 2 (Income Statement walk): From P/E = 25x and Equity Value = $1,000, find Net Income: NI = $1,000 / 25 = $40 Find Pre-Tax Income (EBT): EBT = NI / (1 - Tax Rate) = $40 / (1 - 0.20) = $50 Find EBIT: EBIT = EBT + Interest Expense = $50 + $20 = $70 Find EBITDA: EBITDA = EBIT + D&A = $70 + $30 = $100 Calculate Enterprise Value: EV = EBITDA * EV/EBITDA Multiple = $100 * 12x = $1,200",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 648,
    "question": "Part 1: Given a company's EBITDA, EV/EBITDA multiple, net debt, shares outstanding, and a list of options with their strike prices, how would you calculate the price per share?Part 2: How would your approach change if you were given Net Income and a P/E multiple instead of EBITDA and an EV/EBITDA multiple?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value Part 1: Using EV/EBITDA Calculate EV = EBITDA * EV/EBITDA multiple. Calculate Equity Value = EV - Net Debt. Apply Treasury Stock Method for options to get diluted shares. Share Price = Equity Value / Diluted Shares Outstanding. Part 2: Using P/E Calculate Equity Value = NI * P/E multiple. Apply Treasury Stock Method for options to get diluted shares. Share Price = Equity Value / Diluted Shares. Key difference: With P/E, you start at equity value directly; with EV/EBITDA, you must bridge from EV to equity value by subtracting net debt.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 649,
    "question": "If you have two companies with the same Enterprise Value, but one has higher leverage than the other, which one has the higher P/E ratio?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value The company with lower leverage (less debt) will have the higher P/E ratio. Reasoning: Risk: Higher leverage increases the financial risk for equity holders. Investors demand a higher rate of return to compensate for this increased risk. Cost of Equity and P/E: A higher required return on equity (Cost of Equity) translates directly to a lower P/E multiple an investor is willing to pay for a dollar of earnings. Conclusion: Therefore, the company with higher leverage will be perceived as riskier and will trade at a lower P/E multiple, all else being equal.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 650,
    "question": "What is the net impact on a company's Enterprise Value if it raises $50m in equity, raises $75m in debt, and pays out a $100m dividend?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value Answer: No change to Enterprise Value. Analysis: Raise $50M equity: Cash +$50M, Equity Value +$50M. EV unchanged (EqV +$50M, Cash +$50M offset). Raise $75M debt: Cash +$75M, Debt +$75M. EV unchanged (Debt +$75M, Cash +$75M offset). Pay $100M dividend: Cash -$100M, Equity Value -$100M. EV unchanged (EqV -$100M, Cash -$100M offset). Net: Cash +$25M ($50M + $75M - $100M), Debt +$75M, Equity Value -$50M. Enterprise Value = unchanged.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  },
  {
    "id": 651,
    "question": "Two companies have the same Enterprise Value, but one has a higher debt-to-equity ratio. Which company will have the higher P/E multiple?",
    "answer": "Reported in Unspecified Interview Superday Enterprise & Equity Value The company with lower leverage (less debt) will have the higher P/E ratio. Reasoning: Same Enterprise Value: Both companies have the same total value available to all capital providers. Risk Effect (Dominant Factor): Higher leverage increases financial risk for equity holders. This increased risk leads to a higher cost of equity. Valuation Impact: Investors will pay less for a dollar of riskier earnings, which directly translates to a lower P/E multiple. Net Result: The risk effect dominates the mechanical effects on the P/E formula. Higher financial risk commands a lower valuation multiple, resulting in a lower P/E for the more leveraged company.",
    "topic": "Enterprise & Equity Value",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Unspecified"
    ]
  }
];

module.exports = { ENTERPRISE_EQUITY_VALUE };
