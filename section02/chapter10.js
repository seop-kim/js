// Date 객체 생성 방법
let date1 = new Date();

let date2 = new Date("1997-01-07/10:10:10");

// 타임스탬프
// 특정시간이 특정시간으로부터 몇 ms가 지났는지를 의미하는 숫자 값
// UTC : "1970.01.01 00시 00분 00초
let ts1 = date1.getTime();
let date4 = new Date(ts1);


// 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let millisecond = date1.getMilliseconds();

// 시간 수정하기
date1.setFullYear(2019);
date1.setMonth(1);
console.log(date1);


// 시간을 여러 포맷으로 출력하는 방법
console.log(date1.toDateString());
console.log(date1.toLocaleString());