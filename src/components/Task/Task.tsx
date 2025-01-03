import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCard from "../module/task/TaskCard";
const Task = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="max-w-7xl mx-auto mt-20 px-5">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        <TaskCard />
      </div>
    </div>
  );
};

export default Task;
