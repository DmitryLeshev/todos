import * as item from "./item";
import * as list from "./list";

export const stores = { ...list.stores, ...item.stores };
export const actions = { ...list.actions, ...item.actions };

export type TodoItem = item.TodoItem;
export type TodoList = list.TodoList;
