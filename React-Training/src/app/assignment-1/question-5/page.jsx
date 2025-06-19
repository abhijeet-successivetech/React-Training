import TaskList from "@/component/assignment-1/TaskList";

const showList = () => {
  const list = [
    "wash cloth",
    "iron suits",
    "but fruits"
  ]
  return (
    <>
    <div>
    <p>
      Q5.Create a functional component named TaskList that accepts an array of task names as a prop.<br />
      Use the map function to render each task name as a list item.<br />
      Import and render the TaskList component in the App component with an array of tasks.<br />
    </p>
    </div>

    <div>
      <br />
      <TaskList listOfTasks={list}/>
      
    </div>
    </>
  );
};

export default showList;