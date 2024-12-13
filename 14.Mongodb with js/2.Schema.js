// Define a schema for the User model using Mongoose
const userSchema = new mongoose.Schema({
    // The 'name' field is a string
    name: String,
    // The 'email' field is a string
    email: String,
    // The 'age' field is a number
    age: Number
  });
  