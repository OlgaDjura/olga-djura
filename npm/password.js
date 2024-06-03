function generatePassword(length, options = { hasNumbers: true, hasSymbols: true, hasUpper: true, hasLower: true }) {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let validChars = '';
    if (options.hasNumbers) {
        validChars += numbers;
    }
    if (options.hasSymbols) {
        validChars += symbols;
    }
    if (options.hasLower) {
        validChars += lowerLetters;
    }
    if (options.hasUpper) {
        validChars += upperLetters;
    }

    if (validChars.length === 0) return ''; // Return empty string if no character types are selected

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    return password;
}

const password2 = generatePassword(12, {hasNumbers: true, hasSymbols: true, hasUpper: true, hasLower: true});
console.log(password2);