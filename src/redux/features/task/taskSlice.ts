import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const initialState: IInitialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFIlter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
