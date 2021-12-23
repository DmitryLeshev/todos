import { useForm } from "effector-forms";
import { Box } from "@mui/system";

import { Copyright } from 'widget/copyright'

import { stores } from "../model";

import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SignInBtn } from "./SignInBtn";
import { ForgotPassword } from "./ForgotPassword";


export const Form: React.FC = () => {
  const { submit } = useForm(stores.form);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
      <EmailInput />
      <PasswordInput />
      <SignInBtn />
      <ForgotPassword />
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};
