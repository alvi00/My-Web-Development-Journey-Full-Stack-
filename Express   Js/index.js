const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("Request received");
    let code={
        name:"Alvi",
        id:"2232502642"
    }
    res.send(code);
 
});