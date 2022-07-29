

function pri(num){

    let i=2;
    var flag=0;
    for(;i*i<num;i++);

    i-=1;

    if(i*i==num){ 
    console.log("Number "+num+" is not a prime number");
    }
    else
    {
       let y=2;
        while(y<=i){ 
         if(num%y==0) {
         console.log("Number "+num+" is not a prime number");
          flag =1;
         }
         y++;
            
         }

        if(flag ==0) 
         console.log("Number "+num+" is a prime number");


    }
}

pri(11);
pri(10);
pri(81);