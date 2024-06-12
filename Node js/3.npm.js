//npm stands for Node Package Manager
//when i wanna add some dependencies in my directory i can do that
//from npmjs website i can install any depencies
//there three files in the first file all the dependencies are installed
//then package lock file all the infos about dependencies stores
//then you use that and the is provided in the website like this

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


//Then comes package.json in this file all the infoes of  the depencies are there
//so if there is no node module file
//we can use npm install to install all the dependencies
//Then if we wanna have our own package.json file then use npm init
