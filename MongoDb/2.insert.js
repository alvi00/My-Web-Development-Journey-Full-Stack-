//to use a database
use student

//then to insert anything to the database
//if there is no collections called student
//it will make one collection called student
//and if already exist any collection called student then i will indert document to the collection
//by insertone you can insert one document at a time
db.student.insertOne({name:"Alvi",marks:123});
//it will insert then document i mean this name:"Alvi",marks:123 to the student collection

//so what are the collections in the database
show collections;

//so see all the infomation inside the collections
db.student.find();



//but i want to store multiple document at once then 
//i have to user inserMany function
db.student.insertMany([{name:"fahmid",roll:55},{name:"raquib",roll:1}]);