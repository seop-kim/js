// 구조 분해 할당
let arr = [1, 2, 3, 4, 5, 6];
let [a, b, c] = arr;


let person = {
    name: "kim",
    age: 20,
    gender: "male"
};

let {name, age, gender, extra = 'hello'} = person;

// 객체 구조 분해 할당을 이용해 함수의 매개변수 받는 방법
const func = ({name, age, gender, extra}) => {
    console.log(name, age, gender, extra);
}

func(person);