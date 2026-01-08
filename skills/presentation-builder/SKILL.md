---
name: presentation-builder
description: Build visual presentations from structured slide content. Use when you have slide-by-slide markdown from presentation-writer and need to generate HTML preview and PowerPoint export. Creates Tailwind-based HTML slides with navigation and exports to PPTX format using theme configuration.
---

# Presentation Builder Skill

## Purpose

Transform structured slide markdown into visual presentation assets. This skill takes the output from `presentation-writer` and produces:

1. **HTML Presentation**: Tailwind-based, browser-viewable slides with navigation
2. **PowerPoint Export**: Professional PPTX file for investor meetings

The HTML-first approach enables rapid iteration and preview before finalizing PPTX.

---

## When to Use

Use this skill when:
- You have completed slide content from `presentation-writer`
- You need viewable HTML slides for review/iteration
- You need a PPTX file for investor meetings
- You want to apply custom branding via theme.json

Do NOT use when:
- Slide content is not yet written (use `presentation-writer` first)
- You need to modify slide content (go back to `presentation-writer`)
- Target is internal documentation (use docx-helpers instead)

---

## Input Requirements

### Required Input
- Slide content markdown from `presentation-writer` (`08-presentation-writer/output.md`)
- OR slide content in the structured format defined below

### Required Configuration
- `theme.json` file with branding configuration (use `templates/theme.json` as starting point)

### Optional Input
- Logo image file (path specified in theme.json)
- Custom fonts (Google Fonts names)
- Background images for specific slides

---

## Theme Configuration

The builder reads theme settings from a `theme.json` file. See `templates/theme.json` for the complete schema.

### Key Theme Properties

```json
{
  "colors": {
    "primary": "#1a365d",
    "secondary": "#2c5282",
    "accent": "#ed8936",
    "text": { "primary": "#1a202c", "secondary": "#4a5568", "inverse": "#ffffff" },
    "background": { "default": "#ffffff", "alt": "#f7fafc", "dark": "#1a365d" }
  },
  "typography": {
    "headingFont": "Inter",
    "bodyFont": "Inter",
    "headingSizes": { "h1": "48px", "h2": "36px", "h3": "24px" }
  },
  "branding": {
    "logo": { "path": "./assets/logo.png", "width": "120px" },
    "companyName": "Company Name"
  },
  "slides": {
    "aspectRatio": "16:9",
    "padding": "60px"
  }
}
```

---

## Expected Input Format

Each slide should be in structured markdown:

```markdown
## Slide [N]: [Slide Name]

### Headline
[Single compelling statement]

### Content
- Bullet point 1
- Bullet point 2
- Bullet point 3

### Supporting Data
- Metric 1: Value
- Metric 2: Value

### Visual Suggestion
[Description of visual element]

### Speaker Notes
[Presenter talking points]
```

---

## Slide Types & Layouts

The builder automatically detects slide type and applies appropriate layout:

| Slide Type | Detection | Layout |
|------------|-----------|--------|
| **Title** | Slide 1 | Centered, dark background, logo |
| **Content** | Default | Left-aligned headline, bullet content |
| **Metrics** | Title contains "traction", "metrics", "financials" + has 3+ data points | Grid of stat boxes |
| **Comparison** | Title contains "competition", "competitive" | 2x2 matrix with positioning |
| **Team** | Title contains "team" | Photo/avatar grid |
| **Closing** | Last slide or title contains "vision", "close" | Centered, dark background |

---

## HTML Generation

### Architecture

Generate a single self-contained HTML file with:
- Embedded Tailwind CSS (via CDN)
- Theme customization via Tailwind config
- Navigation JavaScript (prev/next, keyboard)
- Print-friendly styles for PDF export

### HTML Features

1. **Navigation Bar**
   - Previous/Next buttons
   - Slide counter (1 / 12)
   - Fullscreen toggle
   - Thumbnail overview

2. **Keyboard Navigation**
   - Arrow keys (← →) for navigation
   - Space bar for next slide
   - Escape to exit fullscreen/modals

3. **Responsive Design**
   - 16:9 aspect ratio maintained
   - Scales to fit viewport
   - Mobile-friendly controls

4. **Print/PDF Export**
   - Page break between slides
   - Navigation hidden when printing
   - Clean output for PDF generation

### HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Company] Investor Deck</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '[from theme.json]',
            secondary: '[from theme.json]',
            accent: '[from theme.json]'
          },
          fontFamily: {
            heading: ['[headingFont]', 'sans-serif'],
            body: ['[bodyFont]', 'sans-serif']
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=[Font]&display=swap');
    .slide { aspect-ratio: 16 / 9; }
    @media print {
      .slide { page-break-after: always; }
      .navigation { display: none; }
    }
  </style>
</head>
<body class="bg-gray-100">
  <!-- Navigation -->
  <nav class="fixed top-0 ... navigation">...</nav>

  <!-- Slides -->
  <main id="slides" class="pt-20 px-4">
    <section class="slide ..." data-slide="1">...</section>
    <section class="slide ..." data-slide="2">...</section>
    <!-- ... -->
  </main>

  <!-- Thumbnail Modal -->
  <div id="thumbnailModal" class="hidden ...">...</div>

  <script>
    // Navigation logic
    let currentSlide = 1;
    const totalSlides = 12;
    // ...
  </script>
</body>
</html>
```

---

## PowerPoint Generation

### Using pptx-helpers.js

The builder uses `lib/pptx-helpers.js` for PowerPoint generation:

```javascript
const { generatePPTX, parseSlideMarkdown, loadTheme } = require('./lib/pptx-helpers');

// Load slide content
const markdown = fs.readFileSync('08-presentation-writer/output.md', 'utf8');
const slides = parseSlideMarkdown(markdown);

// Load theme
const theme = loadTheme('templates/theme.json');

// Generate PPTX
await generatePPTX(slides, theme, '09-presentation-builder/deck.pptx');
```

### PPTX Features

- Master slide with consistent branding
- Automatic slide type detection
- Logo placement (if provided)
- Page numbers
- Theme colors and fonts applied
- Editable output (not locked)

---

## Build Process

### Step 1: Validate Inputs

```
1. Check 08-presentation-writer/output.md exists
2. Check theme.json exists and is valid JSON
3. Validate logo path if specified
4. Confirm all slides have required fields (headline, content)
```

### Step 2: Parse Slide Content

```
1. Read markdown from presentation-writer output
2. Parse into structured slide objects
3. Detect slide types based on titles
4. Validate 12 slides present
```

### Step 3: Generate HTML

```
1. Load theme.json configuration
2. Generate Tailwind config from theme colors
3. Build slide HTML for each slide type
4. Assemble navigation and JavaScript
5. Write to 09-presentation-builder/deck.html
```

### Step 4: Generate PPTX

```
1. Call generatePPTX from pptx-helpers.js
2. Pass slides array and theme config
3. Output to 09-presentation-builder/deck.pptx
```

### Step 5: Update Manifest

```
1. Mark Phase 9 complete
2. Record output paths (deck.html, deck.pptx)
3. Log any issues encountered
```

---

## Slide Type Templates

### Title Slide (Slide 1)

```html
<section class="slide bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center text-white">
  <img src="[logo]" class="w-32 mb-8" alt="Logo">
  <h1 class="text-5xl font-heading font-bold mb-4">[Headline]</h1>
  <p class="text-xl opacity-90">[Tagline]</p>
</section>
```

### Content Slide

```html
<section class="slide bg-white p-16">
  <h2 class="text-4xl font-heading font-bold text-primary mb-8">[Headline]</h2>
  <ul class="space-y-4 text-lg">
    <li class="flex items-start">
      <span class="text-accent mr-3">•</span>
      <span>[Content item]</span>
    </li>
    <!-- ... -->
  </ul>
  <div class="absolute bottom-8 right-8 text-sm text-gray-400">[N] / 12</div>
</section>
```

### Metrics Slide

```html
<section class="slide bg-white p-16">
  <h2 class="text-4xl font-heading font-bold text-primary mb-8">[Headline]</h2>
  <div class="grid grid-cols-2 gap-6">
    <div class="bg-gray-50 rounded-lg p-6 text-center">
      <div class="text-4xl font-bold text-primary">[Value]</div>
      <div class="text-sm text-gray-500 mt-2">[Label]</div>
    </div>
    <!-- ... -->
  </div>
</section>
```

### Competition/Matrix Slide

```html
<section class="slide bg-white p-16">
  <h2 class="text-4xl font-heading font-bold text-primary mb-8">[Headline]</h2>
  <div class="relative w-full h-64">
    <!-- Axes -->
    <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
    <!-- "You" marker -->
    <div class="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
      You
    </div>
  </div>
  <ul class="mt-4 text-sm"><!-- Differentiators --></ul>
</section>
```

### Team Slide

```html
<section class="slide bg-white p-16">
  <h2 class="text-4xl font-heading font-bold text-primary mb-8">[Headline]</h2>
  <div class="grid grid-cols-4 gap-8">
    <div class="text-center">
      <div class="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
      <div class="font-bold">[Name]</div>
      <div class="text-sm text-gray-500">[Title]</div>
    </div>
    <!-- ... -->
  </div>
</section>
```

### Closing Slide

```html
<section class="slide bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center text-white">
  <h1 class="text-5xl font-heading font-bold mb-6">[Vision Headline]</h1>
  <p class="text-xl opacity-90 max-w-2xl text-center">[Supporting content]</p>
  <div class="mt-12 text-lg">[Company Name]</div>
</section>
```

---

## Quality Criteria

### HTML Output

- [ ] All 12 slides render correctly
- [ ] Navigation works (arrows, keyboard)
- [ ] Fullscreen mode functions
- [ ] Print/PDF maintains formatting
- [ ] Theme colors apply consistently
- [ ] Fonts load correctly
- [ ] Logo displays correctly
- [ ] Mobile-responsive for preview

### PPTX Output

- [ ] Opens in PowerPoint without errors
- [ ] Fonts render correctly (or fallback gracefully)
- [ ] Logo appears on slides
- [ ] Color scheme matches theme
- [ ] Slide numbers present
- [ ] Editable by user (not locked)
- [ ] File size reasonable (<10MB without images)

---

## Output File Requirements

When this skill completes, write the following files:

### 1. Notes File

**Path**: `[output-dir]/09-presentation-builder/notes.md`

Contains:
- Input context (slide content path, theme path)
- Build decisions and customizations
- Issues encountered and resolutions
- Asset paths used

### 2. Output Summary File

**Path**: `[output-dir]/09-presentation-builder/output.md`

Contains:
- Build summary
- Output file paths
- Instructions for viewing/editing
- Known limitations

### 3. HTML Presentation

**Path**: `[output-dir]/09-presentation-builder/deck.html`

Contains:
- Complete self-contained HTML presentation
- Embedded Tailwind CSS
- Navigation JavaScript

### 4. PowerPoint Presentation

**Path**: `[output-dir]/09-presentation-builder/deck.pptx`

Contains:
- Complete PPTX file
- All slides with content
- Theme applied

### 5. Theme Copy

**Path**: `[output-dir]/09-presentation-builder/theme.json`

Contains:
- Copy of theme configuration used
- For reference and future edits

### 6. Update Manifest

After writing files, update `00-manifest.md` with:
- Phase: 9
- Skill: presentation-builder
- Status: Complete
- Output paths for all generated files
- Notes path
- Timestamp

---

## Example Output Summary

```markdown
# Presentation Build Summary

## Build Info
- **Date**: 2026-01-08
- **Input**: 08-presentation-writer/output.md
- **Theme**: templates/theme.json

## Generated Files

| File | Size | Description |
|------|------|-------------|
| deck.html | 45KB | Browser presentation with navigation |
| deck.pptx | 2.1MB | PowerPoint file |
| theme.json | 2KB | Theme configuration copy |

## Viewing Instructions

### HTML Presentation
1. Open `deck.html` in any modern browser
2. Use arrow keys or buttons to navigate
3. Press F for fullscreen
4. Print to PDF using browser print (Cmd+P)

### PowerPoint
1. Open `deck.pptx` in Microsoft PowerPoint or Google Slides
2. Edit text, add images as needed
3. Use Slide Show mode for presenting

## Known Limitations
- Logo placeholder used (add real logo to assets/)
- Team photos are placeholder circles
- Charts referenced in notes need manual creation
```

---

## Workflow Position

```
structure-reviewer (Phase 7)
         │
         ▼
presentation-writer (Phase 8)
         │
         ▼
presentation-builder (Phase 9) ◄── YOU ARE HERE
         │
         ├──► deck.html (Preview/Iterate)
         │
         └──► deck.pptx (Final Delivery)
```

This skill chains FROM `presentation-writer` and produces final deliverables.

---

## Troubleshooting

### Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Slides missing | Parsing failed | Check markdown format matches expected structure |
| Wrong layout | Type detection failed | Ensure slide titles include keywords (team, competition, etc.) |
| Fonts not loading | Google Fonts blocked | Use system fonts as fallback |
| PPTX won't open | Corrupted generation | Check pptxgenjs version, regenerate |
| Colors wrong | Theme not loaded | Verify theme.json path and JSON validity |
| Logo missing | Path incorrect | Check logo path relative to theme.json location |

### Debugging

1. Check `notes.md` for build decisions and errors
2. Verify input markdown structure
3. Test theme.json with JSON validator
4. Open HTML in browser dev tools to inspect styles
