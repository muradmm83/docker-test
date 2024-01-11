const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: false },
    completed: { type: Boolean, default: false },
})

schema.methods.toggle = function () {
    this.completed = !this.completed
}

const Todo = mongoose.model("Todo", schema)

module.exports = Todo