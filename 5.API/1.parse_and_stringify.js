// JSON-formatted string representing data received from an API
let apiJsonForm = `{"fact":"In 1987 cats overtook dogs as the number one pet in America.","length":60}\n`;

// Parsing the JSON-formatted string into a JavaScript object
let apiObj = JSON.parse(apiJsonForm);

// Accessing a property ("fact") of the parsed object and logging it to the console
console.log(apiObj.fact);

// JavaScript object representing student information
let student = {
    name: "Ahmad Fahmid",
    id: 2233
};

// Converting the JavaScript object into a JSON-formatted string
let apiJson = JSON.stringify(student);

// Logging the JSON-formatted string to the console
console.log(apiJson);
