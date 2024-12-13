//https://www.mongodb.com/docs/manual/tutorial/update-documents-with-aggregation-pipeline/
//from the upper link we can get infos of update operator

//this is you can make an update 
//where i changed the roll to 14 where the name is AlVI
db.student.updateOne({name:"ALVI"},{$set:{roll:14}});
db.student.updateOne({roll:1000},{$set:{name:"good",roll:12}});

//this is how you can update many documents at once
db.student.updateMany({roll:13},{$set:{name:"good"}});
db.student.updateMany({roll:13},{$set:{name:"good",roll:1000}});


//this is how you can replace key value pairs
//try to replace all the key and values
db.student.replaceOne({name:"fahmid"},{name:"Sakib",roll:50});

