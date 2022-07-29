// temperature


function temperatureChk(temp,rain){

    if(temp>=20 && temp<=25 && rain == false){

        console.log("You can go to park");


    }
    if(temp>=18 && temp <20 && rain == true)

    console.log("Please stay ate play school");

}


temperatureChk(22,false);

temperatureChk(18,true);