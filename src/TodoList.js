import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const create = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    const update = (id, updatedTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo));
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            remove={remove}
            update={update}
        />
    ));

    return (
        <div className="TodoList">
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList;