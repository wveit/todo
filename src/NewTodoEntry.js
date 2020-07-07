import React, { useRef } from "react";

export default function NewTodoEntry(props) {
  const textInput = useRef(null);

  function handleOnClick() {
    if (props.onAddTodo)
      props.onAddTodo(document.querySelector(".todo-entry-input").value);

    textInput.current.value = "";
  }

  return (
    <div>
      <input className="todo-entry-input" ref={textInput} />
      <button onClick={handleOnClick}>Add Todo</button>
    </div>
  );
}
