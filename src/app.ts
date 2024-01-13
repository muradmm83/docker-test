import express from 'express';
import todoController from './controllers/todoControllers';

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (_, res) => {
    res.send('Hello, World ✌️')
})

app.use('/api/todos', todoController)

app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`)
})