// print the prime as well pelindrome


function pri(num){

    let i=2;
    var flag=0;
    for(;i*i<=num;i++);

    i-=1;

    if(i*i==num){ 
    console.log("Number "+num+" is not a prime number"); 
    return num;
    
    }
    else
    {
       let y=2;
        while(y<=i){ 
         if(num%y==0) {
         console.log("Number "+num+" is not a prime number");
          flag =1;
          return num;
         }
         y++;
            
         }

        if(flag ==0) {
         console.log("Number "+num+" is a prime number");
            return num;
        }


    }
}


function chk(n){

    var num = pri(n);
    if(!isNaN(num)){
    for(let i =0;i<=9;i++){

        console.log("Number  "+i+"  is pellindrome number");
    }
    
    
    var a=num.toString();    
    var str ="";
   var  num2 = num;

   console.log(num2);

   var y= 1;
       
    for(let i =0;i<a.length;i++){
       
           y = num2 % 10;
            str += y;
           num2 = parseInt(num2/10);            

   

}

    var num3 = Number(str);
  
    if(num3 == num){

        console.log("\nNumber  "+num+"  is pellindrome number");

    }else console.log("\nNumber  "+num+"  is not pellindrome number")

}
}


chk(181);
chk(121);



