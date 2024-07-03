const express = require('express');
import './db/db';
// import User from "./routes/user.route";
import MainRouter from './routes/index.route';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const PORT = parseInt(process.env.PORT || '9000', 10);
const app = express();

app.use(cors());

app.use(express.json());

app.use("/paytm/V1",MainRouter);



app.listen(PORT,function(res:any){
    console.log(`listening port: ${PORT} `);
})
