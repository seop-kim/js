const func = () => {
  return "Hello World!";
}

const func2 = () => {
  return "Hello World!";
}

console.log(func2())


const add = (a, b) => {
  return a + b;
}
console.log(add(1, 2));

const add2 = (a, b) => a + b;
console.log(add2(1, 2));

// 콜백 함수
const add3 = (a, b, cb) => {
  return cb(a + b);
}

console.log(add3(6, 2, (result) => {
  return result;
}));

const add4 = (a, b, cb) => {
  return a + b + cb;
}
console.log(add4(6, 2, 3));


const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
}

const printResult = (result) => {
  console.log("Result:", result);
}

const doubleResult = (result) => {
  console.log("Double Result:", result * 2);
}

calculate(5, 3, printResult); // Result: 8
calculate(5, 3, doubleResult); // Double Result: 16