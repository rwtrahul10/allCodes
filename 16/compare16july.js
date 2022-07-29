//  Abhimanyu Singh 

function com(a,b){

    if(!isNaN(a) && !isNaN(b)){
        if (a != b)
         a>b?console.log("Number "+a+" is greatest"):console.log("Number "+b+" is greatest");
         else
         console.log("Both number "+a+" and "+b+" is equal");
    }
    else
    console.log("Data Type is not a Number");

console.log(typeof a);

}

com(12,4);
com(9,45);
com(4,4);

console.log(parseInt(5) );