import TaskList from "@/component/assignment-1/TaskList";

const ListPage = () => {
  const list: string[] = ["wash cloth", "iron suits", "but fruits"];
  return (
    <>
      <div className="container-center">
        <p>
          Q5.Create a functional component named TaskList that accepts an array
          of task names as a prop. Use the map function to render each task name
          as a list item. Import and render the TaskList component in the App
          component with an array of tasks.
        </p>
   
        <br />
        <TaskList listOfTasks={list} />
      </div>
    </>
  );
}
export default ListPage;
