//int this website i can know about the operators https://www.mongodb.com/docs/manual/reference/operator/query/


//to find greater than use $gt

db.student.find({roll:{$gt:12}})


//to find greater than equal to $gte

db.student.find({roll:{$gte:12}})


//to find equal to $eq

db.student.find({roll:{$eq:12}})


//to find if it exits in the list $in

db.student.find({roll:{$in:[11,12,13,14]}});



//if i wanna use or operator $or

db.student.find({$or:[{roll:{$eq:12}},{name:{$eq:"alvi"}}]});

//if i wanna use and operator $and

db.student.find({$and:[{roll:{$eq:12}},{name:{$eq:"ALVI"}}]});

