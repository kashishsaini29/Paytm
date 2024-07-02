import express from "express";
import User from "./user.route";
import Account from "./bankAccount.route";

const MainRouter = express.Router();

MainRouter.use('/user',User);
MainRouter.use('/account',Account);



export default MainRouter;