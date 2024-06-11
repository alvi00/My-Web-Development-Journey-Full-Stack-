// Retrieve the array of command-line arguments passed to the Node.js process
//It's like if user gives any value as an arguament then it stores int the array names process.argv
let args = process.argv;

// Iterate over the command-line arguments starting from index 2
// The first element (index 0) is the path to the Node.js executable
// The second element (index 1) is the path to the script file
// We start from index 2 because that's where the actual arguments passed by the user begin
for (let i = 2; i < args.length; i++) {   
    // For each argument, print a greeting message to the console
    // The current argument is accessed using args[i]
    console.log("Hello to ", args[i]);
}
