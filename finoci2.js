

function fib(num){

    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    
    for(let i=0;i<num-2;i++){
       
        var c= a+b;
        console.log(c);
        a=b;
        b=c;
    }

}
fib(25);


