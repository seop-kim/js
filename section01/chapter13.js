function hello(value) {
    value();
}

function sayHello() {
    console.log("Hello World");
}

// 콜백 함수
// hello(sayHello);


function main(value) {
    // console.log(value());
}

function sub() {
    // console.log("im sub");
}

main(() => {
    // console.log("im main");
});

function repeat(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

function repeatDouble(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i * 2);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});
