import React from 'react';

export default function TodoItem(props) {
    const todo = props.todo;

    function onToggle() {
        if(props.onToggleIsComplete)
            props.onToggleIsComplete(todo.id);
    }

    return (
    <div>
        <input type="checkbox" checked={todo.isComplete} onChange={onToggle}/>
        {todo.id}) {todo.text}
    </div>
    );
}