import { base } from "../_request";

const BASE_PATH = "/todolists";

const todosRequest = base.apiInstance(BASE_PATH);

export type TodoList = {
  todolistId: number;
  accountId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TodoLists = TodoList[];

export type DTOCreateTodo = {
  name: string;
};

export const createTodo = async (
  dto: DTOCreateTodo
): Promise<base.BaseResponse<TodoList>> => {
  return await todosRequest.post("", dto);
};

export type RESGetTodos = { items: TodoLists; pagination: base.Pagination };

export const getTodos = async (
  query?: string
): Promise<base.BaseResponse<RESGetTodos>> => {
  return await todosRequest.get(`?${query}`);
};

export type DTODeleteTodo = {
  id: number;
};

export const deleteTodo = async (
  dto: DTODeleteTodo
): Promise<base.BaseResponse<undefined>> => {
  return await todosRequest.delete(`/${dto.id}`);
};

export type DTOUpdateTodo = {
  id: number;
  name: string;
};

export const updateTodo = async (
  dto: DTOUpdateTodo
): Promise<base.BaseResponse<TodoList>> => {
  return await todosRequest.put(`/${dto.id}`, { ...dto });
};

export type DTOCreateTodoItem = {
  id: number;
  name: string;
};
