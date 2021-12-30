import { createEffect, createEvent, createStore, forward } from "effector";
import * as api from 'shared/api';

const getTodosFx = createEffect((query?: string) => {
    console.log("getTodosFx query", query);
    return api.todos.getTodos(query)
});

const getTodos = createEvent<string>();

export type Todos = api.todos.Todos;

const $todos = createStore<Todos>([]);
$todos.on(getTodosFx.doneData, (_, res) => res.data?.items ?? []);

export type Pagination = api.todos.Pagination;

const $pagination = createStore<Pagination | null>(null);
$pagination.on(getTodosFx.doneData, (_, res) => res.data?.pagination ?? null);

const $isLoading = getTodosFx.pending;

$todos.watch((state) => console.log("Todos: ", state))

forward({
    from: getTodos,
    to: getTodosFx
})

export const actions = { getTodos };
export const stores = { $isLoading, $pagination, $todos };
