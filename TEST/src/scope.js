// scope 
// 전역, 지역

let globalNum = 100;

function testFunc(){
  let innerNum = 200;
  console.log(globalNum); // 100
  console.log(innerNum); // 200
}

testFunc();
console.log(globalNum); // 100
console.clear();

function outerFunction(){
  let outerVar = 'I am outside!';

  function innerFunction(){
    let innerNum = 300;
    console.log(outerVar); // I am outside!
  }

  innerFunction();
  console.log(globalNum);
  // console.log(innerNum); // ReferenceError: innerNum is not defined
  console.log(outerVar); // I am outside!
}

outerFunction();

console.clear();



