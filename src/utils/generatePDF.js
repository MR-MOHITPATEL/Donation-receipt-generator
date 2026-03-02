import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Generates a PDF from a DOM element
 * @param {HTMLElement} element - The DOM element to capture
 * @param {string} filename - The name of the file (without extension)
 * @returns {Promise<Blob>} - Resolves with the PDF as a Blob
 */
export const generatePDFBlob = async (element, filename) => {
    if (!element) return null;

    try {
        const canvas = await html2canvas(element, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // Calculate dimensions
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const orientation = imgWidth > imgHeight ? 'l' : 'p';

        // Create PDF with dynamic size based on original aspect ratio
        const pdf = new jsPDF({
            orientation: orientation,
            unit: 'px',
            format: [imgWidth, imgHeight],
        });

        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

        return pdf.output('blob');
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
};
