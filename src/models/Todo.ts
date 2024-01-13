import { Request, Response } from 'express'
import { Schema, Model, Document, model } from 'mongoose'

export type TodoDocument = Document & {
    title: string;
    desc?: string;
    completed: boolean;
}

export type TodoInput = {
    title: TodoDocument["title"];
    desc?: TodoDocument["desc"];
    completed: TodoDocument["completed"];
}

const schema = new Schema({
    title: { type: Schema.Types.String, required: true },
    desc: { type: Schema.Types.String, required: false },
    completed: { type: Schema.Types.Boolean, default: false },
})

schema.methods.toggle = function () {
    this.completed = !this.completed
}

export const Todo: Model<TodoDocument> = model<TodoDocument>("Todo", schema)

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, desc, completed = false } = req.body;

        if (!title) {
            return res.status(422).json({
                error: 'the field title is required'
            })
        }

        const input: TodoInput = {
            title,
            desc,
            completed
        }

        const todoCreated = await Todo.create(input)
        res.status(201).json({ data: todoCreated });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getAllTodos = async (_: Request, res: Response) => {
    const todos = await Todo.find().sort('-createdAt').exec();

    return res.status(200).json({ data: todos });
}

export const getTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    const todo = await Todo.findOne({ _id: id });

    if (!todo) {
        return res.status(404).json({ message: `Todo with id "${id}" not found.` });
    }

    return res.status(200).json({ data: todo });
}
