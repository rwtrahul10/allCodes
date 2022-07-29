function chk(){
for(let i=1;i<=100;i++){

    if(i%3==0){

        console.log("Relevel\n");
    } else if(i%5==0){

        console.log("Buzz\n");

    }else if(i%15==0){

        console.log("MindBuzz\n");

    }else {

        console.log(i+" is not divisible to 3,5,15\n");
    }
}
}

chk();



