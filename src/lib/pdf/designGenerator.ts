/**
 * PDF generator for individual label designs
 * Generates PDF/PNG from editor designs
 */

import PDFDocument from 'pdfkit'
<<<<<<< HEAD
import { WritableStreamBuffer } from 'stream-buffers'
=======
import { StreamBuffers } from 'stream-buffers'
import JsBarcode from 'jsbarcode'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
import { EditorElement } from '@/types/editor'

export interface DesignPDFOptions {
  elements: EditorElement[]
  width_px: number
  height_px: number
  dpi: number
  format?: 'pdf' | 'png'
}

/**
 * Generate PDF from label design
 */
export async function generateDesignPDF(options: DesignPDFOptions): Promise<Buffer> {
<<<<<<< HEAD
  const { elements, width_px, height_px, dpi } = options
=======
  const { elements, width_px, height_px, dpi, format = 'pdf' } = options
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

  // Convert pixels to points (1 inch = 72 points)
  // At 300 DPI: 300px = 1 inch = 72 points, so 1px = 72/300 = 0.24 points
  // At 203 DPI: 203px = 1 inch = 72 points, so 1px = 72/203 ≈ 0.354 points
  const pxToPoints = 72 / dpi
  const width_pt = width_px * pxToPoints
  const height_pt = height_px * pxToPoints

  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const writeStream = new WritableStreamBuffer({
=======
    const writeStream = new StreamBuffers.WritableStreamBuffer({
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      initialSize: 100 * 1024, // 100KB
      incrementAmount: 10 * 1024, // 10KB
    })

    const doc = new PDFDocument({
      size: [width_pt, height_pt],
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
    })

    doc.pipe(writeStream)

    // Render each element
    elements.forEach((element) => {
      renderElement(doc, element, pxToPoints, dpi)
    })

    doc.end()

    writeStream.on('finish', () => {
      const buffer = writeStream.getContents()
      if (buffer) {
        resolve(Buffer.from(buffer))
      } else {
        reject(new Error('Failed to generate PDF buffer'))
      }
    })

    doc.on('error', reject)
  })
}

/**
 * Render a single element on the PDF
 */
function renderElement(
  doc: PDFKit.PDFDocument,
  element: EditorElement,
  pxToPoints: number,
  dpi: number
) {
  const x = element.x * pxToPoints
  const y = element.y * pxToPoints

  switch (element.type) {
    case 'text':
      renderTextElement(doc, element, x, y, pxToPoints)
      break
    case 'image':
      renderImageElement(doc, element, x, y, pxToPoints)
      break
    case 'barcode':
      renderBarcodeElement(doc, element, x, y, pxToPoints, dpi)
      break
    case 'shape':
      renderShapeElement(doc, element, x, y, pxToPoints)
      break
  }
}

/**
 * Render text element
 */
function renderTextElement(
  doc: PDFKit.PDFDocument,
  element: EditorElement,
  x: number,
  y: number,
  pxToPoints: number
) {
  if (element.type !== 'text') return

<<<<<<< HEAD
  const fontSize = (element.properties.fontSize || 16) * pxToPoints
  const width = (element.width || 200) * pxToPoints
=======
  const fontSize = (element.fontSize || 16) * pxToPoints
  const width = (element.width || 200) * pxToPoints
  const height = (element.height || 50) * pxToPoints
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  const rotation = element.rotation || 0

  doc.save()
  doc.translate(x, y)
  if (rotation !== 0) {
    doc.rotate(rotation, { origin: [0, 0] })
  }

  // Set font
<<<<<<< HEAD
  const fontFamily = element.properties.font || 'Helvetica'
  const fontWeight = element.properties.fontWeight || 400
  const font = fontWeight >= 600 ? `${fontFamily}-Bold` : fontFamily
  doc.font(font).fontSize(fontSize)

  // Set color
  if (element.properties.color) {
    const color = hexToRgb(element.properties.color)
=======
  const fontFamily = element.fontFamily || 'Helvetica'
  const fontWeight = element.fontWeight || 'normal'
  const font = fontWeight === 'bold' ? `${fontFamily}-Bold` : fontFamily
  doc.font(font).fontSize(fontSize)

  // Set color
  if (element.color) {
    const color = hexToRgb(element.color)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    if (color) {
      doc.fillColor(`rgb(${color.r}, ${color.g}, ${color.b})`)
    }
  }

  // Alignment
<<<<<<< HEAD
  const align = element.properties.align || 'left'
=======
  const align = element.textAlign || 'left'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  let textX = 0
  if (align === 'center') {
    textX = width / 2
  } else if (align === 'right') {
    textX = width
  }

  // Render text
<<<<<<< HEAD
  if (element.properties.text) {
    doc.text(element.properties.text, textX, 0, {
      width: width,
      align: align as 'left' | 'center' | 'right' | 'justify',
      lineGap: (element.properties.lineHeight || 1.2) * fontSize - fontSize,
=======
  if (element.content) {
    doc.text(element.content, textX, 0, {
      width: width,
      align: align as 'left' | 'center' | 'right' | 'justify',
      lineGap: (element.lineHeight || 1.2) * fontSize - fontSize,
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    })
  }

  doc.restore()
}

/**
 * Render image element
 */
async function renderImageElement(
  doc: PDFKit.PDFDocument,
  element: EditorElement,
  x: number,
  y: number,
  pxToPoints: number
) {
<<<<<<< HEAD
  if (element.type !== 'image' || !element.properties.image_url) return
=======
  if (element.type !== 'image' || !element.src) return
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

  try {
    const width = (element.width || 100) * pxToPoints
    const height = (element.height || 100) * pxToPoints
    const rotation = element.rotation || 0

    doc.save()
    doc.translate(x + width / 2, y + height / 2)
    if (rotation !== 0) {
      doc.rotate(rotation, { origin: [0, 0] })
    }

    // If src is a URL, fetch it
<<<<<<< HEAD
    if (element.properties.image_url.startsWith('http') || element.properties.image_url.startsWith('https')) {
      const response = await fetch(element.properties.image_url)
=======
    if (element.src.startsWith('http') || element.src.startsWith('https')) {
      const response = await fetch(element.src)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      doc.image(buffer, -width / 2, -height / 2, {
        width: width,
        height: height,
<<<<<<< HEAD
      })
    } else if (element.properties.image_url.startsWith('data:')) {
      // Base64 data URL
      const base64Data = element.properties.image_url.split(',')[1]
=======
        opacity: element.opacity !== undefined ? element.opacity : 1,
      })
    } else if (element.src.startsWith('data:')) {
      // Base64 data URL
      const base64Data = element.src.split(',')[1]
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      const buffer = Buffer.from(base64Data, 'base64')
      doc.image(buffer, -width / 2, -height / 2, {
        width: width,
        height: height,
<<<<<<< HEAD
=======
        opacity: element.opacity !== undefined ? element.opacity : 1,
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      })
    } else {
      // Assume it's a file path in Supabase Storage
      // This would need to be fetched first
<<<<<<< HEAD
      console.warn('Image path not fully supported:', element.properties.image_url)
=======
      console.warn('Image path not fully supported:', element.src)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    }

    doc.restore()
  } catch (error) {
    console.error('Error rendering image:', error)
    // Continue with other elements
  }
}

/**
 * Render barcode element
 */
function renderBarcodeElement(
  doc: PDFKit.PDFDocument,
  element: EditorElement,
  x: number,
  y: number,
<<<<<<< HEAD
  _pxToPoints: number,
  _dpi: number
) {
  if (element.type !== 'barcode' || !element.properties?.barcode_value) return

  try {
=======
  pxToPoints: number,
  dpi: number
) {
  if (element.type !== 'barcode' || !element.value) return

  try {
    const width = (element.width || 200) * pxToPoints
    const height = (element.height || 50) * pxToPoints

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    // Generate barcode as canvas/image
    // For now, we'll use a placeholder approach
    // In production, you'd generate the barcode image first
    
    // Create a simple representation
    // Note: jsBarcode generates SVG, we'd need to convert to image buffer
    // For now, render as text placeholder
    doc.save()
    doc.fontSize(10)
<<<<<<< HEAD
    doc.text(element.properties?.barcode_value || 'BARCODE', x, y)
=======
    doc.text(element.value || 'BARCODE', x, y)
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    doc.restore()

    // TODO: Implement actual barcode image generation
    // This requires: jsBarcode -> canvas -> image buffer -> PDF
  } catch (error) {
    console.error('Error rendering barcode:', error)
  }
}

/**
 * Render shape element
 */
function renderShapeElement(
  doc: PDFKit.PDFDocument,
  element: EditorElement,
  x: number,
  y: number,
  pxToPoints: number
) {
  if (element.type !== 'shape') return

  const width = (element.width || 100) * pxToPoints
  const height = (element.height || 100) * pxToPoints
  const rotation = element.rotation || 0

  doc.save()
  doc.translate(x + width / 2, y + height / 2)
  if (rotation !== 0) {
    doc.rotate(rotation, { origin: [0, 0] })
  }

  // Set colors
<<<<<<< HEAD
  const fillColor = element.properties?.fill_color
    ? hexToRgb(element.properties.fill_color)
    : null
  const strokeColor = element.properties?.border_color
    ? hexToRgb(element.properties.border_color)
    : null
  const strokeWidth = (element.properties?.border_width || 1) * pxToPoints

  switch (element.properties?.shape_type) {
=======
  const fillColor = element.fillColor
    ? hexToRgb(element.fillColor)
    : null
  const strokeColor = element.strokeColor
    ? hexToRgb(element.strokeColor)
    : null
  const strokeWidth = (element.strokeWidth || 1) * pxToPoints

  switch (element.shapeType) {
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    case 'rectangle':
      if (fillColor) {
        doc.rect(-width / 2, -height / 2, width, height)
        doc.fillColor(`rgb(${fillColor.r}, ${fillColor.g}, ${fillColor.b})`)
        doc.fill()
      }
      if (strokeColor && strokeWidth > 0) {
        doc.rect(-width / 2, -height / 2, width, height)
        doc.strokeColor(`rgb(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b})`)
        doc.lineWidth(strokeWidth)
        doc.stroke()
      }
      break

    case 'circle':
      const radius = Math.min(width, height) / 2
      if (fillColor) {
        doc.circle(0, 0, radius)
        doc.fillColor(`rgb(${fillColor.r}, ${fillColor.g}, ${fillColor.b})`)
        doc.fill()
      }
      if (strokeColor && strokeWidth > 0) {
        doc.circle(0, 0, radius)
        doc.strokeColor(`rgb(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b})`)
        doc.lineWidth(strokeWidth)
        doc.stroke()
      }
      break

    case 'line':
      if (strokeColor && strokeWidth > 0) {
        doc.moveTo(-width / 2, -height / 2)
        doc.lineTo(width / 2, height / 2)
        doc.strokeColor(`rgb(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b})`)
        doc.lineWidth(strokeWidth)
        doc.stroke()
      }
      break
  }

  doc.restore()
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

