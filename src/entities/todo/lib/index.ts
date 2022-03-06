export * from "./use-get-todolistid-params";

export const nameRules = [
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
