/**
 * Sum of operands
 * @param operands numbers to sum up
 * @returns the total sum
 */
export function sum(...operands: number[]): number {
    if (operands.length === 0) return 0;
    return operands.reduce((operand, total) => total + operand);
}

/**
 * Multiplies parameters
 * @param factors numbers to multiply
 * @returns the product
 */
export function multiply(...factors: number[]): number {
    if (factors.length === 0) return 0;
    return factors.reduce((factor, total) => total * factor);
}
