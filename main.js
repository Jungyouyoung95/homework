// 1~100 홀수만 더할때마다 출력

/* let sum = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
        sum += i;
        console.log(sum);
    }
} */

// 1~100 3의배수와 5의 배수를 더할때마다 출력

/* let sum1 = 0;
for(let i = 0; i <= 100; i++){
    if(i % 3 ===0 || i % 5 === 0 ) {
        sum1 += i;
        console.log(sum1);
    }
} */

// 1~100 array 홀수일 때 앞에서 추가, 짝수일때는 뒤에서 추가 
/* const array = [];
for(let i = 1; i <= 100; i++){
    if(i % 2 === 1) {
        array.push(i);
    }
}
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0) {
        array.push(i);
    }
}
console.log(array);  */

// 1~100 array에 홀수 짝수 순으로 배열

/* onst array2 = [1];
for(let i = 2; i < 101; i++){
    if( i % 2 === 1 ){
        array2.push(i);
        let sum = i - 1; 
        array2.push(sum);
    } 
}
console.log(array2) */

// 피보나치 수열 

/* function fibonacci() {
    const number = prompt("피보나치 몇번 째 수열까지 보시겠습니까?", "ex)1, 2, 3...");
    let newArr = [0, 1];
    for(let i = 2; i <= number; i++){
        newArr.push(newArr[i - 2] + newArr[i - 1]);
        console.log(newArr);
    }
    
}
fibonacci();*/

// random을 이용해서 100회 반복하는 동안 3의 배수가 나오는 횟수를 구하는 프로그램을 작성하시오. 1~100

let randomNumber = Math.floor(Math.random()*100);
let count = 0;
for(let i = 0; i < 100; i++){
    if(randomNumber % 3 === 0){
        ++count;
    }
}
console.log(count);