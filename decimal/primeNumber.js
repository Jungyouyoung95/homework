function getPrimeNumber(){
    let results = [];
    for(let i = 1; i<=100; i++){
        let isPrimeNumber = true;
        for(let j=2;j<i;i++){
            if(i%j === 0){
                isPrimeNumber = false;
            }
        }
        if(isPrimeNumber){
            console.log(i);
        }
    }
    return 0;
}
getPrimeNumber();