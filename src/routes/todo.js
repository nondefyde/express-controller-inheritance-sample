import {Router} from 'express';
import TodoModel from '../models/todo';
import TodoController from '../controllers/todo';
const router = Router();
const todoCtrl = new TodoController(TodoModel);

router.route('/todos')
	.post(todoCtrl.create);

export default router;
