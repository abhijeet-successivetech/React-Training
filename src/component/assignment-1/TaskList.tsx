import React from "react";

interface TaskProps {
  listOfTasks: string []
}

const TaskList: React.FC<TaskProps> = ({ listOfTasks }) => {
  return (
    <ol>
      {listOfTasks.map((listOfTasks, index) => (
        <li key={index}>{listOfTasks}</li>
      ))}
    </ol>
  );
}
export default TaskList;
