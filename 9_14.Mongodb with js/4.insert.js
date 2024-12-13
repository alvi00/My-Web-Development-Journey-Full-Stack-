//---------------------------------------//
//Inserting one document at a time
//---------------------------------------//


// Define the User model based on the userSchema
const User = mongoose.model("User", userSchema);

// Define the Product model based on the userSchema (this might be a mistake since it's using the same schema as User)
const Product = mongoose.model("Product", userSchema);

// Create an instance of the User model with the provided details
const User1 = new User({ name: "Ahmad Fahmid", email: "ahmadfahmid59@gmail.com", age: 22 });

// Save User1 to the database
User1.save();

// Create another instance of the User model with different details
const User2 = new User({ name: "Anabia", email: "anabia@gmail.com", age: 2 });

// Save User2 to the database and handle the promise returned
User2.save()
  .then((res) => {
    // Log the result if the save operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the save operation fails
    console.log(err);
  });



//---------------------------------------//
//Inserting multiple document
//---------------------------------------//

// Insert multiple User documents into the database
User.insertMany([
    // First user document
    { name: "Sami", email: "sami@gmail.com", age: 21 },
    // Second user document
    { name: "Sakib", email: "sakib@gmail.com", age: 22 },
    // Third user document
    { name: "Takib", email: "takib@gmail.com", age: 23 }
  ])
  .then((res) => {
    // Log the result if the insertion is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the insertion fails
    console.log(err);
  });
  