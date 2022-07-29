

function permutation(num){

    var  strNum  = num.toString();

    var temp = 0;

    var arE = [];
    var arO = [];

    for(let i=0;i<strNum.length;i++){

            temp    +=    Number(strNum[i]);

    }

        if(strNum.includes("0")){

            if(temp%3  == 0){

                for(let i=0;i<strNum.length;i++){

                    if(!Number(strNum[i])==0){       //what if number has more than one zeroes ?
                        if(Number(strNum[i])%2==0){
                            arE[i] =Number(strNum[i]);

                        } else arO[i] = Number(strNum[i]);    

                    }
        
            }

            }

        }

    

}

permutation(1203);