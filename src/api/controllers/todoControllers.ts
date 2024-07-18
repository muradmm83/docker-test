import { Router } from 'express'
import { createTodo, getAllTodos, getTodo, removeTodo, updateTodo } from '../models/Todo'

const router = Router()

router.get('/', getAllTodos)
router.post('/', createTodo)
router.get('/:id', getTodo)
router.put('/:id', updateTodo)
router.delete('/:id', removeTodo)

export default router