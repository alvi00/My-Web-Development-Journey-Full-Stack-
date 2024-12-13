//this is a constructor
//by convention constructor doesnt return anything
function Car(name,model){
    this.name=name;
    this.model=model;
}

Car.prototype.info=(name,model)=>{
    console.log(`You car name is ${this.name} and model is ${this.model}`);
}

let c1=new Car("Porshe","911 gt3 rs");
let c2=new Car("Porshe","carrera gt");