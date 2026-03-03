import { parseExcelData } from '../src/utils/excelParser';
import * as XLSX from 'xlsx';

// More robust FileReader mock for JSDOM
class MockFileReader {
    readAsArrayBuffer(blob) {
        this.result = new ArrayBuffer(8);
        setTimeout(() => {
            if (this.onload) {
                this.onload({ target: this });
            }
        }, 0);
    }
}
global.FileReader = MockFileReader;

jest.mock('xlsx', () => ({
    read: jest.fn(() => ({ SheetNames: ['Sheet1'], Sheets: { 'Sheet1': {} } })),
    utils: {
        sheet_to_json: jest.fn(),
    },
}));

describe('Excel Parser Utility', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should slice files with more than 100 rows and warn', async () => {
        XLSX.utils.sheet_to_json.mockReturnValue(new Array(101).fill({ 'Donor Name': 'Test' }));
        const result = await parseExcelData(new File([], 'test.xlsx'));
        expect(result.errors).toContain('Note: Only the first 100 rows will be processed.');
    });

    test('should reject empty files', async () => {
        XLSX.utils.sheet_to_json.mockReturnValue([]);
        const result = await parseExcelData(new File([], 'test.xlsx'));
        expect(result.errors).toContain('The Excel file is empty.');
    });

    test('should check for missing required columns', async () => {
        XLSX.utils.sheet_to_json.mockReturnValue([{ 'Donor Name': 'Test' }]);
        const result = await parseExcelData(new File([], 'test.xlsx'));
        expect(result.errors[0]).toContain('Missing columns');
    });

    test('should validate individual rows', async () => {
        XLSX.utils.sheet_to_json.mockReturnValue([{
            'Date': '2026-03-03',
            'Donor Name': 'John Doe',
            'Donor PAN': 'INVALID',
            'Amount': -100,
            'Amount in Words': 'Minus Hundred'
        }]);

        const result = await parseExcelData(new File([], 'test.xlsx'));
        expect(result.errors[0]).toContain('Row 1: Invalid PAN format, Invalid Amount');
    });

    test('should parse valid data correctly', async () => {
        XLSX.utils.sheet_to_json.mockReturnValue([{
            'Date': '2026-03-03',
            'Donor Name': 'John Doe',
            'Donor PAN': 'ABCDE1234F',
            'Amount': 5000,
            'Amount in Words': 'Five Thousand Only'
        }]);

        const result = await parseExcelData(new File([], 'test.xlsx'));
        expect(result.data.length).toBe(1);
        expect(result.errors.length).toBe(0);
    });
});
