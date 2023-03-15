import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { projectInfoAtom } from "src/atom/projectInfoAtom";

// Hook to fetch the todo list from the server
export const useFetchProjectInfo = () => {
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
