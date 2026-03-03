import { formatReceiptNumber } from '../src/utils/receiptGenerator';

describe('Receipt Generator Utility', () => {
    test('should format receipt numbers correctly', () => {
        expect(formatReceiptNumber(1)).toBe('REC-0001');
        expect(formatReceiptNumber(99)).toBe('REC-0099');
        expect(formatReceiptNumber(1000)).toBe('REC-1000');
    });

    test('should handle high numbers', () => {
        expect(formatReceiptNumber(9999)).toBe('REC-9999');
        expect(formatReceiptNumber(10000)).toBe('REC-10000');
    });
});
