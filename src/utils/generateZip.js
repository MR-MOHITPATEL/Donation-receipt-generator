import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generatePDFBlob } from './generatePDF';

/**
 * Bulk generates PDFs and downloads them as a single ZIP file.
 * @param {Array} donors List of donor data
 * @param {Object} ngoDetails NGO information
 * @param {string} templateId Selected template ID
 * @param {Function} onProgress Progress callback
 * @returns {Promise<void>}
 */
export const generateBulkZip = async (donors, ngoDetails, templateId, onProgress) => {
    const zip = new JSZip();
    const folder = zip.folder("donation_receipts");

    for (let i = 0; i < donors.length; i++) {
        const donor = donors[i];
        const elementId = `receipt-${donor.id}`;
        const element = document.getElementById(elementId);

        if (!element) {
            console.warn(`Element ${elementId} not found for donor ${donor['Donor Name']}`);
            continue;
        }

        try {
            const pdfBlob = await generatePDFBlob(element);
            const filename = `Receipt_${donor['Donor Name'].replace(/\s+/g, '_')}_${donor.id}.pdf`;
            folder.file(filename, pdfBlob);

            if (onProgress) {
                onProgress(Math.round(((i + 1) / donors.length) * 100));
            }
        } catch (err) {
            console.error(`Error processing donor ${donor['Donor Name']}:`, err);
        }

        // Tiny delay to prevent UI freeze and allow progress update
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "NGO_Donation_Receipts.zip");
};
