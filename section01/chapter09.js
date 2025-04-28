// if 조건문
let num = 10;

if (num >= 10) {
    console.log('num은 10 이상입니다.');
    console.log('조건이 참입니다.');
} else {
    console.log('num은 10보다 작습니다.');
    console.log('조건이 거짓입니다.');
}


let animal = 'cat';

switch (animal) {
    case 'cat':
        console.log('cat');
        break;
    case 'dog':
        console.log('dog');
        break;
    case 'bird':
        console.log('bird');
        break;
    case 'fish':
        console.log('fish');
        break;
    case 'snake':
        console.log('snake');
        break;
    default:
        console.log('default');
        break;
}