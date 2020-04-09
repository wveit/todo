import React from 'react';

export default function TodoList(props) {

    let todoItems = "empty list";
    if(props.todos) {
        todoItems = props.todos.map((item) => <div key={item.id}>{item.id}) {item.text} [{item.isComplete ? "complete" : "not complete"}]</div>);
    }

    return (
        <div>{todoItems}</div>
    );
}