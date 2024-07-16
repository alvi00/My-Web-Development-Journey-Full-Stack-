// Delete a single user by name "Sami"
User.deleteOne({ name: "Sami" })
  .then((res) => {
    // Log the result if the delete operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the delete operation fails
    console.log(err);
  });



// Delete multiple users by name "Ahmad Fahmid"
User.deleteMany({ name: "Ahmad Fahmid" })
  .then((res) => {
    // Log the result if the delete operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the delete operation fails
    console.log(err);
  });



//if I want to know what I deleted
// Find one user by name "Sami" and delete them
User.findOneAndDelete({ name: "Sami" })
  .then((res) => {
    // Log the result if the delete operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the delete operation fails
    console.log(err);
  });

// Find a user by their unique ID and delete them
User.findByIdAndDelete("66968abcf0117dc5fff34ae8")
  .then((res) => {
    // Log the result if the delete operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the delete operation fails
    console.log(err);
  });
