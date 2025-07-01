import ToDo from "@/component/assignment-4/ToDo";

const TodoList = () => {
  return (
    <>
      <p className="question">
        Q6. Build a simple todo list component with a text input for adding new
        tasks and a list to display them. Use controlled components to handle
        the input and update the list of tasks.
      </p>
      <ToDo />
    </>
  );
};
export default TodoList;