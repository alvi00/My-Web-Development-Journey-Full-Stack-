// Define a schema for the User model using Mongoose
const userSchema = new mongoose.Schema({
    // The 'name' field is a string
    name: String,
    // The 'email' field is a string
    email: String,
    // The 'age' field is a number
    age: Number
  });
  





//models are to construct document in a collection

const User=mongoose.model("User",userSchema);

//here const User is a class name actually it is a model then  ("User",userSchema); here user is the name of the collection and userSchema is the name of the schema