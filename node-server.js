// importing libraries

console.log("HELLO WORLD 1");

const http  = require("http");

http.createServer((req,res)=>{

    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------");
    console.log(res);
res.end("I created Server");
console.log("HELLO WORLD 2");    
}
).listen(4201);


console.log("HELLO WORLD 3");