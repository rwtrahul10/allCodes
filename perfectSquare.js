function sq(num){
    let i=1;
    while((i*i)<=num){
        if(num==(i*i)){           
            console.log("Number "+num+" is Perfect square");
            break;
        }
        i++;
    }
    if((i*i)>num) {console.log("Number "+num+" is Not perfect square");}    
}

sq(25);
sq(11);