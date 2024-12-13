//to delete one document
db.student.deleteOne({name:"good"});

//to delete multiple document
db.student.deleteMany({roll:{$lt:20}});

//to delete all the collections
db.student.deleteMany({});

//to delere the database
db.dropDatabase();