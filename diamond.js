function chk(lines){
    if(lines%2==0){
        console.log("Number should be odd");

    }else{

       
       star(lines);
    }

}

function star(lines){
    let pat="";
    let space = 0;
    let temp = 0;
    var u=1;
    var t=2;
for(let i=1;i<=lines; i++){
    pat="";
    if(i<=(lines+1)/2){
     for(let y=1;y<=(lines+1)/2-i; y++){
     pat += " ";
     }
     for(let z=1;z<=(2*i-1); z++){
        pat += "*";
     }
     console.log("\t\t\t\t\t\t\t\t\t"+pat);
 
 }else {
        while(space <=temp){

            pat += " ";
            space++;
        }
        space=0;
        temp++;
        if(i==(lines+1)/2+1){
        u = 2*i-3}
        // console.log(u);
        for(let y=1;y<=u-t;y++){
            pat +="*";
        }
        t+=2;
        console.log("\t\t\t\t\t\t\t\t\t"+pat);
 }
 }
 }
 
 chk(19);