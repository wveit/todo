import React from 'react';

export default function TodoItem(props) {
    const todo = props.todo;

    function onToggle() {
        if(props.onToggleIsComplete)
            props.onToggleIsComplete(todo.id);
    }

    function handleDelete(e) {
        if(props.onDelete)
            props.onDelete(todo.id);
        e.preventDefault();
    }

    return (
    <div>
        <input type="checkbox" checked={todo.isComplete} onChange={onToggle}/>
        {todo.id}) {todo.text} [<a onClick={handleDelete} href="#">delete</a>]
    </div>
    );
}