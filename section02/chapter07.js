// 6가지의 요소 조작 메서드
// push
// 마지막에 요소 추가
let arr = [1, 2, 3];

// push (빠르다)
// return 값은 변경된 배열의 길이가 반환된다
const newLen = arr.push(4, 5, 6);


// pop (빠르다)
// 마지막 요소를 제거
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();


// shift (느리다)
// 배열에서 맨앞의 요소를 제거
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();


// unshift (느리다)
// 배열 맨 앞에 요소를 추가
// 반환값은 추가한 후의 배열의 길이
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);


// slice
// 베열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(1, 3);
console.log(slicedArr);


// concat
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
const concatArr = arr6.concat(arr7);
console.log(concatArr);