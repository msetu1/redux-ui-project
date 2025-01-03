import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter:"all"|"High" | "Medium" | "Low"
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "01",
      title: "Initialized Frontend",
      description:
        "Seamlessly promote efficient collaboration and idea-sharing through client-centric collaboration and idea-sharing.",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter:'all',
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTasks=(state:RootState)=>{
    return state.todo.tasks;
}
export const selectFIlter=(state:RootState)=>{
    return state.todo.filter;
}
export default taskSlice.reducer;
