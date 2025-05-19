let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

for (let item of arr2) {
    // console.log(item);
}


let person = {
    name: 'seop',
    age: 27,
    hobby: 'bike',
};
let keys = Object.keys(person);
for (let key of keys) {
    const value = person[key];
    // console.log(key, value);
}

// Object.values
let values = Object.values(person);

for (let value of values) {
    // console.log(value);
}

for(let key in person) {
    console.log(key, person[key]);
}
