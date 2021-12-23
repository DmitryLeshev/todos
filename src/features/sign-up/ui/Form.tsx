import { useForm } from "effector-forms";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import { Copyright } from 'widget/copyright'

import { stores } from "../model";

import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SignInBtn } from "./SignInBtn";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { AlreadyAccount } from "./AlreadyAccount";


export const Form: React.FC = () => {
  const { submit } = useForm(stores.form);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FirstNameInput />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LastNameInput />
        </Grid>
        <Grid item xs={12}>
          <EmailInput />

        </Grid>
        <Grid item xs={12}>
          <PasswordInput />

        </Grid>
      </Grid>
      <SignInBtn />
      <AlreadyAccount />
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};
