import React from 'react';
import FilteredTodoList from './FilteredTodoList';

const TODOS = [
  {isComplete: false, id: 1, text: "go get some katsup from the store"},
  {isComplete: false, id: 2, text: "get some exercise"},
  {isComplete: true, id: 3, text: "do a full and rewarding work day"},
  {isComplete: false, id: 4, text: "eat pizza and other health food"},
  {isComplete: true, id: 5, text: "find out about underwater airplanes"}
];

export default function App() {
  return (
    <FilteredTodoList todos={TODOS} />
  );
}