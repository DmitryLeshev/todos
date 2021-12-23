import { TextField } from "@mui/material";
import { useField } from "effector-forms";

import { stores } from "../model";

export const FirstNameInput = () => {
  const { value, onChange, errorText } = useField(stores.form.fields.firstName);
  const error = errorText({
    lastNameRequired: "Last Name required",
    lastNameMin: "min lenght 3",
  });

  return (
    <TextField
      required
      fullWidth
      autoComplete="given-name"
      name="firstName"
      id="firstName"
      label="First Name"
      autoFocus
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
