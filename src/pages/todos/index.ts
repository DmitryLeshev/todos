import { reflect } from "@effector/reflect";
import { todoModel } from "entities/todo";
import { paginationModel } from "features/pagination";

import View from "./ui";

export type TodoList = todoModel.TodoList;
export type TodoItem = todoModel.TodoItem;
export type Pagination = paginationModel.Pagination | null;

export const TodosPage = reflect({
  view: View,
  bind: {
    pagination: paginationModel.createPagination(
      todoModel.actions.getTodosListFx
    ).store,
    todos: todoModel.stores.$todoLists,
    isLoading: todoModel.stores.$isLoadingTodoList,
  },
  hooks: {
    mounted: () => todoModel.actions.getTodosListFx(),
  },
});
