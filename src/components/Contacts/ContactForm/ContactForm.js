import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import { useState } from "react";
import PhoneField from "./PhoneField";

const formControlSx = { mb: 2, width: "100%" };

export default function ContactForm({ addContact, handleClose }) {
  const [values, setValues] = useState({}),
    [errors, setError] = useState({});

  const validateForm = (values) => {
    const newErrors = {};
    if (!values.phone) {
      newErrors.phone = "Номер телефону обовьязновий";
    }
    if (!values.firstName) {
      newErrors.firstName = "Іʼмя обовьязкове";
    }
    if (!values.lastName) {
      newErrors.lastName = "Призвище обовьязкове";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setValues((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(values)) {
      addContact(values);
      handleClose();
      setValues({});
    }
  };
  return (
    <Box onSubmit={handleSubmit} component="form" sx={{ mt: 3 }}>
      <FormControl sx={formControlSx}>
        <TextField
          onChange={handleChange}
          name="firstName"
          label="Іʼмя"
          variant="outlined"
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
      </FormControl>
      <FormControl sx={formControlSx}>
        <TextField
          onChange={handleChange}
          name="lastName"
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          label="Призвище"
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={formControlSx}>
        <PhoneField
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          name="phone"
          label="Номер телефону"
          onChange={handleChange}
          variant="outlined"
        />
      </FormControl>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        flexWrap="wrap"
      >
        <Button type="submit" size={"large"} variant="contained">
          Створити
        </Button>
        <Button onClick={handleClose} size={"large"} variant="outlined">
          Скасувати
        </Button>
      </Stack>
    </Box>
  );
}
