import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a formatted receipt number: REC-0001, REC-0002, etc.
 * @param {number} counter The current global counter
 * @returns {string} Formatted receipt number
 */
export const formatReceiptNumber = (counter) => {
    return `REC-${String(counter).padStart(4, '0')}`;
};

/**
 * Generates a completely unique ID if needed
 * @returns {string} UUID
 */
export const generateUniqueId = () => {
    return uuidv4();
};
