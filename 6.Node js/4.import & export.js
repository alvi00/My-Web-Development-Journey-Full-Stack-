//The came after node js version 6
//so at first in the directory you have to crate a package.json file with npm init

  "name": "node-js",
  "version": "1.0.0",
  "description": "This is just a package",
  "main": "1.process.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alvi",
  "license": "ISC",
  "type": "module"

}

//then here you have to add this  "type": "module"

//after that suppose this is a file where you have to export
export let sum=(a,b)=>(
    a+b
)
export let multi=(a,b)=>(
    a*b
)
export const g=9.8;


//export keyword will be used here

//then Import them where you wanna import

import {sum,multi,g} from "./2.module_exports.js"
console.log(multi(1,2));

//like this you can use import

