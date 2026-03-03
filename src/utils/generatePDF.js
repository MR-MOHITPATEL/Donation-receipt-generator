import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Generates a high-quality PDF from a DOM element.
 * @param {HTMLElement} element 
 * @param {string} filename 
 * @returns {Promise<Blob>}
 */
export const generatePDFBlob = async (element, filename) => {
    try {
        const canvas = await html2canvas(element, {
            scale: 2, // High resolution
            useCORS: true,
            logging: false,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        return pdf.output('blob');
    } catch (err) {
        console.error('PDF Generation Error:', err);
        throw new Error('Failed to generate PDF');
    }
};
