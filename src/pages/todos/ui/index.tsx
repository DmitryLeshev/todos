import React from "react";

import { Button, Divider, InputBase, Typography } from "@mui/material";
import { Box, styled, useTheme, alpha } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ListTodoList } from "entities/todo";

import { Pagination } from "features/pagination";

import { DefaultTemplate, ScrollBar } from "shared/ui";
import { Icon } from "shared/assets";

import type { TodoList, Pagination as PaginationType } from "./..";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.3)}`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    // backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
  transition: "all 0.3s",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type Props = {
  todos: TodoList[];
  pagination: PaginationType;
  isLoading: boolean;
};
const TodosPage: React.FC<Props> = ({ todos, pagination, isLoading }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <DefaultTemplate helmet="home-page" scrollbar style={{}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Typography padding={3} variant="h3" color="black">
          TodosPage
        </Typography>

        <Divider />

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: theme.spacing(2, 0),
          }}
        >
          <Search>
            <SearchIconWrapper>
              <Icon.SearchIcon sx={{ opacity: 0.5 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="outlined"
            color="success"
            onClick={() => navigate("?popup=create-todo")}
          >
            {t("Create")}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            marginRight: -2,
            position: "relative",
          }}
        >
          <ScrollBar>
            <ListTodoList
              sx={{
                paddingRight: 2,
                paddingBottom: 0.1,
              }}
              todos={todos}
            />
          </ScrollBar>
        </Box>
      </Box>
      <Pagination pagination={pagination} />
    </DefaultTemplate>
  );
};

export default TodosPage;
