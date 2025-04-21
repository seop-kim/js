// // // function sample() {
// // //   console.log(arguments)
// // //
// // //   for (let i = 0; i < arguments.length; i++) {
// // //     console.log(arguments[i])
// // //   }
// // // }
// // //
// // // sample(1, 2, 3, 4, 5)
// // //
// // //
// // //
// // // function earnings(wage, hours) {
// // //   wage = wage || 8590
// // //   hours = hours || 52
// // //
// // //   return wage * hours;
// // // }
// // //
// // // console.log(earnings(8590, 52)) // 446680
// // // console.log(earnings(8590)) // 446680
// // // console.log(earnings()) // 446680
// // // console.log(earnings(10000, 40)) // 400000
// // //
// // //
// // // function multiply(a, b) {
// // //   let result = 1;
// // //   for (let i = a; i <= b; i++) {
// // //     result *= i;
// // //   }
// // //
// // //   return result;
// // // }
// // //
// // //
// // // function callThreeTimes(callback) {
// // //   for(let i = 0; i < 3; i++) {
// // //     callback(i)
// // //   }
// // // }
// // //
// // // function printNumber(num) {
// // //   console.log(num)
// // // }
// // //
// // // callThreeTimes(printNumber)
// // //
// //
// //
// // let numbers = [273, 52, 103, 32, 57]
// //
// // // numbers.forEach(function (value, index, array) {
// // //     return `${index} : ${value}`
// // // });
// //
// // numbers = numbers.map((value, index, array) =>{
// //     return value * value;
// // });
// //
// // numbers.forEach(console.log);
// //
// //
// // const evenNumbers = numbers.filter((value) =>{
// //     return value % 2 === 0;
// // })
// //
// // console.log(`원래 배열 : ${numbers}`);
// // console.log(`짝수만 배열 : ${evenNumbers}`);
// //
// //
//
//
// // let numbers = [1,2,3,4,5,6,7,8,9]
// //
// // numbers.filter((value) => value % 2 ===0)
// // .map((value) => value * value)
// // .forEach((value) => {console.log(value)})
//
// function getSecondTime(sec) {
//     return sec * 1000;
// }
//
// // setTimeout(() => {
// //     console.log(`1초 후 실행`);
// // }, getSecondTime(1))
//
//
// // let count = 1
// // let id = setInterval(() => {
// //     if (count > 10) {
// //         clearInterval(id);
// //         return;
// //     }
// //     console.log(`1초마다 실행 ${count}`);
// //     count++
// // }, getSecondTime(1))
//
// {
//     let pi = 3.1412334123
//     console.log(pi)
// }
// {
//     let pi = 3.14
//     console.log(pi)
// }
//
// (function () {
//     let pi = 3.1234123
//     console.log(pi)
// })();


'use strict';
let data = 10
console.log(data)