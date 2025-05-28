// 상수 객체
const animal = {
    type: '고양이',
    name: '나비',
    color: 'black',
}

animal.age = 2;
animal.name = '까망이';
delete animal.color;

// console.log(animal);


// 메서드
const person = {
    name: '김태섭',
    sayHi() {
        console.log('hi')
    }
}

person.sayHi();