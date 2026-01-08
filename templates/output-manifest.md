# Strategy Workflow Manifest

This file tracks all outputs from a strategy development workflow. It is automatically maintained by the Strategy Partner agent and its skills.

---

## Meta

- **Started**: [TIMESTAMP]
- **Last Updated**: [TIMESTAMP]
- **Organization**: [ORGANIZATION_NAME]
- **Project**: [PROJECT_NAME]
- **Current Phase**: [PHASE_NUMBER] - [PHASE_NAME]

---

## Workflow Status

| Status | Meaning |
|--------|---------|
| Pending | Not yet started |
| In Progress | Currently being worked on |
| Complete | Finished successfully |
| Blocked | Waiting on user input or decision |
| Skipped | Intentionally not executed |

---

## Outputs

| Phase | Skill | Status | Output Path | Notes Path | Completed |
|-------|-------|--------|-------------|------------|-----------|
| 0 | Context Intake | Pending | - | - | - |
| 1 | strategy-diagnosis | Pending | 01-diagnosis/output.md | 01-diagnosis/notes.md | - |
| 2 | stakeholder-mapping | Pending | 02-stakeholder-mapping/output.md | 02-stakeholder-mapping/notes.md | - |
| 3 | competitive-analysis | Pending | 03-competitive-analysis/output.md | 03-competitive-analysis/notes.md | - |
| 4 | horizon-planning | Pending | 04-horizon-planning/output.md | 04-horizon-planning/notes.md | - |
| 5 | market-research | Pending | 05-market-research/output.md | 05-market-research/notes.md | - |
| 6 | strategy-validation | Pending | 06-strategy-validation/output.md | 06-strategy-validation/notes.md | - |
| 7 | structure-review | Pending | 07-structure-review/output.md | 07-structure-review/notes.md | - |
| 8 | presentation-writer | Pending | 08-presentation-writer/output.md | 08-presentation-writer/notes.md | - |
| 8i | presentation-writer-internal | Pending | 08i-presentation-writer-internal/output.md | 08i-presentation-writer-internal/notes.md | - |
| 9 | presentation-builder | Pending | 09-presentation-builder/output.md | 09-presentation-builder/notes.md | - |
| Final | Document Assembly | Pending | final/strategy-document.md | - | - |

---

## User Checkpoints

Record user validations and decisions at key points.

| Checkpoint | Question | User Response | Timestamp |
|------------|----------|---------------|-----------|
| Crux Validation | Is this the right crux? | - | - |
| Strategic Choices | Do these choices reflect priorities? | - | - |
| First Steps | Are these the right immediate actions? | - | - |
| Final Approval | Is the strategy ready? | - | - |

---

## Skill Chaining Log

Record how outputs from one skill feed into the next.

| From Skill | To Skill | Data Passed | Notes |
|------------|----------|-------------|-------|
| - | - | - | - |

---

## Document Versions

Track versions of the strategy document as it evolves.

| Version | Timestamp | Description | Path |
|---------|-----------|-------------|------|
| - | - | - | - |

---

## Issues and Blockers

Track any issues encountered during the workflow.

| Issue | Phase | Status | Resolution |
|-------|-------|--------|------------|
| - | - | - | - |

---

## Instructions for Use

### At Workflow Start
1. Copy this template to `output/strategy-workflow/00-manifest.md`
2. Fill in Meta section with project details
3. Update Started timestamp

### After Each Skill Execution
1. Update the skill's Status in the Outputs table
2. Update the Completed timestamp
3. Add any Skill Chaining entries
4. Record any User Checkpoints
5. Update Last Updated timestamp

### At Workflow End
1. Mark Final phase as Complete
2. Record Final Approval checkpoint
3. Add final Document Version entry

---

*This manifest was initialized from the Strategy Partner plugin template.*
