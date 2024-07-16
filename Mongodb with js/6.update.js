// Update a single user's age to 100 where the name is "Sami"
User.updateOne({ name: "Sami" }, { age: 100 })
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the update operation fails
    console.log(err);
  });

// Update multiple users' age to 100 where the name is "Sami"
User.updateMany({ name: "Sami" }, { age: 100 })
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the update operation fails
    console.log(err);
  });



  //if I want to update and get result at the same time


// Find a single user by name "Sami" and update their age to 12121
//this finds the collection prints it and then updates
User.findOneAndUpdate({ name: "Sami" }, { age: 12121 })
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the update operation fails
    console.log(err);
  });




// Find a single user by name "Sakib" and update their age to 12121
// The { new: true } option returns the modified document rather than the original
//so it edits first then prints
User.findOneAndUpdate({ name: "Sakib" }, { age: 12121 }, { new: true })
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the update operation fails
    console.log(err);
  });



  
// Find a user by their unique ID and update their age to 11
// The { new: true } option returns the modified document rather than the original
User.findByIdAndUpdate("66968e7119001756527521c9", { age: 11 }, { new: true })
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the update operation fails
    console.log(err);
  });
