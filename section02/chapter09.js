// 5가지 배열 변형 메서드
// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr = [
    {name: 'seop', hobby: 'basketball'},
    {name: 'jung', hobby: 'football'},
    {name: 'park', hobby: 'basketball'},
];

const tennisPeople = arr.filter((item) => {
    if (item.hobby === 'basketball') {
        return item;
    }
});

// const tennisPeople = arr.filter((item) =>
//     item.hobby === 'basketball'
// );


// map
// 배열의 모든 요소를 순회하면서 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3, 4, 5];
const mapResultOne = arr2.map((item, idx, arr) => {
    return item * 2;
})

let name = arr.map((item) => {
    return item.name
})


// sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ['a', 'b', 'c', 'h', 'e'];
arr3.sort();

let arr4 = [1, 2, 8, 4, 5, 0];

// 오름차순
arr4.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

// 내림차순
arr4.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
})


// toSorted
// 정렬된 배열을 새롭게 반환하는 함수
let arr5 = ['a', 'b', 'c', 'h', 'e'];
const sortedArr = arr5.toSorted();


// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 함수
let arr6 = ['a', 'b', 'c', 'h', 'e'];
const joined = arr6.join();
console.log(joined);