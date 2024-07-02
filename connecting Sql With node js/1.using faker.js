//At first i gotta install a package called faker from npm
//then  npm i @faker-js/faker

// Importing the faker library
const { faker } = require('@faker-js/faker');

// Defining a function to create a random user object
let createRandomUser = () => {
  return {
    // Generating a random UUID for userId
    userId: faker.string.uuid(),
    // Generating a random username
    username: faker.internet.userName(),
    // Generating a random email address
    email: faker.internet.email(),
    // Generating a random password
    password: faker.internet.password(),
  };
}

// Logging the generated random user object to the console
console.log(createRandomUser());

