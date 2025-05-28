// 5가지 순환 및 탐색 메서드
// forEach
let arr = [1, 2, 3];
// param : 현재요소의 값, 현재 index, 전체 배열
arr.forEach(function (item, index, array) {
    // console.log(item, index, array);
})

let doubleArr = [];
arr.forEach((item) => {
    doubleArr.push(item * 2);
})


// includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
const isInclude = arr2.includes(2);


// indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열의 동일한 값이 있을 경우 맨 앞에 있는 값의 위치를 찾으며 값이 없는 경우 -1 반환
let arr3 = [1, 2, 3];
const index = arr3.indexOf(2);


// findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는.. (첫번쨰로 만족하는 값의 index 반환)
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3, 2];
const index2 = arr4.findIndex((item) => {
    return item === 2;
})

// find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환한다.
let arr5 = [
    {name: '길동'},
    {name: '태섭'},
]

const findName = arr5.find(
    item => item.name === '길동'
);

console.log(findName);


