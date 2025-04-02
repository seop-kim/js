let num = 10;
console.log(typeof num);

let num2 = 10.5;
console.log(typeof num2);

let num3 = Infinity;
console.log(typeof num3);

let num4 = NaN;
console.log(typeof num4);

let num5 = 100 / 0;
console.log(num5); // Infinity

let number = 'javascript' / 10;
console.log(number); // NaN

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // bigint
console.log(bigInt); // 1234567890123456789012345678901234567890n


let name = 'John';
console.log(typeof name); // string

let name2 = "John";
console.log(typeof name2); // string


// Template Literals
let name3 = `제 이름은 ${name}입니다.`;
console.log(name3); // 제 이름은 John입니다.

let isClicked = true;
console.log(typeof isClicked); // boolean
console.log(isClicked); // true

// null
// 존재하지않거나 알 수 없는 값 
let emptyValue = null;
console.log(typeof emptyValue); // object
console.log(emptyValue === null); // null

// undefined
// 정의되지 않은 값
let undefinedValue;
console.log(typeof undefinedValue); // undefined
console.log(undefinedValue === undefined); // true

// Symbol
// 고유하고 변경 불가능한 값
let uniqueSymbol = Symbol('description');
console.log(typeof uniqueSymbol); // symbol
console.log(uniqueSymbol); // Symbol(description)

// 묵시적 형 변환
let num6 = 100;
let str = '20';
let result = num6 / str;
console.log(result); // 5

// 명시적 형 변환
let num7 = 100;
let str2 = '20';
let result2 = num7 / parseInt(str2);
console.log(result2); // 5

// 형 변환
let str3 = '10.5';
let num8 = parseFloat(str3);
console.log(num8); // 10.5


let price = 10000;
console.log(`가격 : ${price}원`); // 가격 : 10000원

// null 병합 연산자
// null 또는 undefined인 경우에만 오른쪽 값을 반환
let value = null;
let defaultValue = value ?? '기본값';
console.log(defaultValue); // 기본값

let num9 = 10;
if (num9 > 5) {
    console.log('5보다 큽니다.');
}
else {
    console.log('5보다 작습니다.');
}

console.clear();

let num10 = 10;
if (num10 > 5) {
    console.log('5보다 큽니다.');
}
else if (num10 < 5) {
    console.log('5보다 작습니다.');
}
else {
    console.log('5와 같습니다.');
}

console.clear();

// switch문
let fruit = 'apple';
switch (fruit) {
    case 'apple':
        console.log('사과입니다.');
        break;
    case 'banana':
        console.log('바나나입니다.');
        break;
    default:
        console.log('과일이 아닙니다.');
}

console.clear();

// 함수
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30

// 화살표 함수
const addArrow = (a, b) => a + b;
console.log(addArrow(10, 20)); // 30

console.clear();

// 즉시 실행 함수
// 즉시 실행 함수는 정의와 동시에 실행되는 함수입니다.
// 주로 모듈화나 초기화 작업에 사용됩니다.
(function() {
    console.log('즉시 실행 함수입니다.');
})();

// Early Return Pattern
function compare(number) {
    if (number > 0) {
        return '양수입니다.';
    }
    else if (number < 0) {
        return '음수입니다.';
    }
    else if(number === 0) {
        return '0입니다.';
    }
    else {
        return '잘못된 값입니다.';
    }
}
console.log(compare(10));

console.clear();