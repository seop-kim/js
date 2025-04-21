// // // // // // // // function Person(name, age, job) {
// // // // // // // //     this.name = name;
// // // // // // // //     this.age = age;
// // // // // // // //     this.job = job;
// // // // // // // //     this.sayHi = function() {
// // // // // // // //         console.log(`안녕하세요, ${this.name}입니다.`);
// // // // // // // //     };
// // // // // // // // }
// // // // // //
// // // // // // // // const person1 = new Person('John', 30, 'developer');
// // // // // // // // const person2 = new Person('Jane', 25, 'designer');
// // // // // // // // const person3 = new Person('Mike', 35, 'manager');
// // // // // //
// // // // // // // // console.log(person1.name); // John
// // // // // // // // console.log(person2.age); // 25
// // // // // // // // console.log(person3.job); // manager
// // // // // //
// // // // // // // // person1.sayHi(); // 안녕하세요, John입니다.
// // // // // // // // person2.sayHi(); // 안녕하세요, Jane입니다.
// // // // // // // // person3.sayHi(); // 안녕하세요, Mike입니다.
// // // // // //
// // // // // // // for(let i = 0; i < 5; i++){
// // // // // // //     console.log(i);
// // // // // // // }
// // // // // //
// // // // // // // for(let i = 5; i > 0; i--){
// // // // // // //     console.log(i);
// // // // // // // }
// // // // // //
// // // // // // // let i = 1;
// // // // // // // while(i < 6){
// // // // // // //     console.log(i);
// // // // // // //     i++;
// // // // // // // }
// // // // // //
// // // // // // let person = {
// // // // // //   name : 'John',
// // // // // //   age : 30,
// // // // // //   height: 175
// // // // // // }
// // // // // //
// // // // // // for(let key in person){
// // // // // //   console.log(key + ': ' + person[key]);
// // // // // // }
// // // // //
// // // // // // let colors = ["green", "red", "blue"];
// // // // // // console.log(colors.at(-1));
// // // // // //
// // // // // //
// // // // // // console.log(colors.includes("blue", 2));
// // // // // // console.log(colors.includes("blue", 1));
// // // // // // console.log(colors.includes("blue", 3));
// // // // // //
// // // // // // console.log(colors.indexOf("blue"));
// // // // // // console.log(colors.indexOf("ree"));
// // // // // //
// // // // // // console.log(colors.indexOf("blue",1));
// // // // //
// // // // // //
// // // // // // let colors = [
// // // // // //     {id: 1, color: 'green'},
// // // // // //     {id: 2, color: 'red'},
// // // // // //     {id: 3, color: 'yellow'},
// // // // // //     {id: 4, color: 'green'}
// // // // // // ]
// // // // // //
// // // // // //
// // // // // // console.log(colors.findIndex(color => color.id === 3));
// // // // // // console.log(colors.findIndex(color => color.color === 'red'));
// // // // // //
// // // // // // console.log(colors.findIndex((elm, idx, array) =>
// // // // // //     console.log(`${idx}의 값은 : ${elm.color}이다`)
// // // // // // ));
// // // // //
// // // // //
// // // // // // const person1 = {
// // // // // //     name: '철수',
// // // // // //     age: '25',
// // // // // //     married: false,
// // // // // // }
// // // // // //
// // // // // // for (const key in person1) {
// // // // // //     console.log(person1[key])
// // // // // // }
// // // // //
// // // // //
// // // // // // 선언함수
// // // // // function des() {
// // // // //     console.log('html')
// // // // //     console.log('css')
// // // // //     console.log('js')
// // // // // }
// // // // //
// // // // // // 익명함수
// // // // // const des2 = function () {
// // // // //     console.log('html')
// // // // //     console.log('css')
// // // // //     console.log('js')
// // // // // }
// // // // //
// // // // // console.log(des2)
// // // // // console.log(des)
// // // // //
// // // // // function multi(a) {
// // // // //     return a * a
// // // // // }
// // // // //
// // // // // console.log(multi(4));
// // // // //
// // // // //
// // // // // function isLeapYear(year) {
// // // // //     if (typeof year !== 'number') {
// // // // //         return 'plz olny number'
// // // // //     }
// // // // //     let result = false;
// // // // //     if (year % 4 === 0 && year % 100 === 0 || year % 100 === 0) {
// // // // //         result = true;
// // // // //     }
// // // // //     return result;
// // // // // }
// // // // //
// // // // // console.log(isLeapYear());
// // // // //
// // // // //
// // // // // function rangeSum(a, b) {
// // // // //     let result = 0;
// // // // //     for (let i = a; i <= b; i++) {
// // // // //         result += i;
// // // // //     }
// // // // //     return result;
// // // // // }
// // // // //
// // // // // console.log(rangeSum(1, 100));
// // // // //
// // // // //
// // // // // const testArr = [52, 12, 31, 55, 23, 11, 66]
// // // // //
// // // // // // in은 index를 가져오고 of는 value를 가져온다.
// // // // // function searchMin(arr) {
// // // // //     let result = arr[0];
// // // // //     for (const num of arr) {
// // // // //         if (result > num) {
// // // // //             result = num;
// // // // //         }
// // // // //     }
// // // // //     return result;
// // // // // }
// // // // //
// // // // // console.log(searchMin(testArr));
// // // // //
// // // // // // 가변 매개변수
// // // // // function sample(...items) {
// // // // //     console.log(items);
// // // // // }
// // // // //
// // // // // sample(1, 2, 3, 4, 5, 6);
// // // // //
// // // // //
// // // // // function min(first, ...rests) {
// // // // //     let output;
// // // // //     let items;
// // // // //
// // // // //     if (Array.isArray(rests)) {
// // // // //         output = rests[0];
// // // // //         items = rests;
// // // // //
// // // // //     } else if (typeof rests === 'number') {
// // // // //         output = first;
// // // // //         items = rests;
// // // // //     }
// // // // //
// // // // //     for (const item of items) {
// // // // //         if (output > item) {
// // // // //             output = item;
// // // // //         }
// // // // //
// // // // //         return output;
// // // // //     }
// // // // // }
// // // // //
// // // // // console.log(min(5, 8, 3, 4, 5, 6, 6, 6, 6, 6));
// // // // //
// // // // // const array2 = [1,2,3,4,5,6];
// // // // // console.log(array2);
// // // // // console.log(...array2);
// // // //
// // // // function add(a, b) {
// // // //
// // // // }
// // // //
// // // // function earnings(name, wage = 8590, hour = 40) {
// // // //     console.log(`# ${name} 님의 급여 정보`)
// // // //     console.log(`- 시급 : ${wage}원`)
// // // //     console.log(`- 근무 시간 : ${hour}시간`)
// // // //     console.log(`- 급여 : ${wage * hour}원`)
// // // // }
// // // //
// // // //
// // // // earnings('name');
// // // //
// // // //
// // // // console.log('------------------');
// // // //
// // // // earnings('name', 8590, 40);
// // // //
// // // // // a +b function
// // // // function add(a, b) {
// // // //     return a + b;
// // // // }
// // // //
// // // //
// // // // // localhost:8080의 asn api를 가져와야해 파라미터는 {id}
// // // // fetch('http://localhost:8080/asn?id=1')
// // // //     .then((response) => {
// // // //         return response.json();
// // // //     })
// // // //     .then((data) => {
// // // //         console.log(data);
// // // //     })
// // // //     .catch((error) => {
// // // //         console.error('Error:', error);
// // // //     });
// // // //
// // // //
// // //
// // //
// // // document.addEventListener('DOMContentLoaded', () => {
// // //     const textarea = document.querySelector('textarea');
// // //     const h1 = document.querySelector('h1');
// // //     textarea.addEventListener('keyup', (e) => {
// // //         const length = textarea.value.length;
// // //         h1.textContent = `글자 수 : ${length}`;
// // //     })
// // // })
// //
// //
// // document.addEventListener('DOMContentLoaded', () => {
// //     const h1 = document.querySelector('h1');
// //     const print = (e) => {
// //         let output = 'a'
// //         output += `alt:: ${e.altKey}<br>`;
// //         output += `ctrl:: ${e.ctrlKey}<br>`;
// //         output += `shift:: ${e.shiftKey}<br>`;
// //         output += `code :: ${typeof e.code !== 'undefined' ? e.code : e.keyCode}<br>`;
// //
// //         h1.innerHTML = output;
// //     }
// //
// //     document.addEventListener('keydown', print);
// //     document.addEventListener('keyup', print);
// // });
//
//
// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('input');
//     const button = document.querySelector('button');
//     const p = document.querySelector('p');
//     button.addEventListener('click', () => {
//         const inch = Number(input.value);
//
//         if(isNaN(inch)) {
//             p.innerHTML = '숫자를 입력하세요';
//             return;
//         }
//
//         const cm = inch * 2.54;
//         p.innerHTML = `${inch} inch는 ${cm} cm 입니다.`;
//     })
// });