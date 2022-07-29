

function find(num){
     let i=0;                    
    for(;i*i<=num;i++){   
    }
    max=i-1;
    for(let i=0;i<=max;i++){                //(0,0)(0,1)(0,2)upto (0,7)
        for(let y=0;y<=max;y++){    //(1,0)(1,1)(1,2)upto(1,7)
                                            //(2,0)(2,1)(2,2)upto(2,7)

            if(i*i+(y*y) == num )       //
            {
                if(i<=y){
                console.log("Number pair is\t",(i)," and ",(y));    

                }
            }
        }
    }
}

find(50);

find(81);