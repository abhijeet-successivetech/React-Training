import ControlledForm from "@/component/assignment-4/ControlledForm";
const ControlledInputPage = () => {
  return (
    <>
      <p className="question">
        Q2. Build a form that includes various input fields like text inputs,
        checkboxes, and radio buttons. Ensure that each input is a controlled
        component. When the user submits the form, log the form data to the
        console.
      </p>
      <div>
      <ControlledForm/>
      </div>
    </>
  );
};
export default ControlledInputPage;