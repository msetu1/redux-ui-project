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
  tasks: [
    {
      id: "3B_W3kWTmklrMekEM2Qqo",
      isCompleted: false,
      title: "aaaaaaaa",
      description: "bbbbbb",
      priority: "high",
      dueDate: "2025-01-09T18:00:00.000Z",
    },
  ],
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
    toggleComplete: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFIlter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
