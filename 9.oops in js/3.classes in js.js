//this is the best way to initialize a object throw a class
class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
    info_print(){
        console.log(`Your car name is ${this.name} and model is ${this.model}`);
    }
}

let c1=new Car("Porshe","911 gt3 rs");
//this will print Your car name is Porshe and model is 911 gt3 rs

let c2=new Car("Porshe","carrera gt");
//this will print Your car name is Porshe and model is carrera gt