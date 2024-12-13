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


//here await Listing.findByIdAndUpdate(id,{...req.body.listing}); 
//by this ...req.body.listing all the edits of the key values will be done auto if in form I do like this 
//<input type="text" name="listing[tittle]" value=<%= listing.tittle %>> this thing listing[tittle] 

app.put("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listings");
  }
});

//Context of this 
    <form action="/listings/<%=listing._id%>?_method=PUT" method="post">
        <input type="text" name="listing[tittle]" value=<%= listing.tittle %>>
        <br><br>
        <textarea name="listing[description]" cols="30" rows="10"><%= listing.description %></textarea>
        <br><br>
        <input type="text" name="listing[image]" type="text" value=<%= listing.image %>>
        <br><br>
        <input type="number" name="listing[price]" value=<%= listing.price %>>
        <br><br>
        <input type="text" name="listing[location]" value=<%= listing.location %>>
        <br><br>
        <input type="text" name="listing[country]" value=<%= listing.country %>>
        <br><br>
        <button>Submit</button>
        <br><br>
    </form>

