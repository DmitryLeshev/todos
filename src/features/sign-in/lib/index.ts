export const emailRules = [
  {
    name: "email",
    validator: (value: string) => /\S+@\S+\.\S+/.test(value),
  },
];

export const passwordRules = [
  {
    name: "required",
    validator: (value: string) => Boolean(value),
  },
  {
    name: "min",
    validator: (value: string) => Boolean(value.length >= 3),
  },
];

// type User = {
//   username: string;
//   about?: string;
//   birhDate?: string;
// };

// const getUserProfileFx = createEffect<void, User, Error>();

// forward({
//   from: getUserProfileFx.doneData,
//   to: form.setForm,
// });
