import { reflect } from "@effector/reflect";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { TodoList } from "../model";
import * as model from "../model/list";
import * as lib from "../lib";
import { useEffect } from "react";
import { useStore } from "effector-react";

type Props = {
  todos: TodoList[];
  isOpened: boolean;
  goBack: () => void;
};

const View = ({ isOpened, goBack, todos }: Props) => {
  const { t } = useTranslation();
  const id = lib.useGetTodolistIdParams();
  const name = useStore(model.stores.$inputName);
  const selected = useStore(model.stores.$selectedTodoList);

  useEffect(() => {
    model.actions.selectTodoListById(Number(id));
  }, [id, todos]);

  async function update() {
    if (!selected) return;
    await model.actions.updateTodoListFx({
      id: selected.todolistId,
      name,
    });
    goBack();
  }

  if (!todos.length) return null;

  const isSelectedContent = (
    <>
      <DialogTitle>{t("Update name todo-list")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          fullWidth
          value={name}
          onChange={(e) => model.actions.changeName(e.target.value)}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={update}>{t("Change")}</Button>
        <Button onClick={goBack}>{t("Cancel")}</Button>
      </DialogActions>
    </>
  );

  const isNotSelectedContent = (
    <>
      <DialogTitle>{t("To-do list under id not found")}</DialogTitle>
      <DialogActions>
        <Button onClick={goBack}>{t("Сome back")}</Button>
      </DialogActions>
    </>
  );

  return (
    <Dialog open={isOpened} onClose={goBack}>
      {selected ? isSelectedContent : isNotSelectedContent}
    </Dialog>
  );
};

const PopupUpdateTodoList = reflect({
  view: View,
  bind: {
    todos: model.stores.$todoLists,
  },
  hooks: {
    mounted: () => model.actions.resetName(),
    unmounted: () => model.actions.resetName(),
  },
});

export { PopupUpdateTodoList };
