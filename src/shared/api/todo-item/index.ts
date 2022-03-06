import { base } from "../_request";

const BASE_PATH = "/todolists";

const todoItemsRequest = base.apiInstance(BASE_PATH);

export type TodoItemResponse<T> = base.BaseResponse<T>;

export type TodoItem = {
  todolistId: number;
  accountId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TodoItems = TodoItem[];

export type DTOCreateTodoItem = {
  todolistId: number;
  name: string;
  description?: string;
};

export const createTodoItem = async (
  dto: DTOCreateTodoItem
): Promise<TodoItemResponse<TodoItem>> => {
  return await todoItemsRequest.post(`/${dto.todolistId}/todoitems`, {
    ...dto,
  });
};

export type RESTodoItems = base.ResponseWithPagination<TodoItems>;

export type DTOGetTodoItems = {
  todolistId: number;
  query: string;
};

export const getTodoItems = async (
  dto: DTOGetTodoItems
): Promise<TodoItemResponse<RESTodoItems>> => {
  return await todoItemsRequest.get(
    `/${dto.todolistId}/todoitems?${dto.query}`
  );
};

export type DTODeleteTodoItem = {
  todolistId: number;
  todoitemId: number;
};

export const deleteTodoItem = async (
  dto: DTODeleteTodoItem
): Promise<TodoItemResponse<undefined>> => {
  return await todoItemsRequest.delete(
    `/${dto.todolistId}/todoitems/${dto.todoitemId}`
  );
};

export type DTOUpdateTodoItem = {
  todolistId: number;
  todoitemId: number;
  name?: string;
  description?: string;
  active?: boolean;
  completed?: boolean;
};

export const updateTodoItem = async (
  dto: DTOUpdateTodoItem
): Promise<TodoItemResponse<TodoItem>> => {
  return await todoItemsRequest.put(
    `/${dto.todolistId}/todoitems/${dto.todoitemId}`,
    { ...dto }
  );
};
