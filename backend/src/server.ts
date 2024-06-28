const express = require('express');
import './db/db';
import User from "./routes/user.route";


const app = express();

app.use(express.json());

app.use("/user",User);
// app.get('/',(req,res)=>{


// })


app.listen(2000,function(res:any){
    console.log("listening port: 2000 ");
})
