var arr = [50, 50, 50, 50, 50];

function cumulativeAddition(array) {
  let myarr = array.reduce((x, y) => {
    return x + y;
  });
  console.log(`Sum is :${myarr} and Elements of are ${array.length}`);
}
cumulativeAddition(arr);
