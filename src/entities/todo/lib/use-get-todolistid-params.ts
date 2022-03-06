import { useGetParameter } from "shared/utils";

import { TODOLIST_ID_URL_PARAM } from "../config";

export const useGetTodolistIdParams = () => {
  return useGetParameter(TODOLIST_ID_URL_PARAM);
};
