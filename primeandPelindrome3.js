// till a number like 50 prime as well as palindrome

// print the prime as well palindrome

function pri(num){

    let i=2;
    var flag=0;
    for(;i*i<=num;i++);

    i-=1;

    if(i*i==num){  
    }
    else
    {
       let y=2;
        while(y<=i){ 
         if(num%y==0) {
                 flag =1;    
         }
         y++;
            
         }

        if(flag ==0) {
        //  console.log("Number "+num+" is a prime number");
            return num;
        }


    }
}


function chk(n){

    var num = pri(n);
    if(!isNaN(num)){
       
    var a=num.toString();    
    var str ="";
   var  num2 = num;

//    console.log(num2);

   var y= 1;
       
    for(let i =0;i<a.length;i++){
       
           y = num2 % 10;
            str += y;
           num2 = parseInt(num2/10);            

   

}

    var num3 = Number(str);
  
    if(num3 == num){

        console.log("\nNumber  "+num+"  is palindrome as well as prime");

    }

}
}



console.log("Number is 2,3,5,7 palindrome as well as prime");


for(i=11;i<=50;i++)     // Can change the value here how many number is required
chk(i);





console.log()