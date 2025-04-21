// // const product = {
// //     name: '망고',
// //     type: '당절임',
// //     local: '필리핀'
// // }
// //
// // console.log(product)
// //
// // console.log(product['name'])
// // console.log(product['type'])
// // console.log(product.name);
// //
// //
// // // 식별자로 사용이 불가한 key name은 괄호 표기법으로
// // const obj = {
// //     'with space': 273
// // }
// // console.log(obj["with space"]);
// //
// // const obj1 = {
// //     number: 273,
// //     string: '구름',
// //     boolean: true,
// //     array: [52, 273, 103, 32],
// //     method: function () {
// //         return this.number + this.string;
// //     }
// // };
// //
// // console.log(obj1.method());
// //
// //
// // const pet = {
// //     name: '구름',
// //     eat: function (food) {
// //         return food;
// //     }
// // }
// // console.log(pet.eat('참치'));
// //
// //
// // const pet1 = {
// //     name : 'chey',
// //     eat: function (food) {
// //         alert(`${this.name}은 ${food}를 먹습니다.`);
// //     }
// // }
//
//
// // const student = {}
// // student.name = 'chey'
// // student.age = 25
// // student.addr = 'seoul'
// //
// // console.log(student)
// //
// // delete student.age
// //
// // console.log(student)
//
// // const test = {
// //     a: function () {
// //         console.log(this);
// //     },
// //
// //     b: () => {
// //         console.log(this);
// //     }
// // }
// //
// // test.a()
// // test.b()
//
//
// const str = '안녕하세요';
// document.write(str.anchor('strb'))
//
// Number.prototype.sample = 10;
//
// const i = 273;
// const a = 1;
//
// console.log(i.sample);
// console.log(a.sample);
//
//
// Number.prototype.power = function(n = 2){
//     return this.valueOf() ** n;
// }
//
// const z = 12;
// console.log(z.power());
// console.log(z.power(3));
// console.log(z.power(4));
//
//
// const array = [1, 2, 3, 4, 5, 6];
// const chunked = _.sortBy(array).reverse();
//
// console.log(chunked);

// document.addEventListener('DOMContentLoaded', () => {
//     const headers = document.querySelectorAll('h1');
//     headers.forEach(header => {
//         header.textContent = 'Hello World!';
//         header.style.color = 'red';
//         header.style.backgroundColor = 'blue';
//         header.style.padding = '10px';
//     })
// })


// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.querySelector('#a');
//     const b = document.querySelector('#b');
//
//     a.textContent = '<h1>textContent</h1>';
//     b.innerHTML = '<h1>textContent</h1>';
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const divs = document.querySelectorAll("body > div");
//
//     divs.forEach((div, index)=> {
//         console.log(div);
//         const val = index * 0.5;
//         div.style.height = '10px';
//         div.style.backgroundColor = `rgba(${val}, ${val}, ${val})`;
//     });
// })

// document.addEventListener('DOMContentLoaded', () => {
//     let counter = 0;
//     let isConnected = false;
//
//     const h1 = document.querySelector('h1');
//     const p = document.querySelector('p');
//
//     const connectBtn = document.querySelector('#connect-btn');
//     const disconnectBtn = document.querySelector('#disconnect-btn');
//
//     const clickListener = (event) => {
//         counter++;
//         h1.textContent = `클릭 횟 수 : ${counter}`;
//     };
//
//     connectBtn.addEventListener('click', (e) => {
//         if (!isConnected) {
//             isConnected = true;
//             p.textContent = '연결 상태 : true';
//             h1.addEventListener('click', clickListener);
//         }
//     })
//
//     disconnectBtn.addEventListener('click', (e) => {
//         isConnected = false;
//         p.textContent = '연결 상태 : false';
//         h1.removeEventListener('click', clickListener);
//     })
// })
//
//
//

