// Abhimanyu Singh pallindrome for first 50 numbers

function chk(num){

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

chk(25);

chk(16);


