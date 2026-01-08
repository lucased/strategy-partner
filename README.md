# Strategy Partner Plugin

A Claude Code plugin for rigorous business strategy development. Integrates four proven frameworks into a structured discovery process.

## Frameworks

- **Good Strategy/Bad Strategy (Rumelt)**: Diagnosis → Guiding Policy → Coherent Actions
- **Playing to Win (Lafley & Martin)**: Where to Play / How to Win cascade
- **Three Horizons (McKinsey)**: H1/H2/H3 strategic roadmapping
- **7 Powers (Helmer)**: Sustainable competitive advantage analysis

## Installation

### Via Marketplace (Recommended)

1. Add the marketplace:
   ```
   /plugin marketplace add <github-username>/strategy-partner
   ```

2. Install the plugin:
   ```
   /plugin install strategy-partner@strategy-partner
   ```

3. Verify installation:
   ```
   /help
   ```
   You should see `/strategy-partner:strategy` in the available commands.

### Update to Latest Version

```
/plugin marketplace update
/plugin update strategy-partner
```

### Development Testing

```bash
claude --plugin-dir ./strategy-partner
```

### Local Project Installation (Without Marketplace)

If you want to use the plugin on a specific project without installing via marketplace:

1. Clone the repository into your project or a shared location:
   ```bash
   git clone https://github.com/<github-username>/strategy-partner.git
   ```

2. When starting Claude Code, pass the plugin directory:
   ```bash
   claude --plugin-dir /path/to/strategy-partner
   ```

   Or for a project-specific setup, add to your shell profile or project scripts:
   ```bash
   alias claude-strategy='claude --plugin-dir /path/to/strategy-partner'
   ```

3. For multiple working directories, you can also specify them explicitly:
   ```bash
   claude --plugin-dir /path/to/strategy-partner --cwd /path/to/your/project
   ```

4. Copy the template to your project:
   ```bash
   cp /path/to/strategy-partner/templates/CLAUDE.md.template your-project/CLAUDE.md
   ```

## Usage

### Start a Strategy Session

Use the slash command:

```
/strategy-partner:strategy Help me develop a growth strategy for 2026
```

Or simply describe your challenge and invoke the strategy-partner agent.

### The Discovery Process

The Strategy Partner guides you through phases:

| Phase | Purpose | Output |
|-------|---------|--------|
| **Phase 0** | Context intake | 10-bullet understanding |
| **Phase 1A** | Diagnosis | "The Crux" statement |
| **Phase 1B** | Stakeholders | Power/incentive map |
| **Phase 1C** | Choices | Where to Play / How to Win |
| **Phase 1D** | Horizons | H1/H2/H3 roadmap |
| **Phase 2** | Research | TAM/SAM/SOM, competitive intel |
| **Phase 3** | Document | Strategy document (on request) |

Each phase includes checkpoints where you validate insights before proceeding.

## Skills Included

| Skill | Use When |
|-------|----------|
| `strategy-diagnosis` | Analyzing problems, finding root causes, identifying "the crux" |
| `competitive-analysis` | Assessing competitive position, 7 Powers, sustainable advantages |
| `stakeholder-mapping` | Understanding organizational reality, politics, capability |
| `horizon-planning` | Creating roadmaps, sequencing initiatives, resource allocation |
| `market-research` | Sizing markets (TAM/SAM/SOM), competitive intelligence |
| `strategy-validation` | Testing strategy quality, identifying weak points |

## Plugin Structure

```
strategy-partner/
├── .claude-plugin/
│   ├── plugin.json           # Plugin manifest
│   └── marketplace.json      # Marketplace definition
├── agents/
│   └── strategy-partner.md   # Main strategy agent
├── skills/
│   ├── strategy-diagnosis/
│   ├── competitive-analysis/
│   ├── stakeholder-mapping/
│   ├── horizon-planning/
│   ├── market-research/
│   └── strategy-validation/
├── commands/
│   └── strategy.md           # /strategy-partner:strategy command
├── lib/
│   ├── docx-helpers.js       # Word document generation (optional)
│   └── package.json
├── templates/
│   └── CLAUDE.md.template    # Template for new projects
└── README.md
```

## Document Generation (Optional)

The plugin includes utilities for generating professional Word documents.

### Setup

```bash
cd lib && npm install
```

### Usage

```javascript
const { h1, h2, para, bullet, createTable,
        createStrategyDocument, saveDocument } = require('./lib/docx-helpers');

const content = [
  h1("Executive Summary"),
  para("Summary text..."),
  h2("Strategic Priorities"),
  bullet("Priority 1"),
  bullet("Priority 2"),
];

const doc = createStrategyDocument(
  "Company Strategy 2026",
  "Version 1.0 | January 2026",
  content
);

saveDocument(doc, "strategy-2026.docx");
```

## Project Setup Template

When starting a new strategy project, create this structure:

```
your-project/
├── strategy/
│   ├── plans/                # Engagement tracking
│   ├── notes/                # Working notes
│   ├── research/             # Market research
│   └── output/               # Final documents
├── reference_files/          # Reference inputs (read-only)
│   ├── Strategy/             # Source strategy documents
│   ├── Research/             # Market research data
│   └── Notes/                # General notes and ideas
└── CLAUDE.md                 # Copy from templates/
```

See `templates/CLAUDE.md.template` for a complete project template.

## Key Principles

1. **Discovery before prescription** - Thorough diagnosis before solutions
2. **Interactive validation** - Each phase requires user confirmation
3. **Explicit choices** - Strategy means saying NO to attractive options
4. **Data-driven** - Ground claims in research, not assumptions
5. **Falsifiable hypotheses** - Define what would prove you wrong

## License

MIT
