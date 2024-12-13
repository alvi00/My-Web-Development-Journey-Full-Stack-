class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
}

class Bmw extends Car{
    constructor(name,model,color){
        super(name,model);
        this.color=color;
    }
    carinfo(){
        console.log(`Your car name is ${this.name} and model is ${this.model} Your car color is ${this.color}`);
    }
}

let c1=new Bmw("Porshe","911 gt3 rs","red");

