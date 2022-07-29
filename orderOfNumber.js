

function cOrder(a,b,c){

    if(a<b && b<c){
    console.log("Number "+a +" "+ b  +" "+ c +" is in increasing order");}
    else if(a>b && b>c){
    console.log("Number "+a +" "+ b +" "+ c +" is in decreasing order");}
    else  console.log("Number "+a +" "+ b +" "+ c +" It is out of order");


}

cOrder(1,2,3);

cOrder(3,2,1);

cOrder(1,2,1);


