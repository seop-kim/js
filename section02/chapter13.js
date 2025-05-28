function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // resolve : 성공상태로 바꾸는 작업이 있음
        // reject : 실패상태로 바꾸는 작업이 있음

        // 비동기 작업 실행하는 함수
        // executor 함수라고 불림
        // setTimeout(() => {
        //     console.log("hello");
        //     resolve("안녕");
        // }, 2000);

        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject('num은 숫자가 아닙니다.');
            }

        }, 2000)
    });

    return promise;
}

add10(0).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });

