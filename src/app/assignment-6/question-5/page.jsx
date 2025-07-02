import ModalComponent from "@/component/assignment-6/Modal";

const ModalPage = () => {
  return (
    <>
      <p className="question">
        Q5. Create a Modal component that displays a dialog with content. Users
        should be able to open and close the modal. Write tests using React
        Testing Library to verify that the modal appears and disappears when
        triggered.
      </p>
      <ModalComponent/>
    </>
  );
};
export default ModalPage;