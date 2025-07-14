"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@/component/assignment-5/ModalComponent";

const PostFormPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div className="container-center">
      <p className="question">
        Q13. Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal’s visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>

      <h1>Reusable Modal</h1>

   
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Button variant="outlined" color="secondary" onClick={handleToggle} style={{ marginLeft: "10px" }}>
        Toggle Modal
      </Button>


      <Modal
        open={open}
        handleClose={handleClose}
        modalContent="This is a dummy content for modal"
        modalHeading="This is heading of modal"
      />
    </div>
  );
};

export default PostFormPage;
