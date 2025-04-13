// // // function Person(name, age, job) {
// // //     this.name = name;
// // //     this.age = age;
// // //     this.job = job;
// // //     this.sayHi = function() {
// // //         console.log(`안녕하세요, ${this.name}입니다.`);
// // //     };
// // // }
//
// // // const person1 = new Person('John', 30, 'developer');
// // // const person2 = new Person('Jane', 25, 'designer');
// // // const person3 = new Person('Mike', 35, 'manager');
//
// // // console.log(person1.name); // John
// // // console.log(person2.age); // 25
// // // console.log(person3.job); // manager
//
// // // person1.sayHi(); // 안녕하세요, John입니다.
// // // person2.sayHi(); // 안녕하세요, Jane입니다.
// // // person3.sayHi(); // 안녕하세요, Mike입니다.
//
// // for(let i = 0; i < 5; i++){
// //     console.log(i);
// // }
//
// // for(let i = 5; i > 0; i--){
// //     console.log(i);
// // }
//
// // let i = 1;
// // while(i < 6){
// //     console.log(i);
// //     i++;
// // }
//
// let person = {
//   name : 'John',
//   age : 30,
//   height: 175
// }
//
// for(let key in person){
//   console.log(key + ': ' + person[key]);
// }

// let colors = ["green", "red", "blue"];
// console.log(colors.at(-1));
//
//
// console.log(colors.includes("blue", 2));
// console.log(colors.includes("blue", 1));
// console.log(colors.includes("blue", 3));
//
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("ree"));
//
// console.log(colors.indexOf("blue",1));


let colors = [
    {id: 1, color: 'green'},
    {id: 2, color: 'red'},
    {id: 3, color: 'yellow'},
    {id: 4, color: 'green'}
]


console.log(colors.findIndex(color => color.id === 3));
console.log(colors.findIndex(color => color.color === 'red'));

console.log(colors.findIndex((elm, idx, array) =>
    console.log(`${idx}의 값은 : ${elm.color}이다`)
));


































