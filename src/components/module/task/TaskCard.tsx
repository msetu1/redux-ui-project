import { CiViewBoard } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { MdDeleteForever } from "react-icons/md";
interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
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

          <h2>{task.title}</h2>
        </div>
        <div className="flex gap-3 items-center text-2xl">
          <MdDeleteForever className="font-bold " />
          <CiViewBoard className="  font-bold" />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
