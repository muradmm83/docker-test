# Dockerized Todo App

This a test Todo app to utilize **_Docker_** & **_Docker Compose_**.

### Tools & Framework Used
- Node JS.
- Express JS.
- TypeScript.
- Mongo DB.

### Running the APP
1. Install **_Docker_** & **_Docker Compose_** installed.
1. Clone this repo `git clone git@github.com:muradmm83/docker-test.git`.
1. On your terminal, `cd` to application root directory.
1. Type `docker-compose up -d`.
1. On your browser navigate to `http://localhost:8080`, voila!

### Using Todo RESTful API

You can use a tool such as **_Postman_** to execute **_CRUD_** operations against **_Todo_** RESTful API using the follownig endpoints:
- `GET /api/todos` to list all todos.
- `GET /api/todos/:id` to get a specific todo.
- `POST /api/todos` to create a todo.
- `PUT /api/todos/:id` to update a todo.
- `DELETE /api/todos/:id` to remove a todo.

Todo payload should look like this:
```
{
    "title": "SOME TITLE",
    "desc": "SOME DESCRIPTION",
    "completed": ture or false (default is false)
}
```