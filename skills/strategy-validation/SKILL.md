---
name: strategy-validation
description: Strategy quality assessment and hypothesis validation methodology. Use when evaluating whether a strategy is well-formed, testing strategy quality, identifying weak points, checking falsifiability of strategic assumptions, or improving draft strategies. Essential final check before strategy approval.
---

# Strategy Validation Skill

## Purpose

Most strategies fail not because of bad ideas, but because they're poorly constructed: vague, unfalsifiable, internally inconsistent, or disconnected from execution reality. This skill provides rigorous quality tests to catch these problems before they cause expensive failures.

## The Seven Quality Tests

Every strategy should pass ALL seven tests. Failure on any test indicates a serious problem.

---

### Test 1: Clarity Test
**Question**: Can a new hire understand the core strategic choice?

**Criteria**:
- Strategy can be explained in 2 minutes
- No jargon or buzzwords required
- Clear cause-and-effect logic
- Specific enough to guide daily decisions

**Red flags**:
❌ "Leverage synergies to drive stakeholder value"
❌ Requires insider knowledge to decode
❌ Different people interpret it differently
❌ Can't be drawn as a simple diagram

**Validation exercise**:
Have someone unfamiliar with the context read the strategy. Can they explain back:
1. What problem we're solving?
2. What we're choosing to do?
3. Why this will work?

---

### Test 2: Choicefulness Test
**Question**: Does the strategy explicitly say what we will NOT do?

**Criteria**:
- Clear "where we won't play" statements
- Explicit trade-offs acknowledged
- Resources NOT allocated to something attractive
- Prioritization is evident

**Red flags**:
❌ "We'll be best-in-class at everything"
❌ No difficult trade-offs visible
❌ Adds up to more than 100% of capacity
❌ Makes everyone happy

**Validation exercise**:
List 5 attractive opportunities the strategy explicitly rejects. If you can't, the strategy isn't making real choices.

---

### Test 3: Coherence Test
**Question**: Do all pieces of the strategy reinforce each other?

**Criteria**:
- Diagnosis leads logically to guiding policy
- Actions flow from guiding policy
- Resource allocation matches stated priorities
- No internal contradictions

**Red flags**:
❌ "Cost leader" + "premium service" without explanation
❌ Actions don't address the diagnosed problem
❌ Resource allocation doesn't match priorities
❌ Org chart contradicts strategic intent

**Validation exercise**:
For each strategic action, trace it back to the diagnosis. Does A solve B? Does the logic hold?

---

### Test 4: Feasibility Test
**Question**: Can we actually execute this given real constraints?

**Criteria**:
- Resources required are quantified and available
- Timeline is realistic given past performance
- Capabilities required exist or can be built
- Dependencies are identified and manageable

**Red flags**:
❌ Assumes instant capability building
❌ Ignores organizational change capacity
❌ Budget math doesn't work
❌ Timeline based on hope, not precedent

**Validation exercise**:
For each major capability required, identify:
- Current state (honest assessment)
- Time to build (based on similar past efforts)
- Resources needed
- Who will lead the capability build

---

### Test 5: Commitment Test
**Question**: Does this lock us into decisions that are hard to reverse?

**Criteria**:
- Strategy involves real commitments
- Some decisions are deliberately irreversible
- Resources are actually allocated
- Incentives are changed to match

**Red flags**:
❌ Everything is hedged and reversible
❌ "We'll see how it goes" language
❌ No resource reallocation from status quo
❌ Incentive systems unchanged

**Validation exercise**:
List what you're committing to that would be costly to undo. If the list is empty, you haven't made strategic commitments—you've written a wish list.

---

### Test 6: Disagreeability Test
**Question**: Would a smart, informed competitor disagree with our diagnosis?

**Criteria**:
- Strategy is based on a distinctive point of view
- Not just obvious "best practices"
- Competitors could reasonably reach different conclusions
- Our unique insights are evident

**Red flags**:
❌ "Customers want quality and low prices"
❌ Would be equally true for any competitor
❌ No distinctive diagnosis or insight
❌ Generic industry trends, not specific beliefs

**Validation exercise**:
Write out your core strategic belief. Now argue against it as a competitor would. If you can't mount a reasonable counter-argument, your belief is too obvious to be strategic.

---

### Test 7: Falsifiability Test
**Question**: What evidence would prove this strategy wrong?

**Criteria**:
- Key assumptions are explicit and testable
- Leading indicators are defined
- Thresholds for "strategy is working" vs. "strategy is failing" are clear
- Timeline for validation is specified

**Red flags**:
❌ No metrics tied to strategic hypotheses
❌ "We'll know success when we see it"
❌ All metrics are lagging indicators
❌ No kill criteria or pivot triggers

**Validation exercise**:
Complete this for each strategic assumption:
> "We believe [assumption]. We will know this is wrong if [specific metric] is [threshold] by [date]."

---

## Falsifiable Hypothesis Structure

Every strategic assumption should be structured as:

```
HYPOTHESIS: [What we believe]
CONFIDENCE: [High/Medium/Low]

IF TRUE:
- We should see: [Leading indicator]
- By: [Date]
- Threshold: [Specific value]

IF FALSE:
- We should see: [Counter-indicator]
- By: [Date]
- Threshold: [Specific value]

RESPONSE IF FALSE:
- Pivot to: [Alternative]
- Kill if: [Condition]
```

### Example Falsifiable Hypothesis

```
HYPOTHESIS: Enterprise customers will pay 3x for compliance features
CONFIDENCE: Medium

IF TRUE:
- We should see: 20% of trials convert asking about compliance
- By: Q2 2024
- Threshold: >20% conversion rate

IF FALSE:
- We should see: <10% trial conversion
- By: Q2 2024
- Threshold: <10%

RESPONSE IF FALSE:
- Pivot to: SMB-focused, compliance-light product
- Kill if: <5% by Q3 2024
```

---

## Strategy Scorecard

Use this scorecard to grade a strategy:

| Test | Score (1-5) | Evidence | Issues |
|------|-------------|----------|--------|
| Clarity | | | |
| Choicefulness | | | |
| Coherence | | | |
| Feasibility | | | |
| Commitment | | | |
| Disagreeability | | | |
| Falsifiability | | | |
| **Total** | **/35** | | |

**Interpretation**:
- **30-35**: Strong strategy, ready for execution
- **25-29**: Good foundation, specific improvements needed
- **20-24**: Significant gaps, major revision required
- **<20**: Fundamental rethink needed

---

## Common Strategy Smells

These patterns often indicate underlying problems:

### "The Everything Strategy"
- Tries to do too much
- No clear priorities
- Resources spread thin
- **Fix**: Force rank and cut

### "The Buzzword Strategy"
- Heavy on jargon, light on specifics
- "Digital transformation" without concrete actions
- **Fix**: Translate every buzzword into specific, measurable actions

### "The Consensus Strategy"
- Offends no one
- Makes no hard choices
- Everyone's pet project included
- **Fix**: Surface the trade-offs explicitly

### "The Aspirational Strategy"
- Goals without a plan
- "Be #1" without how
- Wishes masquerading as strategy
- **Fix**: Add the "how" and "why it will work"

### "The Immortal Strategy"
- No learning loops
- No triggers for change
- Assumes the world is static
- **Fix**: Add falsifiability and review cadence

---

## Validation Output Template

```markdown
## Strategy Validation Report

### Summary
| Test | Score | Status |
|------|-------|--------|
| Clarity | [1-5] | [Pass/Fail] |
| Choicefulness | [1-5] | [Pass/Fail] |
| Coherence | [1-5] | [Pass/Fail] |
| Feasibility | [1-5] | [Pass/Fail] |
| Commitment | [1-5] | [Pass/Fail] |
| Disagreeability | [1-5] | [Pass/Fail] |
| Falsifiability | [1-5] | [Pass/Fail] |
| **Overall** | **[X]/35** | **[Ready/Needs Work/Major Revision]** |

### Critical Issues
1. [Issue]: [Why it matters] → [Recommended fix]
2. [Issue]: [Why it matters] → [Recommended fix]

### Key Hypotheses to Track
| Hypothesis | Leading Indicator | Threshold | Date | Response if False |
|------------|-------------------|-----------|------|-------------------|
| [H1] | [Metric] | [Value] | [Date] | [Action] |
| [H2] | [Metric] | [Value] | [Date] | [Action] |

### Recommendations
1. **Must fix before proceeding**: [List]
2. **Should improve**: [List]
3. **Could enhance**: [List]

### Validation Cadence
- Leading indicator review: [Frequency]
- Full strategy review: [Frequency]
- Major pivot decision point: [Date/Trigger]
```
