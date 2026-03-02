import JSZip from 'jszip';
import { saveAs } from 'file-saver';

/**
 * Bundles an array of PDF Blobs into a ZIP file and triggers a download
 * @param {Array<{blob: Blob, name: string}>} files - Array of objects containing the PDF Blob and its desired filename
 * @param {string} zipName - The name of the resulting ZIP file
 */
export const generateZip = async (files, zipName = 'NGO_Donation_Receipts.zip') => {
    const zip = new JSZip();

    files.forEach(({ blob, name }) => {
        // Ensure filename ends with .pdf
        const fileName = name.endsWith('.pdf') ? name : `${name}.pdf`;
        zip.file(fileName, blob);
    });

    try {
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, zipName);
    } catch (error) {
        console.error('Error generating ZIP:', error);
        throw error;
    }
};
