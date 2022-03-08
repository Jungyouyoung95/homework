// 함수를 이용해 "hello world"를 출력

function helloWorld() {
    console.log("hello world!");
}
helloWorld();

// 함수를 이용해 1~10의 총 합을 출력
function sum() {
    let sum = 0
    for(let i = 1; i <= 10; i++){
        sum += i
        console.log(sum);
    }
}
sum();