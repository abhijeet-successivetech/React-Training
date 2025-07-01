import ControlledInput from "@/component/assignment-4/ControlledInput";

const DisplayPage = () => {
  return (
    <>
      <p className="question">
        Q3. Create a component with controlled input field and a button. When
        the user enters a specific value into the input (e.g., "show"), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </p>
      <div>
        <ControlledInput />
      </div>
    </>
  );
};
export default DisplayPage;
