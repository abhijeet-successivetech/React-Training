import InputField from "@/component/assignment-4/InputField";

const InputPage = () => {
  return (
    <>
      <p className="question">
        Q1. Create a React component with an input field. Implement it as a
        controlled component where the input value is controlled by the
        component's state. When the user types into the input field, the
        component's state should update accordingly.
      </p>
      <div>
      <InputField />
      </div>
    </>
  );
};
export default InputPage;