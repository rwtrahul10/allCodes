

function po(num,po){

    let result = 1;
    for(let i=0;i<po;i++){
    result *= num;
    }
    console.log("Power is \t"+result);
}

po(3,3);
po(4,3);