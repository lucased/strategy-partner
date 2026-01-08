---
name: presentation-writer-internal
description: Transform strategy documents into internal stakeholder presentations. Use when creating board decks, leadership updates, or team alignment presentations. Preserves the honest, conditional, risk-aware language from the strategy document WITHOUT tone transformation. Maintains "uncomfortable truths", validation requirements, and fallback strategies.
---

# Internal Presentation Writer Skill

## Purpose

Internal stakeholder presentations serve different goals than investor pitches. While investor decks inspire confidence and secure capital, internal decks drive alignment, inform execution, and ensure accountability.

This skill transforms the validated output from `structure-reviewer` into internal stakeholder slide content, **preserving the honest, conditional, risk-aware language** from the strategy document. Unlike the investor presentation skill, this does NOT transform tone.

**Key Principle**: The power of a good strategy is its honesty about constraints, risks, and validation requirements. Internal audiences need this truth to execute effectively.

---

## When to Use

Use this skill when:
- Strategy document has passed `structure-reviewer` validation
- You need to create a board deck, leadership update, or team presentation
- Target audience is internal (board, executives, managers, team)
- You want to preserve the honest assessment of challenges, risks, and constraints
- Stakeholders need to understand validation requirements and decision criteria

Do NOT use when:
- Target audience is external investors (use `presentation-writer` instead)
- You need a sales-focused, opportunity-framed narrative
- Strategy document is still in draft/validation phase

---

## Input Requirements

### Required Input
- Validated strategy document (output from `structure-reviewer`)
- OR paths to completed workflow outputs (01-diagnosis through 07-structure-review)

### Optional Context
- Target internal audience (Board, Leadership Team, All-Hands)
- Specific focus areas to emphasize
- Time constraints (which slides to prioritize)
- Update vs. Full Strategy presentation

---

## The Internal Deck Structure

### The 12-Slide Framework

Designed for strategic alignment, execution planning, and governance.

| # | Slide | Purpose | Time |
|---|-------|---------|------|
| 1 | Title + Crux | State the strategic challenge | 1min |
| 2 | Market Context | External forces and timing | 2min |
| 3 | Current Position | Honest capability assessment | 2min |
| 4 | The Inflection Point | Why now, the window | 2min |
| 5 | Strategic Vision | Where we're going | 1min |
| 6 | Strategic Choices | Where to play, how to win | 3min |
| 7 | Three Horizons | Stage-gated roadmap | 3min |
| 8 | Validation Framework | How we'll prove/disprove | 2min |
| 9 | Risks & Fallback | What could go wrong, pivot plan | 3min |
| 10 | Success Metrics | How we measure progress | 2min |
| 11 | Governance | Decision cadence, ownership | 1min |
| 12 | Commitment | What we're asking of stakeholders | 1min |

**Total**: ~12 slides, 20-25 minutes presentation

---

## Three-Act Narrative to Internal Deck Mapping

| Internal Slide | Strategy Source Section(s) | Preservation Notes |
|----------------|---------------------------|-------------------|
| **1. Title + Crux** | Prologue: The Crux | Keep the "uncomfortable truth" framing. State the challenge directly. |
| **2. Market Context** | Section 1.1-1.2 (Market + Regulatory) | Present data as-is with source attribution |
| **3. Current Position** | Section 2 (Our Position) | Include ALL constraints: team, capital, pipeline, capability gaps |
| **4. The Inflection Point** | Section 3 (What's at Stake) | Keep the window/timing urgency, don't soften risks |
| **5. Strategic Vision** | Section 4 (Strategic Response) | Present the vision, note it's conditional on validation |
| **6. Strategic Choices** | Section 5-6 (Choices + Value Props) | Include where NOT to play, trade-offs made |
| **7. Three Horizons** | Section 7 (Coherent Actions) | Show stage-gates, dependencies, kill criteria |
| **8. Validation Framework** | Section 8 (First Steps) | The 90-day sprint, hypotheses to test |
| **9. Risks & Fallback** | Section 10 (Risks + Fallback) | Full risk register, the retail pivot plan |
| **10. Success Metrics** | Section 9 (Metrics) | Testable hypotheses with thresholds |
| **11. Governance** | Section 11 (Governance) | Decision cadence, review gates, ownership |
| **12. Commitment** | Epilogue (Commitment) | What leadership is asking of stakeholders |

---

## Language Preservation Rules

### CRITICAL: Do NOT Transform Tone

Unlike investor presentations, internal presentations preserve honest language.

### Rule 1: Keep Conditional Language

**Preserve phrases like:**
- "if demand exists"
- "contingent on validation"
- "conditional on Q1 results"
- "subject to Board approval"
- "assuming hypothesis proves true"

**Example**:
- Strategy says: "B2B2C revenue potential of $43.5M — contingent on demand validation"
- Internal deck says: "B2B2C revenue potential of $43.5M — contingent on demand validation" ✓
- Investor deck would say: "B2B2C revenue potential of $43.5M" (without qualifier)

### Rule 2: Keep Honest Constraints

**Preserve statements like:**
- "zero pipeline beyond [X]"
- "one client is not a market — it is a pilot"
- "CCO newly hired, no prior B2B sales history"
- "engineering team of 10 faces ambitious roadmap"
- "capital uncommitted"

**Do NOT soften to:**
- "building our pipeline" (instead of "zero pipeline")
- "proven model" (instead of "single client pilot")
- "experienced leadership" (instead of "newly hired")

### Rule 3: Keep Risk Statements

**Preserve risk language:**
- "if we fail to validate..."
- "risk rating: High likelihood, High impact"
- "execution gap exists"
- "capability must be built"

**Include fallback strategies:**
- The retail pivot plan belongs in internal decks
- Decision triggers for pivoting
- What data would cause us to change direction

### Rule 4: Keep Validation Thresholds

**Be specific about success criteria:**
- "5+ qualified B2B2C prospects" (not "strong pipeline")
- "CAC payback < 6 months" (not "efficient acquisition")
- "15K Monthly Active Traders" (not "healthy engagement")

### Rule 5: Keep "Uncomfortable Truths"

The Prologue's crux statement should appear prominently:
- "Our entire B2B2C thesis rests on a single client"
- "The market licence creates permission, not demand"
- "We have zero pipeline beyond this relationship"

---

## What Internal Audiences Need

| Audience | Primary Need | Key Slides |
|----------|--------------|------------|
| **Board** | Governance, risk oversight, strategic alignment | 1, 4, 7, 9, 10, 11 |
| **Leadership Team** | Execution clarity, resource allocation | 3, 6, 7, 8, 10 |
| **Functional Leads** | Dependencies, timeline, their role | 7, 8, 10, 11 |
| **All-Hands** | Context, motivation, how they contribute | 1, 2, 5, 7, 12 |

---

## Slide-by-Slide Output Format

Output each slide in this structured markdown format:

```markdown
## Slide [N]: [Slide Name]

### Headline
[Direct statement of the point - honest, not aspirational. Max 10 words.]

### Content
[Bullet points preserving strategy language]
- Point 1 (include qualifiers, conditions)
- Point 2
- Point 3

### Supporting Data
[Specific metrics with context and caveats]
- [Metric]: [Value] — [Source/Status]

### Key Caveats
[Any conditions, validation requirements, or risks for this slide]

### Visual Suggestion
[What visual element would strengthen this slide]

### Speaker Notes
[Key talking points - what to emphasize, what questions to expect]

### Source Sections
[Which strategy doc sections this draws from]
```

---

## Slide-by-Slide Guidance

### Slide 1: Title + Crux

**Purpose**: State the strategic challenge directly. No spin.

**Must include**:
- Company name and presentation context
- The crux statement from the Prologue
- The core strategic challenge

**Preserve from strategy**:
- "The uncomfortable truth" framing
- Specific constraints mentioned
- The validation requirement

**Example headline**:
- "BTC Markets must validate B2B2C demand before capital constraints close the window"
- NOT: "BTC Markets: Capturing the digital asset opportunity"

---

### Slide 2: Market Context

**Purpose**: Ground the audience in external forces and timing.

**Must include**:
- Market size and growth (with sources)
- Regulatory timeline and implications
- Competitive landscape overview

**Preserve from strategy**:
- Data tables as-is with citations
- Regulatory deadlines (e.g., "ASIC no-action expires June 30, 2026")
- Intelligence gaps flagged ("Action Required: Gather competitive intelligence on...")

---

### Slide 3: Current Position

**Purpose**: Honest assessment of where we stand today.

**Must include**:
- Current metrics (users, revenue, AUM)
- Core differentiators
- **Organizational constraints** (this is the key difference from investor decks)

**Preserve from strategy Section 2.3**:
- "CCO newly hired. No prior B2B sales team."
- "10 engineers. Bandwidth is tight."
- "Capital... uncommitted"
- "Zero pipeline beyond SelfWealth"

**This slide should feel honest, not defensive.**

---

### Slide 4: The Inflection Point

**Purpose**: Why this moment matters. The strategic window.

**Must include**:
- The timing drivers (regulatory, market, competitive)
- The window duration and what closes it
- What happens if we miss it

**Preserve from strategy Section 3**:
- "18-24 month window"
- "First-mover advantage in licensing"
- Risks of delay

---

### Slide 5: Strategic Vision

**Purpose**: Where we're going if validation succeeds.

**Must include**:
- The aspirational end-state
- The strategic identity we're building toward
- Connection to the challenge

**Note**: This slide CAN be somewhat aspirational, but frame it:
- "If validation confirms demand, we will become..."
- "Our vision, conditional on Q1 results, is..."

---

### Slide 6: Strategic Choices

**Purpose**: Where we play, where we don't, and why.

**Must include**:
- The two strategic themes (e.g., Retail + B2B2C)
- Where NOT to play (explicit trade-offs)
- How we win in chosen arenas

**Preserve from strategy Section 5-6**:
- "We will NOT pursue [X]"
- The 7 Powers analysis (which moats we're building)
- Value propositions by segment

---

### Slide 7: Three Horizons

**Purpose**: The stage-gated roadmap with dependencies.

**Must include**:
- H1, H2, H3 initiatives
- Stage gates and decision points
- Dependencies between initiatives
- Kill criteria for each stage

**Preserve from strategy Section 7**:
- "H1 is prerequisite for H2"
- "If H1 fails to validate, H2 does not proceed"
- Specific milestone targets

---

### Slide 8: Validation Framework

**Purpose**: How we'll prove or disprove our assumptions.

**Must include**:
- The 90-day validation sprint structure
- Specific hypotheses to test
- Success/failure thresholds
- What data determines next steps

**Preserve from strategy Section 8**:
- Hypothesis 0-4 framework
- "5+ qualified prospects" threshold
- "The data will tell us which theme should lead"

**This slide is critical for internal decks — it shows intellectual honesty.**

---

### Slide 9: Risks & Fallback

**Purpose**: What could go wrong and what we do about it.

**Must include**:
- Risk register (top 5-7 risks)
- Likelihood and impact ratings
- Mitigation strategies
- **The fallback plan** (e.g., retail pivot)

**Preserve from strategy Section 10**:
- Full risk language
- "If B2B2C fails to validate, retail becomes the primary investment"
- Decision triggers for pivot

**This slide would NOT appear in an investor deck. It's essential for internal alignment.**

---

### Slide 10: Success Metrics

**Purpose**: How we measure progress and make decisions.

**Must include**:
- Leading indicators (input metrics)
- Lagging indicators (outcome metrics)
- Thresholds for success/failure
- Review cadence

**Preserve from strategy Section 9**:
- Specific numeric targets
- Testable hypotheses with thresholds
- "If [metric] < [threshold], then [action]"

---

### Slide 11: Governance

**Purpose**: Who decides what and when.

**Must include**:
- Decision rights (who owns what)
- Review cadence (weekly, monthly, quarterly)
- Escalation path
- Board reporting structure

**Preserve from strategy Section 11**:
- Meeting cadence
- Decision authority levels
- Stage-gate review process

---

### Slide 12: Commitment

**Purpose**: What we're asking of this audience.

**Must include**:
- The ask (resources, alignment, patience, support)
- What success looks like
- Timeline for key decisions
- Next steps

**Preserve from strategy Epilogue**:
- The commitment framework
- Validation scorecard (e.g., "28/35 - Conditional")
- "Ready for execution after validation sprint"

---

## Quality Criteria

### Must-Have (Slide Fails Without)

- [ ] Honest language preserved (no spin)
- [ ] Conditions and caveats included
- [ ] Source references to strategy doc
- [ ] Specific metrics with thresholds
- [ ] Risk acknowledgment appropriate

### Should-Have (Slide Weakened Without)

- [ ] Visual suggestion
- [ ] Speaker notes for sensitive topics
- [ ] Fallback/contingency mentioned where relevant
- [ ] Timeline references

### Internal-Specific Checks

- [ ] Does Slide 3 include real organizational constraints?
- [ ] Does Slide 7 show stage-gates and kill criteria?
- [ ] Does Slide 9 include the fallback strategy?
- [ ] Does Slide 8 show validation thresholds?
- [ ] Is conditional language preserved throughout?

---

## Output Template

```markdown
# Internal Strategy Presentation
## [Company Name] — [Presentation Type: Board / Leadership / All-Hands]

### Presentation Context
- **Date**: [Date]
- **Audience**: [Board / Leadership Team / All-Hands]
- **Purpose**: [Strategic alignment / Quarterly update / Kickoff]
- **Strategy Version**: [Version from strategy doc]
- **Validation Status**: [Status from Epilogue scorecard]

---

## Slide 1: The Strategic Challenge

### Headline
[The crux statement — direct, honest]

### Content
- [Core challenge]
- [Key constraint]
- [What must happen]

### Key Caveats
[Any critical conditions]

### Source Sections
Prologue: The Crux

---

## Slide 2: Market Context

### Headline
[Market/regulatory framing]

### Content
- [Market data point 1]
- [Market data point 2]
- [Regulatory timeline]

### Supporting Data
- [Metric]: [Value] — [Source]

### Source Sections
Section 1.1-1.2 (Market Context, Regulatory Environment)

---

[Continue for all 12 slides...]
```

---

## Output File Requirements

When this skill completes, write TWO files:

### 1. Notes File (`08i-presentation-writer-internal/notes.md`)

Contains:
- Input context received
- Strategy sections used
- Key content preserved (list of "uncomfortable truths" maintained)
- Any content adaptations made (for audience-specific versions)
- Questions flagged for leadership review
- Confidence levels for each slide

### 2. Output File (`08i-presentation-writer-internal/output.md`)

Contains:
- Complete slide-by-slide content using template above
- Structured for downstream consumption by `presentation-builder`
- Cross-references to source strategy sections
- All 12 slides with required fields

### 3. Update Manifest

After writing files, update `00-manifest.md` with:
- Phase: 8i
- Skill: presentation-writer-internal
- Status: Complete
- Output path: `08i-presentation-writer-internal/output.md`
- Notes path: `08i-presentation-writer-internal/notes.md`
- Timestamp
- Key outputs summary

---

## Workflow Position

```
structure-reviewer (Phase 7)
         │
         ├──► presentation-writer (Phase 8)          ← External/Investor
         │
         └──► presentation-writer-internal (Phase 8i) ◄── YOU ARE HERE
                      │
                      ▼
              presentation-builder (Phase 9)
                      │
                      ▼
              Internal Deck (HTML + PPTX)
```

This skill chains FROM `structure-reviewer` and chains TO `presentation-builder`.

The `presentation-builder` skill can process both investor and internal presentation content — it uses the same structured slide format.
