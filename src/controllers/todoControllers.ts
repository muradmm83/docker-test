import { Router } from 'express'
import { createTodo, getAllTodos, getTodo } from '../models/Todo'

const router = Router()

router.get('/', getAllTodos)

router.post('/', createTodo)

router.get('/:id', getTodo)

export default router