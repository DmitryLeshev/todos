import { SignIn, SignUp } from "../ui/example";

import {
  PopupCreateTodoList,
  PopupDeleteTodoList,
  PopupUpdateTodoList,
} from "entities/todo";

export const params = {
  popup: "popup",
  notificationId: "notification-id",
};

export const popups = {
  createTodo: {
    title: "Create TODO",
    description: "Попап для создания TODO",
    path: `create-todo`,
    component: PopupCreateTodoList,
  },
  deleteTodo: {
    title: "Delete TODO",
    description: "Попап для удаления TODO",
    path: `delete-todo`,
    component: PopupDeleteTodoList,
  },
  updateTodo: {
    title: "Update TODO",
    description: "Попап для удаления TODO",
    path: `update-todo`,
    component: PopupUpdateTodoList,
  },
  signUp: {
    title: "Sign Up",
    description: "Попап для регистрации",
    path: `sign-up`,
    component: SignUp,
  },
  signIn: {
    title: "Sign In",
    description: "Попап для авторизации",
    path: `sign-in`,
    component: SignIn,
  },
  signOut: {
    title: "Sign Out",
    description: "Попап для выхода из системы",
    path: `sign-out`,
    component: PopupCreateTodoList,
  },
  notifications: {
    title: "Notifications",
    description: "Notifications",
    path: `notifications`,
    component: SignIn,
  },
  notificationDetails: {
    title: "Notification Details",
    description: "Notification Details",
    path: `notification-details`,
    component: SignIn,
  },
};
