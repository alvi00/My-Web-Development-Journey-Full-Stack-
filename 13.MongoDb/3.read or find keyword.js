//to print all the documents of a collections
db.student.find();

//to find a collection based on the key value pair
//this retuns like an array
//it returns a cursor means
db.student.find({name:"suprio"});

//suppose i have 10 people named as suprio but I only need to see one then i can use this function
//it returns an actual document
db.student.findOne({name:"suprio"});


//if i wanna find with multiple key value pairs

db.student.find({name:"suprio",roll:13});

