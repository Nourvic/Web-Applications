var mystr = "Hello World";

console.log(mystr.toLowerCase());
console.log(`${mystr.toUpperCase()}`);
console.log(`${mystr.toUpperCase().replace("O", "n")}`);
console.log(
  `${mystr
    .toUpperCase()
    .replace("O", "n")
    .split(",")
    .reverse()
    .join("")} \n ${typeof this}`
);

/*
| Methode     | Typ            | Bedeutung             | Beispiel                          |
| ----------- | -------------- | --------------------- | --------------------------------- |
| `split("")` | String → Array | Zerlegt in Buchstaben | `"Hi".split("") → ["H","i"]`      |
| `reverse()` | Array → Array  | Dreht Reihenfolge um  | `["H","i"].reverse() → ["i","H"]` |
| `join("")`  | Array → String | Fügt wieder zu String | `["i","H"].join("") → "iH"`       |
*/
