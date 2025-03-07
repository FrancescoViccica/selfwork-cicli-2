let somma_dis = 0;


for( let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
        
    }else{
        somma_dis += i
        
    }
}

console.log(`la somma dei numeri dispari è ${somma_dis}`);


console.log(`La media dei numeri dispari è ${somma_dis/10}`);
