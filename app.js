const express = require('express')
const todosController = require('./controllers/todoControllers')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (_, res) => {
    res.send('Hello World 😊!')
})

app.use('/api/todos', todosController)

app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`)
})