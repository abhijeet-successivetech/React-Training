const TaskList = ({ listOfTasks }) => {
  return (
    <ol>
      {listOfTasks.map((listOfTasks, index) => (
        <li key={index}>{listOfTasks}</li>
      ))}
    </ol>
  );
}
export default TaskList;
