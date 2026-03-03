/**
 * Strict PAN validation (Indian Income Tax format)
 * @param {string} pan 
 * @returns {boolean}
 */
export const validatePAN = (pan) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return regex.test(pan || '');
};

/**
 * Basic alphanumeric registration number validation
 * @param {string} regNo 
 * @returns {boolean}
 */
export const validateRegNo = (regNo) => {
    return regNo && regNo.trim().length >= 3;
};

/**
 * 80G number validation (Alphanumeric)
 * @param {string} g80No 
 * @returns {boolean}
 */
export const validate80G = (g80No) => {
    return g80No && g80No.trim().length >= 5;
};

/**
 * NGO Name validation
 * @param {string} name 
 * @returns {boolean}
 */
export const validateNGOName = (name) => {
    return name && name.trim().length >= 3;
};

/**
 * Amount validation (Positive number)
 * @param {number|string} amount 
 * @returns {boolean}
 */
export const validateAmount = (amount) => {
    const num = Number(amount);
    return !isNaN(num) && num > 0;
};

/**
 * Date validation - handles various formats
 * @param {any} date 
 * @returns {boolean}
 */
export const validateDate = (date) => {
    if (!date) return false;

    // If it's a number (Excel serial date)
    if (typeof date === 'number') return true;

    const d = new Date(date);
    return d instanceof Date && !isNaN(d.getTime());
};
