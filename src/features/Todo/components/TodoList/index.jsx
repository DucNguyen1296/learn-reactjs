import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoclick = (todo, indx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, indx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, indx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoclick(todo, indx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
