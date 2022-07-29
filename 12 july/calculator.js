
// Abhimanyu Singh 12-July-2022 Create a Calulator using diffrent operators and data dypes

function add(x,y){

    let a = "Addition is ";
    return (a+ (x+y));
}

function subtract(x,y){

    const a  = "Subtraction is ";
    return (a+(x-y));
}
function divide(x,y){

    var a = "Dividation is ";
    return (a+(x/y));
}
function multiply(x,y){

    let a = "Multipication is ";
    return (a+(x*y));
}

console.log("\n"+(add(20,30)+"\n"));

console.log(subtract(20,30)+"\n");

console.log(divide(20,30)+"\n");

console.log(multiply(20,30)+"\n");

//  13 July Assignment 2 to use to check if the number is odd or even


function check(a){
    if(a%2 == 0){
        console.log("------------------------------------------------------");
        console.log("\nNumber is Positive\n");
    }else {
        console.log("------------------------------------------------------");
        console.log("\nNumber is Negative\n");
    }
}
check(17);
