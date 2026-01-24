var obj1 = {
    name: "test",
    age: 25,
};
var obj2 = {
    name: "NNN",
    age: 99,
};
var obj3 = {
    name: "Nour",
    age: 26,
};
// obj1 hat einen festen, automatisch abgeleiteten Typ.
// Es sind nur die Eigenschaften name und age erlaubt.
// obj1.birthDate = "1990-01-01"; // ❌ nicht erlaubt
// Lösung: Objekt mit Index Signature definieren,
// um dynamische Properties zu erlauben
// { key: string -> Property-Name, value: any -> Property-Typ }
var obj4 = {
    name: "Nour",
    age: 26,
};
obj4.birthDate = "1990-01-01";
var ob5 = {
    name: "testst",
    age: 20,
};
ob5.gdp = "3.0";
ob5.gdp = 2.0;
var xy = ob5.gdp;
if (typeof xy === "number") {
    console.log(x.toFixed(2));
}
