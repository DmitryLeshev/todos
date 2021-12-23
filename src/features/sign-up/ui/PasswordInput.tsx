import { TextField } from "@mui/material";
import { useField } from "effector-forms";

import { stores } from "../model";

export const PasswordInput = () => {
  const { value, onChange, errorText } = useField(stores.form.fields.hashPassword);
  const error = errorText({
    required: "password required",
    min: "min lenght 3",
  });

  return (
    <TextField
      required
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={!!error}
      helperText={error}
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  );
};
