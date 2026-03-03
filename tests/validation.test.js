import {
    validatePAN,
    validateAmount,
    validateDate,
    validateNGOName,
    validateRegNo,
    validate80G
} from '../src/utils/validation';

describe('Validation Utility', () => {
    describe('PAN Validation', () => {
        test('should validate correct PAN format', () => {
            expect(validatePAN('ABCDE1234F')).toBe(true);
        });
        test('should reject incorrect formats', () => {
            expect(validatePAN('invalid')).toBe(false);
            expect(validatePAN('ABCDE1234')).toBe(false);
            expect(validatePAN('12345ABCDE')).toBe(false);
        });
    });

    describe('Amount Validation', () => {
        test('should validate positive numbers', () => {
            expect(validateAmount(100)).toBe(true);
            expect(validateAmount('500.50')).toBe(true);
        });
        test('should reject non-positive or invalid numbers', () => {
            expect(validateAmount(0)).toBe(false);
            expect(validateAmount(-1)).toBe(false);
            expect(validateAmount('abc')).toBe(false);
        });
    });

    describe('NGO Details Validation', () => {
        test('validateNGOName should require min 3 chars', () => {
            expect(validateNGOName('NGO')).toBe(true);
            expect(validateNGOName('AB')).toBe(false);
        });
        test('validateRegNo should require min 3 chars', () => {
            expect(validateRegNo('REG/001')).toBe(true);
            expect(validateRegNo('12')).toBe(false);
        });
        test('validate80G should require min 5 chars', () => {
            expect(validate80G('80G/VAL')).toBe(true);
            expect(validate80G('1234')).toBe(false);
        });
    });
});
