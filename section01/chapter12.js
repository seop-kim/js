function funcA() {
    // console.log("funcA");
}

const varA = funcA;
// console.log(varA);


// 익명 함수
let varB = function (){
    // console.log("funcB");
}

// console.log(varB);

// 화살표 함수
let varC = (value) => {
    return 1 + value;
}

console.log(varC(10));
