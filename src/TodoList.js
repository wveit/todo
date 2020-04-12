import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {

    let todoItems = "empty list";
    if(props.todos) {
        todoItems = props.todos.map((todo) => {
            return <TodoItem key={todo.id} 
                            todo={todo} 
                            onToggleIsComplete={props.onToggleIsComplete}
                            onDelete={props.onDelete} />;
        });
    }

    return (
        <div>{todoItems}</div>
    );
}