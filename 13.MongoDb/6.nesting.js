//suppose i inserted like this 

db.student.insertOne({name:"farah",performance:{marks:100,grade:"A"}});

//it will come out like this

// {
//     _id: ObjectId('66911e40c9e2c48f64e8e3e8'),
//     name: 'farah',
//     performance: { marks: 100, grade: 'A' }
//   }


//now to access this marks

db.student.find({"perfomance.grade":"A"});

