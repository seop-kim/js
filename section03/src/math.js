// math 모듈

// ES Module : function 앞에 export 선언으로도 가능
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// CJS : Common JS
// module.exports = {
//     add,
//     sub,
// }

// ES Module
// export {add, sub};