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

export const lastNameRules = [
  {
    name: "lastNameRequired",
    validator: (value: string) => Boolean(value),
  },
  {
    name: "lastNameMin",
    validator: (value: string) => Boolean(value.length >= 3),
  },
];


export const firstNameRules = [
  {
    name: "firstNameRequired",
    validator: (value: string) => Boolean(value),
  },
  {
    name: "firstNameMin",
    validator: (value: string) => Boolean(value.length >= 3),
  },
];

