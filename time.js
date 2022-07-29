
function ct(time){

    if ( time <4 && time>=22 ) {

        console.log("it is night");
    }else if ( time >4 && time<=12 ) {

        console.log("it is morning");

    }

    else if ( time >12 && time <=4 ) {

        console.log("it is afternoon");

    }

    else if ( time >4 && time <=24 ){

        
        console.log("it is evening");

    } else {
    console.log("Time is invalid");
    }
}
 
ct(5);

ct(28);


// var time =2;
// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }