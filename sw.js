
function dv(valu){

    switch (valu){

        case "a":{
            console.log("your got good first division");
            break;
        }

        case "b":{
            console.log("your got good second division");
            break;
        }

        
        case "c":{
            console.log("your got good third division");
            break;
        }

        case "f":{

            console.log("Nalayak fail ho gaya hai tu");
            break;
        }
        default :{

            console.log("wrong entry");
        }

        console.log("Out of scope");
    }
}
dv('a');

 
function table(a) {

    for(let i=1;a<=10;i++){}

    a += a;

    console.log("");
}


