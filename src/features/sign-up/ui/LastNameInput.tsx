import { TextField } from "@mui/material";
import { useField } from "effector-forms";

import { stores } from "../model";

export const LastNameInput = () => {
  const { value, onChange, errorText } = useField(stores.form.fields.lastName);
  const error = errorText({
    lastNameRequired: "Last Name required",
    lastNameMin: "min lenght 3",
  });

  return (
    <TextField
      required
      fullWidth
      id="lastName"
      label="Last Name"
      name="lastName"
      autoComplete="family-name"
      autoFocus
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
