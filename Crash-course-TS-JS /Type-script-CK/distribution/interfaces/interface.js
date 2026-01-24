let y;
y = {
    name: "",
    age: 25,
};
let test = {
    name: "nour",
};
let w = {
    name: "nour",
    age: 25,
};
const myNumber1 = y.age;
const myNumber2 = y.age ?? 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["initial"] = "initial";
    BookingStatus["paid"] = "paid";
    BookingStatus["cancelled"] = "cancelled";
})(BookingStatus || (BookingStatus = {}));
let bookingStatus = BookingStatus.initial;
bookingStatus = BookingStatus.paid;
bookingStatus = BookingStatus.cancelled;
export {};
