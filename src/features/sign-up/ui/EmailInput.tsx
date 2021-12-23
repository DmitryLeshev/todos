import { TextField } from "@mui/material";
import { useField } from "effector-forms";

import { stores } from "../model";

export const EmailInput = () => {
  const { value, onChange, errorText } = useField(stores.form.fields.email);
  const error = errorText({
    email: "you must enter a valid email address",
  });

  return (
    <TextField
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
