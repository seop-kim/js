// const func = () => {
//   return "Hello World!";
// }

// const func2 = () => {
//   return "Hello World!";
// }

// console.log(func2())


// const add = (a, b) => {
//   return a + b;
// }
// console.log(add(1, 2));

// const add2 = (a, b) => a + b;
// console.log(add2(1, 2));

// // 콜백 함수
// const add3 = (a, b, cb) => {
//   return cb(a + b);
// }

// console.log(add3(6, 2, (result) => {
//   return result;
// }));

// const add4 = (a, b, cb) => {
//   return a + b + cb;
// }
// console.log(add4(6, 2, 3));


// const calculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// }

// const printResult = (result) => {
//   console.log("Result:", result);
// }

// const doubleResult = (result) => {
//   console.log("Double Result:",
//     result * 2);
// }

// calculate(5, 3, printResult); // Result: 8
// calculate(5, 3, doubleResult); // Double Result: 16


// const testFunc = (callback) => {
//   callback();
// }

// testFunc(() => {
//   console.log("Callback function executed!");
// });

// const testFunc2 = (callback) => {
//   console.log("Before callback");
//   return callback(1);
// }

// function funcPlus(a, b){
//   return a + b;
// }

// const plusFunc = (a,b) => {
//   return a + b;
// }


// 화살표 함수
// es6 이후 문법이다.
// const func = () => {
//   return "Hello World!";
// };


// function func2() {
//   console.log("Hello World!");
// };

// func2();
// func2();

// const calculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// }

// const printResult = (result) => {
//   console.log("Result:", result);
// }

// const doubleRresult = (result) => {
//   console.log("Double Result:", result * 2);
// }

// calculate(5, 3, printResult); // Result: 8
// calculate(5, 3, doubleRresult); // Double Result: 16


// let obj = new Object();
// console.log(obj); // {}

// let obj2 = {
//   title: 'JavaScript',
//   author: 'John Doe',
//   category: 'Programming'
// };
// console.log(obj2); // { name: 'John', age: 30, greet: [Function: greet] }

// let car = {
//   name: '붕붕',
//   model: '소나타',
//   color: 'red'
// }

// console.log(car.name); // 붕붕
// console.log(car['model']); // 소나타
// console.log(car.color); // red

// console.clear();

// function getValue(key) {
//   return car[key];
// }

// console.log(getValue('name')); // 붕붕
// console.log(getValue('model')); // 소나타
// console.log(getValue('color')); // red

// console.clear();

// const cat = {
//   age: 2
// }

// cat.name = '고양이';
// cat['color'] = 'white';


// cat.sound = () => {
//   return '야옹';
// }

// console.log(cat.name); // 고양이
// console.log(cat['color']); // white
// console.log(cat.age); // 2
// console.log(cat.sound());

// console.log(cat);


// const person = {
//   name: 'John',
//   age: 30,
//   // 프로퍼티에 function을 사용하지 않고 => 를 통해 사용하면 this가 person을 가리키지 않는다.
//   greet: function() {
//     console.log('Hello, my name is ' + this.name);
//   }
// };

// console.log(person.name); // John
// console.log(person['age']); // 30
// person.greet(); // Hello, my name is John

// 배열 선언 시 2개 이상을 넣으면 배열로 인식이되고
// 1개만 넣으면 객체로 인식이 된다.
// let arr = new Array();
// console.log(arr); // []

// let arr1 = new Array(1, 2, 3);
// console.log(arr1); // [ 1, 2, 3 ]

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// let arr3 = ['apple', 'banana', 'orange'];
// console.log(arr3); // [ 'apple', 'banana', 'orange' ]

// let arr4 = new Array(5);
// console.log(arr4); // [ <5 empty items> ]


// let arr = [
//   {name: 'John', age: 30},
//   1,
//   'apple',
//   function() {
//     console.log('Hello!');
//   },
//   null,
//   undefined,
// ]

// console.log(arr); // [ { name: 'John', age: 30 }, 1, 'apple', [Function (anonymous)], null, undefined ]

let array = [1, 'apple', null,];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 맨 뒤에 추가
array.push(2);
console.log(array); // [ 1, 'apple', null, 2 ]

// 맨 앞에 추가
array.unshift('banana');

// 맨 뒤 삭제
array.pop();
console.log(array); // [ 1, 'apple', null ]

// 맨 앞 삭제
array.shift();
console.log(array); // [ 'apple', null ]


const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr[4] = 10;
console.log(arr); // [ 1, 2, 3, 4, 10 ]
console.clear();

const color = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
console.log(color.splice(2, 3)); // [ 'green', 'yellow' ]


