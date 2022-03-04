// 1~100 홀수만 더할때마다 출력

/* let sum = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
        sum += i;
        console.log(sum);
    }
} */

// 1~100 3의배수와 5의 배수를 더할때마다 출력

let sum1 = 0;
for(let i = 0; i <= 100; i++){
    if(i % 3 ===0 || i % 5 === 0 ) {
        sum1 += i;
        console.log(sum1);
    }
}