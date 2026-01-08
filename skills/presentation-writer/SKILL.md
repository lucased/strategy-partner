---
name: presentation-writer
description: Transform internal strategy documents into investor-ready pitch deck content. Use when converting validated strategy outputs into a 10-12 slide investor presentation. Takes Three-Act Narrative strategy and produces slide-by-slide markdown optimized for VC and PE audiences. Shifts tone from problem-focused internal narrative to opportunity-focused external pitch.
---

# Presentation Writer Skill

## Purpose

Internal strategy documents are built to drive alignment and execution - they're honest about problems, constraints, and risks. Investor decks are built to inspire confidence and secure capital - they're optimistic about opportunity and potential.

This skill transforms the validated output from `structure-reviewer` into investor-ready slide content, maintaining strategic integrity while shifting from problem-focused internal narrative to opportunity-focused external pitch.

---

## When to Use

Use this skill when:
- Strategy document has passed `structure-reviewer` validation
- You need to create an investor pitch deck
- Target audience is VCs, PE funds, or external stakeholders
- You need to transform internal language to external positioning

Do NOT use when:
- Strategy document is still in draft/validation phase
- Target audience is internal (board, employees, partners)
- You need operational detail, not pitch narrative

---

## Input Requirements

### Required Input
- Validated strategy document (output from `structure-reviewer`)
- OR paths to completed workflow outputs (01-diagnosis through 07-structure-review)

### Optional Context
- Target investor type (Seed, Series A/B/C, PE, Strategic)
- Specific metrics to highlight
- Team bios (if not in strategy doc)
- Financial projections (if not in strategy doc)
- Competitive positioning preferences

---

## The Investor Deck Structure

### The 12-Slide Framework

Based on Sequoia Capital's proven template and Guy Kawasaki's 10/20/30 rule.

| # | Slide | Purpose | Time |
|---|-------|---------|------|
| 1 | Title/Hook | Capture attention, state what you do | 30s |
| 2 | Problem | The pain point you solve | 1min |
| 3 | Solution | Your product/approach | 1min |
| 4 | Market | Size of the opportunity | 1min |
| 5 | Product | What you've built | 2min |
| 6 | Business Model | How you make money | 1min |
| 7 | Traction | Proof it works | 1min |
| 8 | Competition | Why you win | 1min |
| 9 | Team | Why you execute | 1min |
| 10 | Financials | The numbers | 1min |
| 11 | The Ask | What you need | 30s |
| 12 | Vision/Close | The dream | 30s |

**Total**: ~12 slides, 20 minutes presentation, 30-point minimum font

---

## Three-Act Narrative to Investor Deck Mapping

| Investor Slide | Strategy Source Section(s) | Transformation Notes |
|----------------|---------------------------|---------------------|
| **1. Title/Hook** | Prologue: The Crux | Reframe from problem to opportunity. "We must solve X" becomes "Massive opportunity in X" |
| **2. Problem** | Section 1 (The Challenge) + Section 3 (What's at Stake) | Focus on market pain, not organizational challenge. Remove internal constraints |
| **3. Solution** | Section 4 (Strategic Response) + Section 6 (Value Props) | Lead with product/service, not strategy. What you're building |
| **4. Market** | Appendix (TAM/SAM/SOM) + Section 1 | Pull market sizing forward. Add growth rates, trends |
| **5. Product** | Section 7 (H1 initiatives) + Section 6 | Concrete features, screenshots. What exists today |
| **6. Business Model** | Section 5 (Strategic Choices) + Section 6 | Revenue streams, pricing, unit economics |
| **7. Traction** | Section 2 (Our Position) + Section 9 (Metrics) | Current metrics, growth rate, milestones achieved |
| **8. Competition** | Section 1 (Competitive Landscape) + 7 Powers analysis | 2x2 matrix positioning. Transform analysis to differentiation story |
| **9. Team** | Section 2 (Core Differentiators) | Team credentials, relevant wins. Often needs new content |
| **10. Financials** | Section 7 (Horizons) + Section 9 (Metrics) | 3-5 year projections, key assumptions |
| **11. The Ask** | Section 5 (Choices) + Section 8 (First Steps) | Funding amount, use of funds, what it unlocks |
| **12. Vision/Close** | Prologue (reframed positive) + Section 4 (Vision) | End on the dream. What winning looks like |

---

## Transformation Rules

### Rule 1: Tone Transformation

| Internal Language | External Language |
|-------------------|-------------------|
| Diagnosis | Opportunity |
| Challenges | Growth drivers |
| Risks | Considerations |
| Weaknesses | Focus areas |
| Constraints | Priorities |
| If we fail | As we scale |
| Must fix | Positioned to |
| We have a problem | There's an opportunity |
| We're constrained by | We're focused on |
| Competitors are ahead | Market is validated |
| We face risk | We've de-risked through |

### Rule 2: Problem Reframing

**Internal (Strategy)**: Focuses on organizational challenges, constraints, risks
**External (Deck)**: Focuses on market pain points, customer needs, opportunity

Transform:
- "We lack capability in X" → "We're building world-class capability in X"
- "Competitors are ahead" → "Market is validated, execution is key"
- "We face regulatory risk" → "Regulatory clarity creates moat"

### Rule 3: Metrics Selection

Investors care about specific metrics. Prioritize these:

| Metric | Target Range | Source |
|--------|--------------|--------|
| Net Revenue Retention (NRR) | ≥100% (120%+ ideal) | Section 9 |
| Gross Margin | 70-85% (SaaS) | Section 2, Financials |
| CAC Payback | 6-12 months | Section 9 |
| Burn Multiple | ≤1.5-2.0x | Financials |
| MoM/YoY Growth | Category dependent | Section 9 |

### Rule 4: Competitive Differentiation

Transform 7 Powers analysis into investor-friendly language:

| 7 Power | Investor Language |
|---------|-------------------|
| Scale Economies | "Unit economics improve at scale" |
| Network Effects | "Value increases with each user" |
| Counter-Positioning | "Incumbents can't respond" |
| Switching Costs | "High retention, sticky customers" |
| Cornered Resource | "Exclusive access to [X]" |
| Process Power | "Proprietary methodology" |
| Branding | "Trusted category leader" |

### Rule 5: Narrative Arc

Structure the deck as a story:

1. **Setup** (Slides 1-4): Hook → Problem → Solution → Opportunity
2. **Proof** (Slides 5-8): Product → Model → Traction → Competition
3. **Close** (Slides 9-12): Team → Financials → Ask → Vision

---

## Slide-by-Slide Output Format

Output each slide in this structured markdown format:

```markdown
## Slide [N]: [Slide Name]

### Headline
[Single compelling statement - the main point investors should remember. Max 10 words.]

### Content
[Bullet points or key content for the slide body]
- Point 1
- Point 2
- Point 3

### Supporting Data
[Specific metrics, charts to include]
- [Metric]: [Value]

### Visual Suggestion
[What visual element would strengthen this slide - chart type, image, diagram]

### Speaker Notes
[What to say when presenting - key talking points, 2-3 sentences]

### Source Sections
[Which strategy doc sections this draws from]
```

---

## Slide-by-Slide Guidance

### Slide 1: Title/Hook

**Purpose**: Capture attention in 5 seconds. State who you are and what you do.

**Must include**:
- Company name and logo placement
- One-line value proposition (what you do, for whom)
- Optional: Key proof point ("$XM ARR", "YK customers")

**Transform from**: Prologue crux statement (problem-focused)
**Transform to**: Opportunity statement (positive framing)

**Example**:
- Internal: "We must solve the fragmentation of customer data before competitors consolidate the market"
- External: "Unifying customer data for the AI era"

---

### Slide 2: Problem

**Purpose**: Make investors feel the pain. Create empathy for the customer.

**Must include**:
- The specific pain point (quantified if possible)
- Who experiences this pain
- Why existing solutions fail

**Avoid**:
- Organizational problems (that's internal)
- Technical complexity
- Multiple problems (focus on one)

**Transform from**: Section 1 (market challenges) + Section 3 (stakes)
**Transform to**: Customer pain statement

---

### Slide 3: Solution

**Purpose**: Show your answer to the problem. Simple and clear.

**Must include**:
- What you've built (product/service)
- How it solves the problem
- Key differentiation (1-2 points)

**Avoid**:
- Strategy language ("Our guiding policy...")
- Technical architecture
- Feature lists

**Transform from**: Section 4 (Strategic Response) + Section 6 (Value Props)
**Transform to**: Product positioning

---

### Slide 4: Market Opportunity

**Purpose**: Show the prize is worth chasing. This is the "dream" slide.

**Must include**:
- TAM (Total Addressable Market)
- SAM (Serviceable Addressable Market)
- SOM (Serviceable Obtainable Market)
- Growth rate and key trends

**Best practice**:
- Bottom-up calculation preferred over top-down
- Show your logic, not just numbers
- TAM should be >$1B for venture-scale

**Transform from**: Appendix market sizing + Section 1 trends
**Transform to**: Opportunity narrative with proof

---

### Slide 5: Product

**Purpose**: Show what you've built. Make it tangible.

**Must include**:
- Screenshots or product demo reference
- Key features (3-5 max)
- User benefit for each feature

**Best practice**:
- Show, don't tell
- Focus on what exists, not roadmap
- Highlight unique capabilities

**Transform from**: Section 7 (H1 initiatives) + Section 6 (capabilities)
**Transform to**: Feature showcase

---

### Slide 6: Business Model

**Purpose**: Show how you make money and scale.

**Must include**:
- Revenue model (subscription, transaction, etc.)
- Pricing structure
- Unit economics (LTV, CAC, margins)
- Customer acquisition approach

**Key metrics to include**:
- Gross Margin: 70-85% (SaaS)
- LTV:CAC ratio: >3:1
- CAC Payback: 6-12 months

**Transform from**: Section 5 (Strategic Choices) + Section 6 (Value Props)
**Transform to**: Economics narrative

---

### Slide 7: Traction

**Purpose**: Prove it works. Show momentum.

**Must include**:
- Key growth metrics (revenue, users, customers)
- Growth rate (MoM, YoY)
- Notable milestones or logos
- Retention/engagement metrics

**Best practice**:
- Show trajectory, not just current state
- Include logos if you have notable customers
- Be specific with numbers

**Transform from**: Section 2 (Our Position) + Section 9 (Metrics)
**Transform to**: Proof points

---

### Slide 8: Competition

**Purpose**: Show why you win. Position yourself favorably.

**Must include**:
- 2x2 competitive positioning matrix
- Key differentiators (2-3)
- Why competitors can't easily copy you

**Best practice**:
- Don't say "no competition" (red flag)
- Position on axes you win on
- Include indirect competitors

**Transform from**: Section 1 (Competitive Landscape) + 7 Powers
**Transform to**: Differentiation story

---

### Slide 9: Team

**Purpose**: Show you can execute. Build confidence.

**Must include**:
- Founders with relevant credentials
- Key hires if notable
- Relevant experience (domain, stage, exits)
- Advisors if impressive

**Best practice**:
- Focus on "why this team wins here"
- Prior startup experience matters
- Domain expertise matters

**Transform from**: Section 2 (Core Differentiators) + org capability
**Transform to**: Credibility narrative

**Note**: This slide often needs new content not in strategy doc.

---

### Slide 10: Financials

**Purpose**: Show the path to scale. Demonstrate planning ability.

**Must include**:
- 3-5 year revenue projections
- Key assumptions clearly stated
- Path to profitability (if applicable)
- Current burn rate and runway

**Key metrics**:
- Burn Multiple: ≤1.5-2.0x
- Revenue growth: Category dependent
- Gross margin trajectory

**Transform from**: Section 7 (Horizons) + Section 9 (Metrics)
**Transform to**: Financial narrative

---

### Slide 11: The Ask

**Purpose**: Make a clear, specific request.

**Must include**:
- Amount raising
- Use of funds (3-4 categories)
- What it unlocks (milestones)
- Timeline (typically 12-18 months runway)

**Best practice**:
- Be specific about allocation
- Tie to next milestones
- Show what you'll achieve

**Transform from**: Section 5 (Choices) + Section 8 (First Steps)
**Transform to**: Investment thesis

---

### Slide 12: Vision/Close

**Purpose**: End on the dream. Leave them wanting more.

**Must include**:
- Long-term vision
- Why this matters
- Call to action

**Best practice**:
- Inspirational but grounded
- Connect back to the problem
- End with confidence

**Transform from**: Prologue + Section 4 (Vision)
**Transform to**: Aspirational close

---

## Quality Criteria

### Must-Have (Slide Fails Without)

- [ ] Clear, memorable headline (≤10 words)
- [ ] Single point per slide (focus)
- [ ] Data/evidence for claims
- [ ] No internal/negative language
- [ ] Consistent narrative thread

### Should-Have (Slide Weakened Without)

- [ ] Specific metrics with context
- [ ] Visual suggestion
- [ ] Speaker notes
- [ ] Source traceability

### Investor-Specific Checks

- [ ] Does slide 4 (Market) show TAM > $1B?
- [ ] Does slide 7 (Traction) show growth momentum?
- [ ] Does slide 11 (Ask) have clear use of funds?
- [ ] Is the ask amount appropriate for stage?

---

## Common Transformation Pitfalls

| Pitfall | Example | Fix |
|---------|---------|-----|
| **Over-honest** | Including all risks | Lead with opportunity, mention key risks conversationally |
| **Too strategic** | "Our guiding policy is..." | Translate to "We're building..." or "We focus on..." |
| **Missing proof** | "Huge market opportunity" | Add specific TAM/SAM/SOM with sources |
| **Weak team slide** | Generic bios | Highlight relevant wins, domain expertise |
| **Unclear ask** | "We need funding" | "$Xm for 18mo runway, achieve [milestones]" |
| **Jargon-heavy** | Strategy frameworks | Simple, concrete language |
| **Feature-focused** | List of capabilities | Lead with customer benefit |

---

## Output Template

```markdown
# Investor Deck Content
## [Company Name] - [Tagline]

### Deck Overview
- **Target Audience**: [VC/PE/Strategic]
- **Stage**: [Seed/Series A/B/C]
- **Ask**: $[X]M
- **Use of Funds**: [Primary allocations]

---

## Slide 1: Title

### Headline
[Company Name]: [One-line value proposition]

### Content
- [Tagline/positioning statement]
- [Optional: Key proof point]

### Visual Suggestion
Logo, clean design, memorable image

### Source Sections
Prologue: The Crux (reframed positive)

---

## Slide 2: Problem

### Headline
[The pain point in ≤10 words]

### Content
- [Customer pain 1]
- [Customer pain 2]
- [Quantified impact of problem]

### Supporting Data
- [X]% of [audience] experience [problem]
- $[Y]B lost annually to [issue]

### Visual Suggestion
Pain-point illustration or customer quote

### Speaker Notes
"The key insight is... Customers tell us..."

### Source Sections
Section 1 (The Challenge); Section 3 (What's at Stake)

---

## Slide 3: Solution

### Headline
[Your solution in ≤10 words]

### Content
- [What you do]
- [Key differentiator 1]
- [Key differentiator 2]

### Supporting Data
- [Proof point if available]

### Visual Suggestion
Product screenshot or simple diagram

### Speaker Notes
[Key points to emphasize]

### Source Sections
Section 4 (Strategic Response); Section 6 (Value Props)

---

[Continue for all 12 slides...]
```

---

## Output File Requirements

When this skill completes, write TWO files:

### 1. Notes File (`08-presentation-writer/notes.md`)

Contains:
- Input context received
- Strategy sections used and transformations applied
- Key decisions on tone/framing
- Content gaps identified (e.g., team bios needed)
- Questions for user validation
- Confidence levels for each slide

### 2. Output File (`08-presentation-writer/output.md`)

Contains:
- Complete slide-by-slide content using template above
- Structured for downstream consumption by `presentation-builder`
- Cross-references to source strategy sections
- All 12 slides with required fields

### 3. Update Manifest

After writing files, update `00-manifest.md` with:
- Phase: 8
- Skill: presentation-writer
- Status: Complete
- Output path: `08-presentation-writer/output.md`
- Notes path: `08-presentation-writer/notes.md`
- Timestamp
- Key outputs summary (slide count, any gaps)

---

## Workflow Position

```
structure-reviewer (Phase 7)
         │
         ▼
presentation-writer (Phase 8) ◄── YOU ARE HERE
         │
         ▼
presentation-builder (Phase 9)
         │
         ▼
Investor Deck (HTML + PPTX)
```

This skill chains FROM `structure-reviewer` and chains TO `presentation-builder`.
