// lib/docx-helpers.js
// Reusable helper functions for generating Word documents with consistent styling

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        LevelFormat, PageNumber, ShadingType, VerticalAlign, PageBreak } = require('docx');
const fs = require('fs');

// ========== STYLE CONSTANTS ==========
const COLORS = {
  primary: "1a365d",
  secondary: "2c5282",
  text: "2d3748",
  muted: "666666",
  white: "FFFFFF",
  altRow: "f7fafc",
  highlight: "f0f4f8"
};

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

// ========== HELPER FUNCTIONS ==========

// Headings
const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 360, after: 180 },
  children: [new TextRun({ text, bold: true, color: COLORS.primary })]
});

const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 280, after: 120 },
  children: [new TextRun({ text, bold: true, color: COLORS.secondary })]
});

const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 200, after: 80 },
  children: [new TextRun({ text, bold: true, color: COLORS.text })]
});

// Paragraphs
const para = (text, opts = {}) => new Paragraph({
  spacing: { after: 120 },
  children: [new TextRun({ text, ...opts })]
});

const boldLabel = (label, text) => new Paragraph({
  spacing: { after: 120 },
  children: [new TextRun({ text: label, bold: true }), new TextRun({ text })]
});

const bullet = (text, opts = {}) => new Paragraph({
  numbering: { reference: "bullet-list", level: 0 },
  children: [new TextRun({ text, ...opts })]
});

const numberedItem = (text, listRef = "num-list") => new Paragraph({
  numbering: { reference: listRef, level: 0 },
  children: [new TextRun({ text })]
});

// Tables
const createCell = (text, opts = {}) => new TableCell({
  borders: cellBorders,
  width: { size: opts.width || 3000, type: WidthType.DXA },
  shading: opts.shading,
  verticalAlign: VerticalAlign.CENTER,
  children: [new Paragraph({
    alignment: opts.align || AlignmentType.LEFT,
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, bold: opts.bold, color: opts.color || "000000", size: opts.size || 20 })]
  })]
});

const createHeaderCell = (text, width) => createCell(text, {
  width,
  shading: { fill: COLORS.primary, type: ShadingType.CLEAR },
  bold: true,
  color: COLORS.white
});

const createTable = (headers, rows, widths) => new Table({
  columnWidths: widths,
  rows: [
    new TableRow({ tableHeader: true, children: headers.map((h, i) => createHeaderCell(h, widths[i])) }),
    ...rows.map((row, idx) => new TableRow({
      children: row.map((cell, i) => createCell(cell, {
        width: widths[i],
        shading: idx % 2 === 1 ? { fill: COLORS.altRow, type: ShadingType.CLEAR } : undefined
      }))
    }))
  ]
});

// Highlighted box
const highlight = (text) => new Paragraph({
  spacing: { before: 120, after: 200 },
  shading: { fill: COLORS.highlight, type: ShadingType.CLEAR },
  children: [new TextRun({ text, italics: true })]
});

// Page break
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

// ========== DOCUMENT CREATION ==========

const createStrategyDocument = (title, subtitle, content) => {
  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal",
          run: { size: 48, bold: true, color: COLORS.primary, font: "Arial" },
          paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, color: COLORS.primary, font: "Arial" },
          paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, color: COLORS.secondary, font: "Arial" },
          paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 22, bold: true, color: COLORS.text, font: "Arial" },
          paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } }
      ]
    },
    numbering: {
      config: [
        { reference: "bullet-list",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "num-list",
          levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
      ]
    },
    sections: [{
      properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
      headers: { default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: title, italics: true, size: 18, color: COLORS.muted })]
      })] }) },
      footers: { default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 18 }), new TextRun({ children: [PageNumber.CURRENT], size: 18 }), new TextRun({ text: " of ", size: 18 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18 })]
      })] }) },
      children: [
        new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(title)] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 },
          children: [new TextRun({ text: subtitle, size: 20, color: COLORS.muted })] }),
        ...content
      ]
    }]
  });
};

const saveDocument = async (doc, filepath) => {
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filepath, buffer);
  console.log(`Document saved to: ${filepath}`);
};

// ========== EXPORTS ==========
module.exports = {
  // Helpers
  h1, h2, h3, para, boldLabel, bullet, numberedItem,
  createCell, createHeaderCell, createTable, highlight, pageBreak,
  // Document creation
  createStrategyDocument, saveDocument,
  // Style constants
  COLORS, cellBorders,
  // Raw imports for advanced use
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, PageBreak, ShadingType,
  BorderStyle, WidthType, LevelFormat, PageNumber, VerticalAlign
};
