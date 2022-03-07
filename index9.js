// question no:9
// let a = 3;
// let b = 5;
// let sum = a - b;
// document.write(` sub of ${a} and ${b} is ${sum}`);
// let c = 3;
// let d = 5;
// let sum1 = a * b;
// document.write(` <br> multi of ${c} and ${d} is ${sum1}`);
// let e = 3;
// let f = 5;
// let sum2 = a % b;
// document.write(` <br> mod of ${e} and ${f} is ${sum2}`);
// let g = 3;
// let h = 5;
// let sum3 = a / b;
// document.write(` <br> division of ${g} and ${h} is ${sum3}`);
function mathoperation(a, b) {
  let operation = [
    "sum = a + b",
    "mult = a * b",
    "divide = a / b",
    "reminder = a % b",
  ];
  let i = 0;
  while (i < operation.length) {
    document.write(` <br> ${operation[i]} is ${eval(operation[i])}`);
    i++;
  }
}
mathoperation(3, 5);
