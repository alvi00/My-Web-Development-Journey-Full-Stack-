//so here  what is happening is if all the array object have their prototype
//its like  prototype is a class that all the array object is inheriting 
//and in the prototype all the functions that can be used by an array are there
//so if i change any function if a prototype it will make change in the class
//so that function will be changed to all the array object
//same goes with string too


let arr=[1,2,3,4]; // Define an array 'arr' with elements [1, 2, 3, 4].
arr.push(4); // Push the number 4 into the array 'arr'. Now 'arr' is [1, 2, 3, 4, 4].

for(let i of arr){
    console.log(i); // Print each element of 'arr': 1, 2, 3, 4, 4.
}

// Modify the prototype of 'arr' to add a custom 'push' method.
//here by __proto__ it is like a pointer which pointing to prototype 
arr.__proto__.push=(n)=>{
    console.log("Hello",n); // Define a new 'push' method in the prototype of 'arr' that logs "Hello" followed by the pushed value.
}

arr.push(5); // Call the custom 'push' method with argument 5. Prints: Hello 5.
//it will print Hello 5 
for(let i of arr){
    console.log(i); // Print each element of 'arr': 1, 2, 3, 4, 4.
}

let arr2=[4,5,6,7]; // Define a new array 'arr2' with elements [4, 5, 6, 7].
arr2.push(10); // Push the number 10 into 'arr2'. Now 'arr2' is [4, 5, 6, 7].
//it will print Hello 10 
for(let i of arr2){
    console.log(i); // Print each element of 'arr2': 4, 5, 6, 7.
}


//if i wanna work with actual object then
Array.prototype.push=(n)=>{
    console.log("Alvi",n);
}

arr.push(10);
//it will print Alvi 10

String.prototype.concat;
//this prototype can be accessed