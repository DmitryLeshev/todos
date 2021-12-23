import { forward } from "effector";

import { form, resetFx } from './form'
import { signIn, signInFx } from './sign-in'

forward({
  from: form.formValidated,
  to: signIn,
});

forward({
  from: signInFx.doneData,
  to: resetFx,
});

export const stores = { form };

export const actions = { signInFx };
