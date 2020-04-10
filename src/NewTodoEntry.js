import React from 'react';

export default function NewTodoEntry(props) {

    function handleOnClick() {
        if(props.onAddTodo)
            props.onAddTodo(document.querySelector(".todo-entry-input").value);
    }

    return (
        <div>
            <input className="todo-entry-input" />
            <button onClick={handleOnClick}>Add Todo</button>
        </div>
    );
}