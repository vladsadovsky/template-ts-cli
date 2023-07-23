"use strict";
exports.__esModule = true;
exports.multiply = exports.sum = void 0;
/**
 * Sum of operands
 * @param operands numbers to sum up
 * @returns the total sum
 */
function sum() {
    var operands = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operands[_i] = arguments[_i];
    }
    if (operands.length === 0)
        return 0;
    return operands.reduce(function (operand, total) { return total + operand; });
}
exports.sum = sum;
/**
 * Multiplies parameters
 * @param factors numbers to multiply
 * @returns the product
 */
function multiply() {
    var factors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        factors[_i] = arguments[_i];
    }
    if (factors.length === 0)
        return 0;
    return factors.reduce(function (factor, total) { return total * factor; });
}
exports.multiply = multiply;
