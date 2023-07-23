"use strict";
exports.__esModule = true;
exports.strconvert = exports.conc = void 0;
/**
 * Concatenate operands
 * @param operands strings
 * @returns the combined string
 */
function conc() {
    var operands = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operands[_i] = arguments[_i];
    }
    var resString = 'Concat result:';
    operands.forEach(function (ss) {
        resString = "".concat(resString + ss, " ");
    });
    return resString;
}
exports.conc = conc;
function strconvert() {
    var operands = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        operands[_i] = arguments[_i];
    }
    return String(operands.length);
}
exports.strconvert = strconvert;
