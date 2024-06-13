import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../features/todos/todoThunks';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const todoStatus = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(fetchTodos());
    }
  }, [todoStatus, dispatch]);

  let content;

  if (todoStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (todoStatus === 'succeeded') {
    content = todos.map((todo) => (
      <TodoItem key={todo._id} todo={todo} />
    ));
  } else if (todoStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default TodoList;
