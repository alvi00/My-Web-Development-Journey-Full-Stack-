// Define an object named 'alvi'
let alvi = {
    // Properties for subject scores
    eng: 99,    // English score
    math: 100,  // Math score
    phy: 98,    // Physics score

    // Method to calculate average score
    avg: function() {
        // Calculate the sum of scores and divide by the number of subjects (3)
        console.log((this.eng + this.math + this.phy) / 3); // Output the average score
    }
};

// Call the 'avg' method of the 'alvi' object to calculate and display the average score
alvi.avg();
