import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { projectInfoAtom } from "src/atom/projectInfoAtom";

// Hook to fetch the todo list from the server
export const useFetchTodos = () => {
  const [projectInfo, setProjectInfo] = useRecoilState(projectInfoAtom);

  const fetchTodos = useCallback(async () => {
    try {
      const response = await axios.get("/api/todos");
      setProjectInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [setProjectInfo]);
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return projectInfo;
};

// Hook to create a new todo
export const useCreateTodo = () => {
  const [projectInfo, setProjectInfo] = useRecoilState(projectInfoAtom);

  const createTodo = useCallback(
    async (text) => {
      try {
        const response = await axios.post("/api/todos", { text });
        setProjectInfo([...projectInfo, response.data]);
      } catch (error) {
        console.error(error);
      }
    },
    [projectInfo, setProjectInfo]
  );

  return createTodo;
};

// Hook to update a todo
export const useUpdateTodo = () => {
  const [projectInfo, setProjectInfo] = useRecoilState(projectInfoAtom);

  const updateTodo = useCallback(
    async (id, updates) => {
      try {
        const response = await axios.patch(`/api/todos/${id}`, updates);
        const updatedprojectInfo = projectInfo.map((todo) =>
          todo.id === id ? response.data : todo
        );
        setProjectInfo(updatedprojectInfo);
      } catch (error) {
        console.error(error);
      }
    },
    [projectInfo, setProjectInfo]
  );

  return updateTodo;
};
