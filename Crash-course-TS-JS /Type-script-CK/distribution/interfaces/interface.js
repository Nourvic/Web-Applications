"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var y;
y = {
    name: "",
    age: 25,
};
var test = {
    name: "nour",
};
var w = {
    name: "nour",
    age: 25,
};
var myNumber1 = y.age;
var myNumber2 = (_a = y.age) !== null && _a !== void 0 ? _a : 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["initial"] = "initial";
    BookingStatus["paid"] = "paid";
    BookingStatus["cancelled"] = "cancelled";
})(BookingStatus || (BookingStatus = {}));
var bookingStatus = BookingStatus.initial;
bookingStatus = BookingStatus.paid;
bookingStatus = BookingStatus.cancelled;
