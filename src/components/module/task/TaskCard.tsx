import { Button } from "@/components/ui/button";

const TaskCard = () => {
  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="size-3 rounded-full bg-green-500"></div>
          <h2>Task Title</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link"></Button>
        </div>
      </div>
      <p className="mt-5">Task Description</p>
    </div>
  );
};

export default TaskCard;
