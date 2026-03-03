import * as XLSX from 'xlsx';
import { validatePAN, validateAmount, validateDate } from './validation';

/**
 * Parses and validates an Excel file for donor data.
 * @param {File} file 
 * @returns {Promise<{data: Array, errors: Array}>}
 */
export const parseExcelData = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(sheet);

                const result = {
                    data: [],
                    errors: []
                };

                let processingRows = rows;
                if (rows.length > 100) {
                    processingRows = rows.slice(0, 100);
                    result.errors.push('Note: Only the first 100 rows will be processed.');
                }

                if (rows.length === 0) {
                    result.errors.push('The Excel file is empty.');
                    return resolve(result);
                }

                const requiredColumns = ['Date', 'Donor Name', 'Donor PAN', 'Amount', 'Amount in Words'];
                const firstRow = rows[0];
                const missingColumns = requiredColumns.filter(col => !(col in firstRow));

                if (missingColumns.length > 0) {
                    result.errors.push(`Missing columns: ${missingColumns.join(', ')}`);
                    return resolve(result);
                }

                processingRows.forEach((row, index) => {
                    const rowNum = index + 1;
                    const rowErrors = [];

                    if (!row['Donor Name']) rowErrors.push('Name missing');
                    if (!validatePAN(row['Donor PAN'])) rowErrors.push('Invalid PAN format');
                    if (!validateAmount(row['Amount'])) rowErrors.push('Invalid Amount');
                    if (!row['Amount in Words']) rowErrors.push('Amount in Words missing');
                    if (!validateDate(row['Date'])) rowErrors.push('Invalid Date');

                    if (rowErrors.length > 0) {
                        result.errors.push(`Row ${rowNum}: ${rowErrors.join(', ')}`);
                    } else {
                        result.data.push({
                            ...row,
                            id: rowNum
                        });
                    }
                });

                resolve(result);
            } catch (err) {
                reject('Failed to read Excel file');
            }
        };

        reader.onerror = () => reject('File read error');
        reader.readAsArrayBuffer(file);
    });
};
