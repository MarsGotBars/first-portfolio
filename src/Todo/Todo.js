import React from 'react';


export default function Todo({ todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <li>
            <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <p>{todo.name}</p>
            <span></span>
            </label>
        </li>
    )
}
