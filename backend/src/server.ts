const express = require('express');
import './db/db';
// import User from "./routes/user.route";
import MainRouter from './routes/index.route';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use("/paytm/V1",MainRouter);



app.listen(2000,function(res:any){
    console.log("listening port: 2000 ");
})
