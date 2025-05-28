// 함수 선언
// function greeting() {
//     console.log("Hi");
// }
//
// console.log("호출 전");
// greeting();
// console.log("호출 후");

function getArea(width, height){
    // 중첩 함수
    function another(){
        console.log("another");
    }

    another();
    return width * height;
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(10, 30);

console.log(area1);
console.log(area2);
console.log(area3);

