/**
 * Concatenate operands
 * @param operands strings
 * @returns the combined string
 */
export function conc(...operands: string[]): string {
    let resString = 'Concat result:';
    operands.forEach((ss) => {
        resString = `${resString + ss} `;
    });

    return resString;
}

export function strconvert(...operands: string[]): string {
    return String(operands.length);
}
