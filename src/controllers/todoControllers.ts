import express from 'express'
import Todo from '../models/Todo'

const router = express.Router()

router.get('/', async (_, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found!' })
        }

        res.json(todo)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

export default router