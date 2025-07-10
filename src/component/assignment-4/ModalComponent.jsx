"use client";
import {Box, Button, Modal, TextField, Typography,} from "@mui/material";

import { useState } from "react";

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
  });
  const [show, setShow] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleClose();
    setShow((prev) => !prev);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 8,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container-center" style={{ textAlign: "center", marginTop: "20px" }}>
      {show && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Name: {formData.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Age: {formData.age}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Address: {formData.address}
          </Typography>
        </Box>
      )}
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={submitHandler} component={"form"} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Enter Details
          </Typography>

          <TextField
            type="text"
            label="Name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <TextField
            type="number"
            label="Age"
            error={formData.age < 0}
            helperText={formData.age < 0 ? "Age cannot be negative" : ""}
            name="age"
            value={formData.age}
            onChange={changeHandler}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <TextField
            type="text"
            label="Address"
            name="address"
            value={formData.address}
            onChange={changeHandler}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1, borderRadius: "4px", textTransform: "none" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
