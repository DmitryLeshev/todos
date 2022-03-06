import { API_URL } from "shared/config";

export type BaseResponse<T> = {
  status: string;
  code: number;
  data?: T;
  error?: string;
  message?: string;
};

export type Pagination = {
  limit: number;
  currentPage: number;
  totalPages: number;
  nextPage?: string;
  prevPage?: string;
};

export type ResponseWithPagination<T> = {
  items: T;
  pagination: Pagination;
};

export type QuerySearch = {
  name?: string;
  page?: number;
  limit?: number;
};

const clientRequest = async (path: string, options?: any) => {
  return fetch(`${API_URL}/api/v1${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    ...options,
  }).then(async (json) => {
    const response = await json.json();
    return response;
  });
};

// Потенциально, можно передавать accessToken
export const apiInstance = (base_path: string) => {
  return {
    get: async (path: string) => {
      return await clientRequest(`${base_path}${path}`);
    },
    post: async (path: string, data: unknown) => {
      return await clientRequest(`${base_path}${path}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    put: async (path: string, data: unknown) => {
      return await clientRequest(`${base_path}${path}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
    delete: async (path: string, data?: unknown) => {
      return await clientRequest(`${base_path}${path}`, {
        method: "DELETE",
        body: JSON.stringify(data),
      });
    },
  };
};
