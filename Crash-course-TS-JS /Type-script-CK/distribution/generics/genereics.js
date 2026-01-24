"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity2 = exports.identity = exports.sum = void 0;
/*
export const sum: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};
*/
//Datentyp erstmal delcarieren und später kann festgestellt werde
// < T extends etwas > T -> darf nur etwas sein. es sei dann number oder string
// hiesst nichts anderes als number1 :number , number2 : number
var sum = function (number1, number2) {
    var y = number1;
    //return number1 + number2;
};
exports.sum = sum;
(0, exports.sum)(1, 10);
(0, exports.sum)("yes", "no");
var identity = function (value) {
    return value;
};
exports.identity = identity;
var identity2 = function (value2) { return value2; };
exports.identity2 = identity2;
