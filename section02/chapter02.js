// function returnFalse() {
//     console.log("returnFalse");
//     return false;
// }
//
// function returnTrue() {
//     console.log("returnTrue");
//     return true;
// }
//
// console.log(returnFalse() && returnTrue());


function printName(person) {
    const name = person && person.name;
    console.log(name || "no name");
}

printName(null);
printName({name: "hello"});