

function bt(num){

    let str = num.toString();

    console.log(str);
    var num2 =0;

    if(str.length <=2){

        return -1;
    }else{
        for(let i=1;i<=str.length-2;i++){

            num2 += Number(str[i]);
           
        }        
        return num2;
    }






}

console.log( bt(142));
console.log( bt(12));
console.log( bt(123568));

