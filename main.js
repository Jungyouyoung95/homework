// 1~100 홀수만 더해서 출력
let sum = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
        sum += i;
        console.log(sum);
    }
}