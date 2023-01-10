import React from "react";
// import PropTypes from "prop-types";
import { useState } from "react";
import TodoForm from "../TodoForm";

import TodoList2 from "./TodoList2";

TodoFeature2.propTypes = {};

function TodoFeature2(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Hello the World !!!" },
    { id: 2, title: "Welcome to ReactJs" },
    { id: 3, title: "Say Hi to Developer" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    // add new Todo to Todo current list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <h3>New To Do List 2 - Use State Hook</h3>
      <TodoList2 todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default TodoFeature2;
