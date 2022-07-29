
var count =0;

class enviourmentTalist{

    constructor(name,location1){
        count++;
        this.name = name;
        this.location = location1;
    }

    countTheTrees(){
        console.log("we are counting the trees\t"+this.name);
    }

    showAlert(){
        console.log("Alert is shown to the area\t"+this.location);
    }

    plantTrees(){
        console.log("10 Trees are planted by \t"+this.name);
    }

}


const abhi = new enviourmentTalist("Abhimanyu","karanpur");
const karan = new enviourmentTalist("karan","karanpur");

abhi.countTheTrees();
abhi.showAlert();
abhi.plantTrees();

console.log("Type of abhi is\t"+typeof abhi);
console.log("abhi is object of class enviourmentalist\t"+ (abhi instanceof enviourmentTalist));

console.log("Total number of object created is \t"+count);
