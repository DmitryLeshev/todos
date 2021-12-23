import { forward } from "effector";

import { form, resetFx } from './form'
import { signUp, signUpFx } from './sign-in'

forward({
  from: form.formValidated,
  to: signUp,
});

forward({
  from: signUpFx.doneData,
  to: resetFx,
});

export const stores = { form };

export const actions = { signUpFx };
