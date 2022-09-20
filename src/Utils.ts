export function getFractionRoundedTo2Digits(value: number, total: number) {
    return Math.floor((value / total) * 100 * 100) / 100;
}