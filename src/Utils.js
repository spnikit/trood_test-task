export function getFractionRoundedTo2Digits(value, total) {
    return Math.floor((value / total) * 100 * 100) / 100;
}