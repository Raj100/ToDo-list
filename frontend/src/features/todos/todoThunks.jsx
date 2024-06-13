import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(`${baseURL}/api/todos`);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post(`${baseURL}/api/todos`, todo);
  return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, todo }) => {
  const response = await axios.put(`${baseURL}/api/todos/${id}`, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await axios.delete(`${baseURL}/api/todos/${id}`);
  return response.data;
});
