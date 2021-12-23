export const navigation = {
  signIn: {
    title: "Sign In",
    description: "Страница для авторизации",
    image: "image",
    path: `sign-in`,
  },
  signUp: {
    title: "Sign Up",
    description: "Страница для регистрации",
    image: "image",
    path: `sign-up`,
  },
  home: {
    title: "Home",
    description: "description",
    image: "image",
    path: `home`,
  },
} as const;

export const unauthorized = {
  signIn: {
    title: "Sign In",
    description: "Страница для авторизации",
    image: "image",
    path: `sign-in`,
  },
  signUp: {
    title: "Sign Up",
    description: "Страница для регистрации",
    image: "image",
    path: `sign-up`,
  },
}

export const authorized = {
  home: {
    title: "Home",
    description: "description",
    image: "image",
    path: `home`,
  },
  todos: {
    title: "Todos",
    description: "description",
    image: "image",
    path: `todos`,
  },
  accounts: {
    title: "Accounts",
    description: "description",
    image: "image",
    path: `accounts`,
  },
  settings: {
    title: "Settings",
    description: "description",
    image: "image",
    path: `settings`,
  },
}

export type NavigationConfig = typeof navigation;
