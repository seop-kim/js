// CJS : Common JS
// ES Module 사용 시 CJS 방식 사용 불가능
/**
 const moduleData = require('./math');
 console.log(moduleData.add(1,2));
 console.log(moduleData.sub(1,2));

 const {add, sub} = require('./math');
 console.log(add(1,2));
 console.log(sub(1,2));
 */


// ES Module
// 확장자 명시 필요
// import mul from './math.js';
// 같은 모듈에서 가져오는거라면 아래와 같이 선언 가능
// import mul, {add, sub} from './math.js';
//
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from 'randomcolor';

const color = randomColor();
console.log(color);



