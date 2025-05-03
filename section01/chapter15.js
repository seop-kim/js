let obj1 = new Object();
let obj2 = {}; // 객체 리터럴

// 객체 프로퍼티
let person = {
    name: '김태섭',
    age: 27,
    hobby: 'bike',
    job: 'BE Dev',
    extra: {}
};

// 객체 프로퍼티를 다루는 법
// 특정 프로퍼티에 접근 방법
let name = person.name;
let age = person['age'];

let property = "hobby";
let hobby = person[property];


// 새로운 프로퍼티를 추가하는 방법
person.height = 170;
person.weight = 60;

// 수정
person.age = 28;


// 프로퍼티 삭제
delete person.height;
delete person["age"];


// 프로퍼티의 존재 유무 확인 in 연산자
let result1 = "name" in person;
let result2 = "height" in person;

console.log(result1);
console.log(result2);

