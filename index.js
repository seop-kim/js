// console.log('Hello, world!');
// console.log(1);
// console.log(true);
// console.log({name: '홍길동', age: 20, married: false});

// console.warn('이 코드는 잘못된 방식으로 작성된 코드입니다.');
// console.error('이 코드는 실행할 수 없습니다.');
// console.info('이 코드는 정보성 메시지입니다.');

// 주석

/*
여러 줄 주석
*/

/**
 * JSDocs
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @returns {number} 두 수의 합
 * @example
 * sum(1, 2) // 3
 * sum(3, 5) // 8
 * sum(10, -5) // 5 
 */
function sum(a, b) {
    return a + b;
} 

// console.log(sum(1, 2));
// console.log(sum(3, 5));


// ==============================================
// const SALUTATION = 'Hello, world!';
// let person = '철수';

// console.log(SALUTATION);
// console.log(person);
// ==============================================


// ==============================================
// let x = 1;
// console.log(x);
// ==============================================


// ==============================================
// let a =1, b = 2, c = 3;
// const X = 10, Y = 20, Z = 30;

// console.log(a, b, c);
// console.log(X, Y, Z);
// ==============================================


// ==============================================
// 명명규칙
// JS는 카멜 케이스(camelCase)를 사용한다.
// ==============================================


// ==============================================
// var 는 중복 선언이 가능하지만 let은 중복 선언이 불가능하다.
// 그렇기에 var보다는 let을 사용하는 것이 좋다.
// var a = 1;
// var a = 2;
// let x = 1;
// ==============================================


// ==============================================
// 자바스크립트의 원시자료형
// const a = true;
// const b = 1;
// const c = 'Hello, world!';
// const d = null;
// const e = undefined;
// const f = Symbol('symbol');
// const g = BigInt(1);
// const h = NaN;
// const i = Infinity;
// const j = -Infinity;
// const k = 0 / 0;
// const l = 1 / 0;
// const m = -1 / 0;


// console.log(a , ' ' , typeof a);
// console.log(b , ' ' , typeof b);
// console.log(c , ' ' , typeof c);
// console.log(d , ' ' , typeof d);
// console.log(e , ' ' , typeof e);
// console.log(f , ' ' , typeof f);
// console.log(g , ' ' , typeof g);
// console.log(h , ' ' , typeof h);
// console.log(i , ' ' , typeof i);
// console.log(j , ' ' , typeof j);
// console.log(k , ' ' , typeof k);
// console.log(l , ' ' , typeof l);
// console.log(m , ' ' , typeof m);
// ==============================================


// ==============================================
// function getUpperString(str) {
//     return str.toUpperCase();
// }

// console.log(getUpperString('hello, world!'));


// function getLowerString(str) {
//     return str.toLowerCase();
// }

// console.log(getLowerString('HELLO, WORLD!'));
// ==============================================


// ==============================================
// let word = '안녕하세요!';
// console.log(word);

// let word2 = '작은 따옴표 안에 "큰 따옴표"';
// console.log(word2);

// let word3 = "큰 따옴표 안에 '작은 따옴표'";
// console.log(word3);

// let word4 = '작은 따옴표 안에 \'작은 따옴표\'';
// console.log(word4);

// let word5 = "큰 따옴표 안에 \"큰 따옴표\"";
// console.log(word5);

// let word6 = `백틱 안에 '작은 따옴표'와 "큰 따옴표" 모두 사용 가능`;
// console.log(word6);

// let word7 = `백틱 안에 줄바꿈도 가능
// 줄바꿈`;
// console.log(word7);

// let word8 = '작은 따옴표 안에 \'작은 따옴표\' 그리고 "큰 따옴표"';
// console.log(word8);

// 템플릿 리터럴
let a = 1;
let b = 2;
console.log(`${a} + ${b} = ${a + b}`);


// ==============================================