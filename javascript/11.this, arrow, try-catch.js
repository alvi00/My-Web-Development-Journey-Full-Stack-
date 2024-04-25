// Define an object named 'alvi'
let alvi = {
    // Properties for subject scores
    eng: 99,    // English score
    math: 100,  // Math score
    phy: 98,    // Physics score

    // Method to calculate average score
    avg: function() {
        // Output 'this', referring to the current object 'alvi'
        console.log(this);

        // Calculate the sum of scores and attempt to output average score
        // The division operation is mistakenly placed outside the console.log() function
        // This will cause only the sum to be logged, and the division result will be printed to the console separately
        console.log(this.eng + this.math + this.phy) / 3;
    }
};

// Call the 'avg' method of the 'alvi' object to calculate and display the average score
alvi.avg();

// Define a function named 'anas'
function anas() {
    // Output 'this', referring to the global object (in a browser environment, it would refer to the 'window' object)
    console.log(this);
}

// Call the 'anas' function
anas();
