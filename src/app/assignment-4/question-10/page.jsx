import FormValidation from "@/component/assignment-4/FormValidation";
const FormPage = () => {
  return (
    <>
      <p className="question">
        Q10. Create a form with Material-UI text fields and implement form
        validation. Ensure that error messages are displayed when the user
        enters invalid data.
      </p>
      <div>
      <FormValidation/>
      </div>
    </>
  );
};
export default FormPage;