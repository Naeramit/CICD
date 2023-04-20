export const isValidInputs = (...input) => {
    return input.every((num) => typeof num === 'number' && !isNaN(num));
};