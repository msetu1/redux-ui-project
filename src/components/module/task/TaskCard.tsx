import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";
import { deleteTask, toggleComplete } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { MdDeleteForever } from "react-icons/md";
interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full ", {
              "bg-green-500": task.priority == "low",
              "bg-yellow-500": task.priority == "medium",
              "bg-red-500": task.priority == "high",
            })}
          ></div>

          <h2 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h2>
        </div>
        <div className="flex gap-3 items-center text-2xl">
          <MdDeleteForever
            onClick={() => dispatch(deleteTask(task.id))}
            className="font-bold "
          />
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleComplete(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
