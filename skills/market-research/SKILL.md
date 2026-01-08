---
name: market-research
description: Data-driven market research methodology for strategy development. Use when analyzing market size (TAM/SAM/SOM), conducting competitive intelligence, researching industry trends, validating market assumptions, or grounding strategic claims in data. Requires web search capabilities.
---

# Market Research Skill

## Purpose

Ground strategic decisions in data, not assumptions. Vague market sizing and unsupported claims about competition are common strategy failure modes. This skill provides a systematic approach to gathering and validating market intelligence.

## Market Sizing Framework

### TAM / SAM / SOM Analysis

#### Total Addressable Market (TAM)
**Definition**: Total market demand for a product/service if you had 100% market share

**Approaches**:
1. **Top-down**: Industry reports, analyst estimates
2. **Bottom-up**: # of potential customers × average revenue per customer
3. **Value theory**: Value created × ability to capture

**Search queries for TAM**:
- "[industry] market size [year]"
- "[industry] total addressable market"
- "[product category] global market value"
- "[industry] market forecast report"

**Validation questions**:
- Source credibility (analyst firm, trade association, company)?
- How recent is the data?
- What's included/excluded in the definition?
- Do multiple sources roughly agree?

---

#### Serviceable Addressable Market (SAM)
**Definition**: Portion of TAM targeted by your products/services (your realistic arena)

**Calculation**:
TAM × (your geography %) × (your segment %) × (your product fit %)

**Key questions**:
- Which geographies can you actually serve?
- Which customer segments will your product fit?
- What constraints limit your reach?

---

#### Serviceable Obtainable Market (SOM)
**Definition**: Realistic market capture given competitive dynamics

**Calculation approaches**:
- Current market share × growth rate
- Comparable company market share benchmarks
- Sales capacity × conversion rates

**Key questions**:
- What market share do similar companies achieve?
- What's a realistic sales/marketing capacity?
- How does competitive intensity affect capture rate?

---

### Market Sizing Output Template

```markdown
## Market Size Analysis: [Industry/Product]

### TAM: $[X]B
**Definition**: [What's included]
**Source**: [Primary source and date]
**Confidence**: [High/Medium/Low]

**Calculation**:
- [Method used]
- [Key assumptions]

### SAM: $[X]B ([Y]% of TAM)
**Definition**: [Geographic/segment scope]

**Filters applied**:
- Geography: [X]% of TAM
- Segment: [X]% of TAM
- Product fit: [X]% of TAM

### SOM: $[X]M ([Y]% of SAM)
**Rationale**: [Why this is achievable]
**Timeline**: [Years to achieve]
**Benchmarks**: [Comparable company data]

### Growth Projections
| Year | TAM | SAM | SOM |
|------|-----|-----|-----|
| [Year] | $[X]B | $[X]B | $[X]M |
| [Year+1] | $[X]B | $[X]B | $[X]M |
| [Year+2] | $[X]B | $[X]B | $[X]M |

### Key Assumptions to Validate
1. [Assumption]: [How to validate]
2. [Assumption]: [How to validate]
```

---

## Competitive Intelligence Framework

### Competitor Identification

**Direct competitors**: Same product, same customer
**Indirect competitors**: Different product, same customer need
**Potential entrants**: Could enter your market

**Search queries**:
- "[product category] competitors"
- "[company name] alternatives"
- "[industry] startups"
- "[industry] market leaders"
- "companies like [competitor name]"

---

### Competitor Profile Template

For each significant competitor, gather:

```markdown
## Competitor Profile: [Company Name]

### Overview
- **Founded**: [Year]
- **HQ**: [Location]
- **Employees**: [Count]
- **Funding**: [Total raised / Public]
- **Key investors**: [Names]
- **Recent news**: [Summary]

### Product/Market
- **Target customers**: [Segments]
- **Core products**: [List]
- **Pricing**: [Model and approximate levels]
- **Key differentiators**: [What they claim]

### Financials (if available)
- **Revenue**: [Amount or estimate]
- **Growth rate**: [%]
- **Profitability**: [Status]
- **Key metrics**: [ARR, GMV, etc.]

### Strategy Signals
- **Recent hires**: [Key positions filled]
- **Recent launches**: [Products/features]
- **Partnerships**: [Notable]
- **Geographic expansion**: [Movements]

### Strengths & Weaknesses
| Strengths | Weaknesses |
|-----------|------------|
| [List] | [List] |

### Threat Assessment
- **Threat level**: [High/Medium/Low]
- **Most likely competitive action**: [What they might do]
- **Our vulnerability**: [Where they could hurt us]
```

---

### Competitive Landscape Map

**Search queries for competitive data**:
- "[competitor] funding"
- "[competitor] revenue"
- "[competitor] pricing"
- "[competitor] customers"
- "[competitor] reviews"
- "[competitor] vs [alternative]"
- "site:crunchbase.com [competitor]"
- "site:linkedin.com [competitor] employees"

---

## Industry Analysis Framework

### Porter's Five Forces (Quick Assessment)

| Force | Intensity | Key Factor |
|-------|-----------|------------|
| Rivalry | H/M/L | [Main driver] |
| Buyer Power | H/M/L | [Main driver] |
| Supplier Power | H/M/L | [Main driver] |
| Threat of Substitutes | H/M/L | [Main driver] |
| Threat of New Entrants | H/M/L | [Main driver] |

### PESTEL Scan

**Search for each factor**:
- **Political**: "[industry] regulation", "[industry] government policy"
- **Economic**: "[industry] economic outlook", "[industry] recession impact"
- **Social**: "[industry] consumer trends", "[industry] demographic shift"
- **Technological**: "[industry] technology trends", "[industry] disruption"
- **Environmental**: "[industry] sustainability", "[industry] ESG"
- **Legal**: "[industry] legal issues", "[industry] compliance"

---

## Trend Research Framework

### Identifying Trends

**Search queries**:
- "[industry] trends [year]"
- "[industry] predictions"
- "[industry] future of"
- "[industry] emerging technology"
- "what's next for [industry]"

### Trend Validation

For each claimed trend, assess:

| Criterion | Assessment |
|-----------|------------|
| Multiple credible sources? | Y/N |
| Evidence of adoption? | Y/N |
| Quantified growth? | Y/N |
| Timeline plausible? | Y/N |
| Counter-arguments considered? | Y/N |

### Trend Profile

```markdown
## Trend: [Name]

### Evidence
- [Data point 1 with source]
- [Data point 2 with source]

### Drivers
- [What's causing this trend]

### Timeline
- [When it will meaningfully impact the market]

### Strategic Implications
- **Opportunity**: [How we could benefit]
- **Threat**: [How it could hurt us]
- **Action required**: [What we should do]
```

---

## Research Best Practices

### Source Quality Hierarchy

1. **Primary sources**: Company filings, official reports, direct statements
2. **Industry analysts**: Gartner, Forrester, McKinsey, etc.
3. **Trade publications**: Industry-specific news and data
4. **Business press**: WSJ, Bloomberg, Reuters
5. **User-generated**: Reviews, forums (useful for sentiment, less for facts)

### Avoiding Research Traps

❌ **Single source dependency**: Always triangulate
❌ **Stale data**: Check publication dates
❌ **Inflated TAM**: Vendors overstate market size
❌ **Confirmation bias**: Actively seek disconfirming data
❌ **Precision illusion**: "$47.3B" isn't more accurate than "$45-50B"

### Research Output Standards

Every data claim should include:
- **Source**: Where did this come from?
- **Date**: When was this published?
- **Confidence**: How reliable is this?
- **Corroboration**: What else supports this?

---

## Research Execution Checklist

```markdown
## Research Checklist: [Topic]

### Market Size
- [ ] TAM from multiple sources
- [ ] SAM calculated with explicit filters
- [ ] SOM benchmarked to comparables
- [ ] Growth rates validated
- [ ] Assumptions documented

### Competitive Intelligence
- [ ] All direct competitors identified
- [ ] Top 3-5 profiled in depth
- [ ] Funding and financial data gathered
- [ ] Recent strategic moves tracked
- [ ] Customer sentiment researched

### Industry Context
- [ ] Key trends identified and validated
- [ ] Regulatory environment understood
- [ ] Technology shifts mapped
- [ ] Economic factors considered

### Quality Checks
- [ ] All sources documented
- [ ] Publication dates verified
- [ ] Confidence levels assigned
- [ ] Counter-evidence sought
- [ ] Assumptions explicit
```

---

## Output File Requirements

When this skill completes, write TWO files:

### 1. Notes File (`05-market-research/notes.md`)
Contains:
- Input context received
- Key decisions made during analysis
- Assumptions and confidence levels
- Questions for user validation
- References to sources used

### 2. Output File (`05-market-research/output.md`)
Contains:
- Core deliverable using the templates above
- Structured for downstream skill consumption
- Cross-references to notes file for audit trail

### 3. Update Manifest
After writing files, update `00-manifest.md` with:
- Status: Complete
- Output path: `05-market-research/output.md`
- Notes path: `05-market-research/notes.md`
- Timestamp
