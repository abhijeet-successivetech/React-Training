import PasswordValidate from "@/component/assignment-4/PasswordValidate";

const DisplayPage = () => {
  return (
    <>
      <p className="question">
        Q4. Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </p>
      <PasswordValidate />
    </>
  );
};

export default DisplayPage;