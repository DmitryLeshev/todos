import { apiInstance, BaseResponse } from "../request/base"

const BASE_PATH = "/todolists"

const todosRequest = apiInstance(BASE_PATH);

export type TodoList = {
    "todolistId": number,
    "accountId": number,
    "name": string,
    "createdAt": Date,
    "updatedAt": Date
}

export type Todos = TodoList[];

export type Pagination = {
    "limit": number,
    "currentPage": number;
    "totalPages": number;
    "nextPage"?: string,
    "prevPage"?: string
}

export type DTOCreateTodos = {
    "name": string,
}

export const createTodos = async (dto: DTOCreateTodos): Promise<BaseResponse<TodoList>> => {
    return await todosRequest.post("", dto);
}

export type RESGetTodos = { items: Todos; pagination: Pagination };

export const getTodos = async (query?: string): Promise<BaseResponse<RESGetTodos>> => {
    return await todosRequest.get(`?${query}`);
}


