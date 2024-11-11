import { pool } from '../helper/db.js';
import { Router } from 'express';
import { emptyOrRows } from '../helper/utils.js';
import { auth } from '../helper/auth.js';
import { deleteTaskById, getTasks, postTask } from '../controllers/TaskController.js';

const router = Router();

router.get('/', getTasks);

router.post('/create',auth, postTask);

router.delete('/delete/:id',auth, deleteTaskById);

export default router;