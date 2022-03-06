import { useEffect } from "react";
import { useStore } from "effector-react";
import { reflect } from "@effector/reflect";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { TodoList } from "../model";
import * as model from "../model/list";
import * as lib from "../lib";

type Props = {
  todos: TodoList[];
  isOpened: boolean;
  goBack: () => void;
};

const View = ({ isOpened, goBack, todos }: Props) => {
  const { t } = useTranslation();
  const id = lib.useGetTodolistIdParams();
  const selected = useStore(model.stores.$selectedTodoList);

  useEffect(() => {
    model.actions.selectTodoListById(Number(id));
  }, [id, todos]);

  async function deleteTodoList() {
    console.log("Selected", selected);
    if (!selected) return;
    await model.actions.deleteTodoListFx({
      id: selected.todolistId,
    });
    goBack();
  }

  if (!todos.length) return <CircularProgress />;

  return (
    <Dialog open={isOpened} onClose={goBack}>
      <DialogTitle>{t("Delete list")}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t("Are you sure you want to delete?")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteTodoList}>{t("Yes")}</Button>
        <Button onClick={goBack}>{t("No")}</Button>
      </DialogActions>
    </Dialog>
  );
};

const PopupDeleteTodoList = reflect({
  view: View,
  bind: {
    todos: model.stores.$todoLists,
  },
});

export { PopupDeleteTodoList };
