import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCard from "../module/task/TaskCard";
import { AddTaskModal } from "../module/task/AddTaskModal";
const Task = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="max-w-[1000px] mx-auto mt-20 px-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal/>
      </div>
      <div className="space-y-5 mt-5">
        {
            tasks?.map((task) =><TaskCard key={task.id} task={task} />)
        }
      </div>
    </div>
  );
};

export default Task;
