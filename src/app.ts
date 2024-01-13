import express, { Response } from 'express';
import todoController from './controllers/todoControllers';
import './db'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (_, res: Response) => {
    res.send('Hello, World ✌️')
})

app.use('/api/todos', todoController)

app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`)
})