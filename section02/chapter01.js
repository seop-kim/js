// falsy 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f1) {
//     console.log("f1 is undefined");
// }


// truthy 값
let t1 = "hello";
let t2= 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

function printName(person){
    if (!person) {
        console.log("person is undefined or null");
        return;
    }
    console.log(person.name);
}


let person = null;
printName(person);
