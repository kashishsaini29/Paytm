import express from "express";
import User from "./user.route";

const MainRouter = express.Router();

MainRouter.use('/user',User);


export default MainRouter;