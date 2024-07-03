const express = require('express');
import { authenticateJWT } from "../middlewares/auth.middleware";
import { getBalanceService, transfer } from "../services/amount.service";

const Account= express.Router();

Account.get('/get',authenticateJWT,getBalanceService);
Account.post('/transfer',authenticateJWT,transfer)
export default Account;