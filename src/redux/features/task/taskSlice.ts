import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
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
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
