import { createEffect, createEvent, createStore, sample } from "effector";
import * as api from "shared/api";

export type TodoList = api.todoList.TodoList;
export type TodoLists = api.todoList.TodoLists;

const resetTodoList = createEvent();

const getTodosListFx = createEffect((query?: string) => {
  console.log("GetTodosListFx Query: ", query);
  return api.todoList.getTodos(query);
});
const createTodoListFx = createEffect((dto: api.todoList.DTOCreateTodo) => {
  return api.todoList.createTodo(dto);
});
const updateTodoListFx = createEffect((dto: api.todoList.DTOUpdateTodo) => {
  return api.todoList.updateTodo(dto);
});
const deleteTodoListFx = createEffect((dto: api.todoList.DTODeleteTodo) => {
  return api.todoList.deleteTodo(dto);
});

const $todoLists = createStore<TodoLists>([]);
$todoLists.on(getTodosListFx.doneData, (_, res) => res.data?.items ?? []);
$todoLists.reset(resetTodoList);

const selectTodoList = createEvent<TodoList | null>();
const resetSelectTodoList = createEvent();
const selectTodoListById = createEvent<number>();

const $selectedTodoList = createStore<TodoList | null>(null);

$selectedTodoList.on(selectTodoList, (_, todolist) => todolist);
$selectedTodoList.reset(resetSelectTodoList);

const $isLoadingTodoList = getTodosListFx.pending;

$todoLists.watch((state) => console.log("Todos: ", state));
$selectedTodoList.watch((state) => console.log("SelectedTodoList: ", state));

const $query = createStore<{
  name?: string;
  page?: number;
  limit?: number;
} | null>({ page: 2, limit: 5 });

sample({
  clock: selectTodoListById,
  source: $todoLists,
  fn: (todos, selectedId) =>
    todos.find((t) => t.todolistId === selectedId) ?? null,
  target: selectTodoList,
});

sample({
  clock: [
    createTodoListFx.doneData,
    updateTodoListFx.doneData,
    deleteTodoListFx.doneData,
  ],
  target: getTodosListFx,
});

const resetName = createEvent();
const changeName = createEvent<string>();
const $inputName = createStore<string>("");
$inputName.on(changeName, (_, name) => name);
$inputName.reset(resetName);

export const actions = {
  getTodosListFx,
  createTodoListFx,
  updateTodoListFx,
  deleteTodoListFx,
  resetSelectTodoList,
  resetTodoList,
  selectTodoList,
  selectTodoListById,
  resetName,
  changeName,
};
export const stores = {
  $isLoadingTodoList,
  $todoLists,
  $selectedTodoList,
  $inputName,
};
