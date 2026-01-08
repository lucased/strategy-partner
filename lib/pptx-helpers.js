// lib/pptx-helpers.js
// Reusable helper functions for generating PowerPoint presentations with consistent styling

const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// ========== DEFAULT THEME ==========
const DEFAULT_THEME = {
  colors: {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "ed8936",
    text: { primary: "1a202c", secondary: "4a5568", inverse: "ffffff" },
    background: { default: "ffffff", alt: "f7fafc", dark: "1a365d" }
  },
  typography: {
    headingFont: "Arial",
    bodyFont: "Arial",
    headingSizes: { h1: 44, h2: 32, h3: 24 },
    bodySize: 18
  },
  branding: {
    companyName: "Company",
    logo: null
  }
};

// ========== THEME UTILITIES ==========

/**
 * Load and validate theme from JSON file
 */
const loadTheme = (themePath) => {
  try {
    const themeJson = fs.readFileSync(themePath, 'utf8');
    const theme = JSON.parse(themeJson);
    return mergeTheme(DEFAULT_THEME, theme);
  } catch (err) {
    console.warn(`Could not load theme from ${themePath}, using defaults:`, err.message);
    return DEFAULT_THEME;
  }
};

/**
 * Deep merge custom theme with defaults
 */
const mergeTheme = (defaults, custom) => {
  const result = { ...defaults };
  for (const key of Object.keys(custom)) {
    if (custom[key] && typeof custom[key] === 'object' && !Array.isArray(custom[key])) {
      result[key] = mergeTheme(defaults[key] || {}, custom[key]);
    } else {
      result[key] = custom[key];
    }
  }
  return result;
};

/**
 * Parse color - handle both "#hex" and "hex" formats
 */
const parseColor = (color) => {
  if (!color) return null;
  return color.replace('#', '');
};

// ========== SLIDE CREATORS ==========

/**
 * Create title slide (Slide 1 or section breaks)
 */
const createTitleSlide = (pptx, slide, theme) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Dark gradient background for title slides
  s.background = { color: parseColor(theme.colors.primary) };

  // Add logo if available
  if (theme.branding?.logo?.path && fs.existsSync(theme.branding.logo.path)) {
    s.addImage({
      path: theme.branding.logo.path,
      x: 8.5, y: 0.3, w: 1.2, h: 0.6
    });
  }

  // Main headline - centered
  s.addText(slide.headline || slide.title || '', {
    x: 0.5, y: 2.0, w: 9, h: 1.2,
    fontSize: theme.typography.headingSizes.h1,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.text.inverse),
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Tagline/subtitle
  if (slide.content && slide.content.length > 0) {
    s.addText(slide.content[0], {
      x: 0.5, y: 3.3, w: 9, h: 0.6,
      fontSize: theme.typography.bodySize + 4,
      fontFace: theme.typography.bodyFont,
      color: parseColor(theme.colors.text.inverse),
      align: 'center',
      valign: 'middle'
    });
  }

  // Company name at bottom
  s.addText(theme.branding.companyName, {
    x: 0.5, y: 4.8, w: 9, h: 0.4,
    fontSize: 14,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.inverse),
    align: 'center'
  });

  return s;
};

/**
 * Create standard content slide with bullets
 */
const createContentSlide = (pptx, slide, theme, slideNum, totalSlides) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Headline
  s.addText(slide.headline || slide.title || '', {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: theme.typography.headingSizes.h2,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.primary),
    bold: true,
    valign: 'middle'
  });

  // Content bullets
  if (slide.content && slide.content.length > 0) {
    const bullets = slide.content.map(item => ({
      text: item,
      options: {
        fontSize: theme.typography.bodySize,
        fontFace: theme.typography.bodyFont,
        color: parseColor(theme.colors.text.primary),
        bullet: { type: 'bullet', color: parseColor(theme.colors.accent) },
        indentLevel: 0,
        paraSpaceAfter: 12
      }
    }));

    s.addText(bullets, {
      x: 0.5, y: 1.4, w: 9, h: 3.2,
      valign: 'top'
    });
  }

  // Supporting data if present
  if (slide.supporting_data && slide.supporting_data.length > 0) {
    const dataText = slide.supporting_data.join(' | ');
    s.addText(dataText, {
      x: 0.5, y: 4.7, w: 9, h: 0.4,
      fontSize: 14,
      fontFace: theme.typography.bodyFont,
      color: parseColor(theme.colors.text.secondary),
      italic: true
    });
  }

  // Page number
  s.addText(`${slideNum} / ${totalSlides}`, {
    x: 9, y: 5.1, w: 0.8, h: 0.3,
    fontSize: 10,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.secondary),
    align: 'right'
  });

  return s;
};

/**
 * Create metrics/stats slide with grid of numbers
 */
const createMetricsSlide = (pptx, slide, theme, slideNum, totalSlides) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Headline
  s.addText(slide.headline || slide.title || '', {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: theme.typography.headingSizes.h2,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.primary),
    bold: true
  });

  // Parse metrics from supporting_data
  const metrics = slide.supporting_data || [];
  const gridCols = metrics.length <= 4 ? 2 : 3;
  const gridRows = Math.ceil(metrics.length / gridCols);

  const cellWidth = 4.2;
  const cellHeight = 1.4;
  const startX = 0.5 + (9 - gridCols * cellWidth) / 2;
  const startY = 1.6;

  metrics.forEach((metric, idx) => {
    const col = idx % gridCols;
    const row = Math.floor(idx / gridCols);
    const x = startX + col * cellWidth;
    const y = startY + row * cellHeight;

    // Parse "Metric: Value" format
    const parts = metric.split(':');
    const label = parts[0]?.trim() || '';
    const value = parts[1]?.trim() || metric;

    // Metric box background
    s.addShape('rect', {
      x, y, w: cellWidth - 0.2, h: cellHeight - 0.2,
      fill: { color: parseColor(theme.colors.background.alt) },
      line: { color: parseColor(theme.colors.background.alt), width: 0 }
    });

    // Value (large)
    s.addText(value, {
      x, y: y + 0.1, w: cellWidth - 0.2, h: 0.8,
      fontSize: 36,
      fontFace: theme.typography.headingFont,
      color: parseColor(theme.colors.primary),
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // Label (small)
    s.addText(label, {
      x, y: y + 0.9, w: cellWidth - 0.2, h: 0.3,
      fontSize: 12,
      fontFace: theme.typography.bodyFont,
      color: parseColor(theme.colors.text.secondary),
      align: 'center'
    });
  });

  // Page number
  s.addText(`${slideNum} / ${totalSlides}`, {
    x: 9, y: 5.1, w: 0.8, h: 0.3,
    fontSize: 10,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.secondary),
    align: 'right'
  });

  return s;
};

/**
 * Create 2x2 comparison matrix slide (for competition)
 */
const createComparisonSlide = (pptx, slide, theme, slideNum, totalSlides) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Headline
  s.addText(slide.headline || slide.title || '', {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: theme.typography.headingSizes.h2,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.primary),
    bold: true
  });

  // 2x2 matrix axes
  const matrixX = 1.5;
  const matrixY = 1.6;
  const matrixW = 6;
  const matrixH = 3.2;

  // Horizontal axis
  s.addShape('line', {
    x: matrixX, y: matrixY + matrixH / 2,
    w: matrixW, h: 0,
    line: { color: parseColor(theme.colors.text.secondary), width: 1.5 }
  });

  // Vertical axis
  s.addShape('line', {
    x: matrixX + matrixW / 2, y: matrixY,
    w: 0, h: matrixH,
    line: { color: parseColor(theme.colors.text.secondary), width: 1.5 }
  });

  // "You are here" marker (top-right quadrant)
  s.addShape('ellipse', {
    x: matrixX + matrixW * 0.72, y: matrixY + matrixH * 0.18,
    w: 0.6, h: 0.6,
    fill: { color: parseColor(theme.colors.accent) }
  });
  s.addText('You', {
    x: matrixX + matrixW * 0.72, y: matrixY + matrixH * 0.18,
    w: 0.6, h: 0.6,
    fontSize: 10,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.inverse),
    align: 'center',
    valign: 'middle'
  });

  // Content as positioning points or bullet context
  if (slide.content && slide.content.length > 0) {
    const bullets = slide.content.map(item => ({
      text: item,
      options: {
        fontSize: 14,
        fontFace: theme.typography.bodyFont,
        color: parseColor(theme.colors.text.primary),
        bullet: { type: 'bullet', color: parseColor(theme.colors.accent) },
        paraSpaceAfter: 8
      }
    }));

    s.addText(bullets, {
      x: 8, y: 1.6, w: 1.8, h: 3,
      valign: 'top'
    });
  }

  // Page number
  s.addText(`${slideNum} / ${totalSlides}`, {
    x: 9, y: 5.1, w: 0.8, h: 0.3,
    fontSize: 10,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.secondary),
    align: 'right'
  });

  return s;
};

/**
 * Create team slide with photos/cards
 */
const createTeamSlide = (pptx, slide, theme, slideNum, totalSlides) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Headline
  s.addText(slide.headline || slide.title || 'The Team', {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: theme.typography.headingSizes.h2,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.primary),
    bold: true
  });

  // Team members from content (expecting "Name - Title" format)
  const members = slide.content || [];
  const cols = Math.min(members.length, 4);
  const cardWidth = 2;
  const startX = 0.5 + (9 - cols * cardWidth) / 2;

  members.slice(0, 8).forEach((member, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const x = startX + col * cardWidth;
    const y = 1.5 + row * 1.8;

    const parts = member.split(' - ');
    const name = parts[0]?.trim() || member;
    const title = parts[1]?.trim() || '';

    // Placeholder avatar circle
    s.addShape('ellipse', {
      x: x + 0.5, y, w: 0.8, h: 0.8,
      fill: { color: parseColor(theme.colors.background.alt) },
      line: { color: parseColor(theme.colors.primary), width: 1 }
    });

    // Name
    s.addText(name, {
      x, y: y + 0.9, w: cardWidth - 0.1, h: 0.4,
      fontSize: 14,
      fontFace: theme.typography.headingFont,
      color: parseColor(theme.colors.text.primary),
      bold: true,
      align: 'center'
    });

    // Title
    if (title) {
      s.addText(title, {
        x, y: y + 1.25, w: cardWidth - 0.1, h: 0.3,
        fontSize: 11,
        fontFace: theme.typography.bodyFont,
        color: parseColor(theme.colors.text.secondary),
        align: 'center'
      });
    }
  });

  // Page number
  s.addText(`${slideNum} / ${totalSlides}`, {
    x: 9, y: 5.1, w: 0.8, h: 0.3,
    fontSize: 10,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.secondary),
    align: 'right'
  });

  return s;
};

/**
 * Create closing/vision slide
 */
const createClosingSlide = (pptx, slide, theme, slideNum, totalSlides) => {
  const s = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

  // Dark background
  s.background = { color: parseColor(theme.colors.primary) };

  // Vision headline - large centered
  s.addText(slide.headline || slide.title || '', {
    x: 0.5, y: 1.8, w: 9, h: 1.5,
    fontSize: theme.typography.headingSizes.h1,
    fontFace: theme.typography.headingFont,
    color: parseColor(theme.colors.text.inverse),
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Supporting content
  if (slide.content && slide.content.length > 0) {
    s.addText(slide.content.join('\n'), {
      x: 1, y: 3.4, w: 8, h: 1,
      fontSize: theme.typography.bodySize,
      fontFace: theme.typography.bodyFont,
      color: parseColor(theme.colors.text.inverse),
      align: 'center'
    });
  }

  // Contact info at bottom
  s.addText(theme.branding.companyName, {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 14,
    fontFace: theme.typography.bodyFont,
    color: parseColor(theme.colors.text.inverse),
    align: 'center'
  });

  return s;
};

// ========== SLIDE TYPE DETECTION ==========

/**
 * Determine slide type from slide number and content
 */
const getSlideType = (slideNum, slide) => {
  // Title slide
  if (slideNum === 1) return 'title';

  // Closing slide (typically last)
  if (slideNum === 12 || slide.title?.toLowerCase().includes('vision') ||
      slide.title?.toLowerCase().includes('close')) return 'closing';

  // Team slide
  if (slide.title?.toLowerCase().includes('team')) return 'team';

  // Competition/comparison slide
  if (slide.title?.toLowerCase().includes('competition') ||
      slide.title?.toLowerCase().includes('competitive')) return 'comparison';

  // Traction/metrics slide
  if (slide.title?.toLowerCase().includes('traction') ||
      slide.title?.toLowerCase().includes('metrics') ||
      slide.title?.toLowerCase().includes('financials')) {
    if (slide.supporting_data && slide.supporting_data.length >= 3) {
      return 'metrics';
    }
  }

  // Default to content slide
  return 'content';
};

// ========== MAIN GENERATOR ==========

/**
 * Generate complete PPTX from slides array
 * @param {Array} slides - Array of slide objects with headline, content, supporting_data
 * @param {Object|string} theme - Theme object or path to theme.json
 * @param {string} outputPath - Where to save the PPTX
 */
const generatePPTX = async (slides, theme, outputPath) => {
  // Load theme if path provided
  const themeObj = typeof theme === 'string' ? loadTheme(theme) : mergeTheme(DEFAULT_THEME, theme || {});

  const pptx = new pptxgen();

  // Set presentation properties
  pptx.author = themeObj.branding?.companyName || 'Strategy Partner';
  pptx.title = `${themeObj.branding?.companyName || 'Company'} Investor Deck`;
  pptx.subject = 'Investor Presentation';
  pptx.company = themeObj.branding?.companyName || '';
  pptx.layout = 'LAYOUT_16x9';

  // Define master slide
  pptx.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: parseColor(themeObj.colors.background.default) }
  });

  const totalSlides = slides.length;

  // Generate each slide based on type
  slides.forEach((slide, index) => {
    const slideNum = index + 1;
    const slideType = getSlideType(slideNum, slide);

    switch (slideType) {
      case 'title':
        createTitleSlide(pptx, slide, themeObj);
        break;
      case 'closing':
        createClosingSlide(pptx, slide, themeObj, slideNum, totalSlides);
        break;
      case 'team':
        createTeamSlide(pptx, slide, themeObj, slideNum, totalSlides);
        break;
      case 'comparison':
        createComparisonSlide(pptx, slide, themeObj, slideNum, totalSlides);
        break;
      case 'metrics':
        createMetricsSlide(pptx, slide, themeObj, slideNum, totalSlides);
        break;
      default:
        createContentSlide(pptx, slide, themeObj, slideNum, totalSlides);
    }
  });

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save
  await pptx.writeFile({ fileName: outputPath });
  console.log(`Presentation saved to: ${outputPath}`);

  return outputPath;
};

/**
 * Parse structured markdown slides into array
 * Expected format per slide:
 * ## Slide N: Title
 * ### Headline
 * ...
 * ### Content
 * - bullet 1
 * ### Supporting Data
 * - metric: value
 */
const parseSlideMarkdown = (markdown) => {
  const slides = [];
  const slideBlocks = markdown.split(/^## Slide \d+:/gm).filter(Boolean);

  slideBlocks.forEach(block => {
    const slide = {
      title: '',
      headline: '',
      content: [],
      supporting_data: [],
      visual_suggestion: '',
      speaker_notes: ''
    };

    // Extract title from first line
    const titleMatch = block.match(/^([^\n]+)/);
    if (titleMatch) {
      slide.title = titleMatch[1].trim();
    }

    // Extract headline
    const headlineMatch = block.match(/### Headline\n([^\n]+)/);
    if (headlineMatch) {
      slide.headline = headlineMatch[1].trim();
    }

    // Extract content bullets
    const contentMatch = block.match(/### Content\n([\s\S]*?)(?=###|$)/);
    if (contentMatch) {
      slide.content = contentMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim());
    }

    // Extract supporting data
    const dataMatch = block.match(/### Supporting Data\n([\s\S]*?)(?=###|$)/);
    if (dataMatch) {
      slide.supporting_data = dataMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim());
    }

    // Extract visual suggestion
    const visualMatch = block.match(/### Visual Suggestion\n([^\n]+)/);
    if (visualMatch) {
      slide.visual_suggestion = visualMatch[1].trim();
    }

    // Extract speaker notes
    const notesMatch = block.match(/### Speaker Notes\n([\s\S]*?)(?=###|$)/);
    if (notesMatch) {
      slide.speaker_notes = notesMatch[1].trim();
    }

    slides.push(slide);
  });

  return slides;
};

// ========== EXPORTS ==========

module.exports = {
  // Main functions
  generatePPTX,
  parseSlideMarkdown,
  loadTheme,

  // Slide creators (for custom use)
  createTitleSlide,
  createContentSlide,
  createMetricsSlide,
  createComparisonSlide,
  createTeamSlide,
  createClosingSlide,

  // Utilities
  getSlideType,
  parseColor,
  mergeTheme,

  // Constants
  DEFAULT_THEME
};
