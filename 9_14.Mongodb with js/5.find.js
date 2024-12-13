//https://mongoosejs.com/docs/api/model.html check here for more
//this find function doesnt return a promise
//this returns a query object



// Find all users in the database
User.find({})
  .then((res) => {
    // Log the result if the find operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the find operation fails
    console.log(err);
  });





// Find one user where the name is "Sami" and age is greater than or equal to 21
User.findOne({ name: { $eq: "Sami" }, age: { $gte: 21 } })
  .then((res) => {
    // Log the name of the user if the find operation is successful
    console.log(res.name);
  })
  .catch((err) => {
    // Log the error if the find operation fails
    console.log(err);
  });





// Find all users where the age is greater than 21
User.find({ age: { $gt: 21 } })
  .then((res) => {
    // Loop through the results and log the name of each user
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].name);
    }
  })
  .catch((err) => {
    // Log the error if the find operation fails
    console.log(err);
  });





// Find a user by their unique ID
User.findById("66968e7119001756527521c9")
  .then((res) => {
    // Log the result if the find operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log the error if the find operation fails
    console.log(err);
  });



User.findById("66968e7119001756527521c9").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});