import React from "react";

import { useTranslation } from "react-i18next";

import { Typography, useTheme } from "@mui/material";
import { Box, alpha, SxProps, Theme } from "@mui/system";

import { TodoList } from "../model/list";

import {
  DeleteListButton,
  UpdateListButton,
  OpenListItemButton,
} from "./list-actions";

type Props = {
  todos: TodoList[];
  sx?: SxProps<Theme>;
};

const ListTodoList: React.FC<Props> = ({ todos, sx }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        margin: 0,
        padding: 0,
        ...sx,
      }}
    >
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </Box>
  );
};

type TodoListItemProps = {
  todo: TodoList;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: `solid 1px ${alpha(theme.palette.common.black, 0.3)}`,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          padding: 2,
          width: "100%",
        }}
      >
        <Typography variant="h6">{todo.name}</Typography>
        <OpenListItemButton />
        <UpdateListButton todolistId={todo.todolistId} />
        <DeleteListButton todolistId={todo.todolistId} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          padding: theme.spacing(1, 2),
          backgroundColor: theme.palette.divider,
          borderTop: `solid 1px ${alpha(theme.palette.common.black, 0.3)}`,
          width: "100%",
        }}
      >
        <Typography variant="caption">
          {t("Craete on")}: <small>{todo.createdAt}</small>
        </Typography>
        <Typography variant="caption">
          {t("Update on")}: <small>{todo.updatedAt}</small>
        </Typography>
      </Box>
    </Box>
  );
};

export { ListTodoList };
