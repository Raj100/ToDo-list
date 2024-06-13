import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todoThunks";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text); // State to hold updated text for editing
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(
      updateTodo({
        id: todo._id,
        todo: { ...todo, completed: !todo.completed },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const handleUpdate = () => {
    if (edit) {
      // Dispatch update action only when in edit mode
      dispatch(
        updateTodo({
          id: todo._id,
          todo: { ...todo, text: updatedText },
        })
      );
    }
    setEdit(!edit); // Toggle edit mode
  };

  const handleChange = (e) => {
    setUpdatedText(e.target.value); // Update state with the new text when editing
  };

  return (
    <div className="list-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {!edit ? (
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
        ) : (
          <input
            type="text"
            value={updatedText}
            onChange={handleChange}
            autoFocus // Focus input field when editing starts
          />
        )}
      </div>

      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>{edit ? "Save" : "Edit"}</button>
      </div>
    </div>
  );
};

export default TodoItem;
