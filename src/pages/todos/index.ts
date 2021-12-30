import { reflect } from "@effector/reflect";
import View from "./ui";
import * as model from "./model";

export const TodosPage = reflect({
  view: View,
  bind: {
    pagination: model.stores.$pagination,
    todos: model.stores.$todos,
    isLoading: model.stores.$isLoading,
  },
  hooks: {
    mounted: model.actions.getTodos
  }
});
