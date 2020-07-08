import React, { useRef } from "react";

export default function NewTodoEntry(props) {
  const textInput = useRef(null);

  function handleAddTodo() {
    if (textInput.current.value === "") return;

    if (props.onAddTodo)
      props.onAddTodo(document.querySelector(".todo-entry-input").value);

    textInput.current.value = "";
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") handleAddTodo();
  }

  return (
    <div>
      <input
        className="todo-entry-input"
        ref={textInput}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
