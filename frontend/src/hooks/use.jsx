import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

// Define the todo list atom
const todoListState = atom({
  key: "todoListState",
  default: [],
});

// Hook to fetch the todo list from the server
export const useFetchTodos = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const fetchTodos = useCallback(async () => {
    try {
      const response = await axios.get("/api/todos");
      setTodoList(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [setTodoList]);
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return todoList;
};

// Hook to create a new todo
export const useCreateTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const createTodo = useCallback(
    async (text) => {
      try {
        const response = await axios.post("/api/todos", { text });
        setTodoList([...todoList, response.data]);
      } catch (error) {
        console.error(error);
      }
    },
    [todoList, setTodoList]
  );

  return createTodo;
};

// Hook to update a todo
export const useUpdateTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const updateTodo = useCallback(
    async (id, updates) => {
      try {
        const response = await axios.patch(`/api/todos/${id}`, updates);
        const updatedTodoList = todoList.map((todo) =>
          todo.id === id ? response.data : todo
        );
        setTodoList(updatedTodoList);
      } catch (error) {
        console.error(error);
      }
    },
    [todoList, setTodoList]
  );

  return updateTodo;
};
