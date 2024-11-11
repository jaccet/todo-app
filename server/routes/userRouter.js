import { pool } from "../helper/db.js";
import { Router } from "express";
import { hash,compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { use } from "chai";
import { postLogin, postRegistration } from "../controllers/userController.js";

const { sign } = jwt;

const router = Router();

router.post('/register', postRegistration);

router.post('/login', postLogin);

export default router;