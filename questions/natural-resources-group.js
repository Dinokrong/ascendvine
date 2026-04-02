// Auto-generated — do not edit directly. Source of truth is questions.json
/** @type {import('../types').Question[]} */
const NATURAL_RESOURCES_GROUP = [
  {
    "id": 1473,
    "question": "What are some alternative valuation methods used specifically for oil and gas exploration and production (E&P) companies?",
    "answer": "Reported in Citi Interview Oil & Gas group, Houston office, Superday Natural Resources Group E&P-specific valuation methods: NAV (Net Asset Value): Present value of proved reserves using commodity price forecasts and decline curves EV/Production: Enterprise value per barrel of oil equivalent per day (boe/d) EV/Reserves: Enterprise value per barrel of proved reserves ($/boe) EV/Acreage: Enterprise value per developed or undeveloped acre Reserve-Based Lending: Value based on percentage of PV-10 (present value of proved reserves discounted at 10%) Finding & Development Cost Multiples: Compare costs to develop reserves These methods account for commodity price volatility, reserve quantities, production profiles, and drilling economics unique to E&P companies.",
    "topic": "Natural Resources Group",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Citi"
    ]
  },
  {
    "id": 1474,
    "question": "How would you model a company that owns and operates multiple gas-fired power plants?",
    "answer": "Reported in Credit Suisse Interview New York office, Superday Natural Resources Group Key modeling considerations for gas-fired power plants: Revenue: Model power price ($/MWh) * generation (MWh). Use forward power curves or merchant power price assumptions COGS: Model natural gas costs (heat rate * gas price * generation) plus variable O&M Capacity Factor: Forecast utilization rates based on dispatch economics and baseload vs. peaking role Contract Structure: Separate contracted (PPA) vs. merchant exposure CapEx: Maintenance capex for existing plants, growth capex for new builds Asset Life: Model remaining useful life and terminal value assumptions Environmental Costs: Factor in emissions credits, compliance costs Build each plant separately then consolidate for portfolio view Use DCF with WACC reflecting power market risk. Consider precedent transactions ($/kW or $/MW) and comparable company multiples for triangulation.",
    "topic": "Natural Resources Group",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "Credit Suisse"
    ]
  },
  {
    "id": 1475,
    "question": "Walk me through a DCF valuation for a pipeline company. What specific considerations are important?Separately, if your required rate of return is 12%, how long would it take to double your investment?",
    "answer": "Reported in J.P. Morgan Interview Houston office, Superday Natural Resources Group Part 1: Pipeline Company DCF Standard DCF framework applies, with specific considerations: Revenue: Model fee-based contracts (take-or-pay) vs. commodity-exposed throughput EBITDA: Pipelines have stable, predictable margins due to regulated/contracted nature CapEx: Separate maintenance capex from growth capex (new pipeline builds) Terminal Value: Use perpetuity growth or exit multiple, reflecting mature asset base WACC: Typically lower due to stable cash flows; use utility-style betas Regulatory Environment: Factor in rate regulations and tariff structures Contract Rollovers: Model contract renewal risk and pricing Part 2: Time to Double Investment Answer: ~6 years Use Rule of 72: 72 / Rate = Years to Double 72 / 12 = 6 years More precisely: ln(2) / ln(1.12) = 6.12 years",
    "topic": "Natural Resources Group",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  },
  {
    "id": 1476,
    "question": "How would you value an oil and gas company differently than a technology company?What valuation method is particularly relevant for an oil and gas company, and why?",
    "answer": "Reported in J.P. Morgan Interview SA 2025 Natural Resources Group Key Differences Oil & Gas: Asset-heavy, commodity-driven, depleting reserves, cyclical cash flows. Technology: Asset-light, recurring revenue, scalable, growth-focused. O&G uses EV/EBITDA, P/Proven Reserves, DCF with commodity price sensitivity. Tech uses EV/Revenue, P/E, growth-adjusted multiples. NAV (Net Asset Value) Method Particularly relevant for oil & gas companies. NAV values each asset (oil/gas reserves) based on: Proven reserves (proved developed producing, proved developed non-producing, proved undeveloped). Discounted cash flows from each reserve using commodity price assumptions. Subtract debt to get equity NAV per share. NAV captures the intrinsic value of physical reserves, critical for capital-intensive, reserve-driven businesses.",
    "topic": "Natural Resources Group",
    "difficulty": "Advanced",
    "type": "technical",
    "firms": [
      "J.P. Morgan"
    ]
  }
];

module.exports = { NATURAL_RESOURCES_GROUP };
