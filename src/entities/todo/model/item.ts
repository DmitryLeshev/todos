import { createEffect, createEvent, createStore, sample } from "effector";
import * as api from "shared/api";

import * as list from "./list";

export type TodoItem = api.todoItem.TodoItem;
export type TodoItems = api.todoItem.TodoItems;

const getTodoItems = createEvent<string | undefined>();
const getTodoItemsFx = createEffect((dto: api.todoItem.DTOGetTodoItems) => {
  return api.todoItem.getTodoItems(dto);
});

const createTodoItemFx = createEffect((dto: api.todoItem.DTOCreateTodoItem) => {
  return api.todoItem.createTodoItem(dto);
});
const updateTodoItemFx = createEffect((dto: api.todoItem.DTOUpdateTodoItem) => {
  return api.todoItem.updateTodoItem(dto);
});
const deleteTodoItemFx = createEffect((dto: api.todoItem.DTODeleteTodoItem) => {
  return api.todoItem.deleteTodoItem(dto);
});

const $todoItems = createStore<TodoItems>([]);
$todoItems.on(getTodoItemsFx.doneData, (_, res) => res.data?.items ?? []);

const $isLoadingTodoItem = getTodoItemsFx.pending;

$todoItems.watch((state) => console.log("Todo Items: ", state));

sample({
  clock: [
    createTodoItemFx.doneData,
    updateTodoItemFx.doneData,
    deleteTodoItemFx.doneData,
    getTodoItems,
  ],
  source: list.stores.$selectedTodoList,
  fn: (selectedTodoList, query) => ({
    todolistId: selectedTodoList?.todolistId ?? 0,
    query: typeof query === "string" ? query : "",
  }),
  target: getTodoItemsFx,
});

export const actions = {
  createTodoItemFx,
  updateTodoItemFx,
  deleteTodoItemFx,
  getTodoItems,
};
export const stores = { $isLoadingTodoItem, $todoItems };
