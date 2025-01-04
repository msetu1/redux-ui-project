import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TaskCard from "../module/task/TaskCard";
import { AddTaskModal } from "../module/task/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-[1000px] mx-auto mt-20 px-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>

        <div className="flex items-center gap-5">
          {/* tabs */}
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger
                onClick={() => dispatch(updateFilter("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("high"))}
                value="high"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
