import { reflect } from "@effector/reflect";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

import * as model from "../model/list";

type Props = {
  isOpened: boolean;
  goBack: () => void;
};

const View = ({ isOpened, goBack }: Props) => {
  const { t } = useTranslation();
  const name = useStore(model.stores.$inputName);

  async function create() {
    const list = await model.actions.createTodoListFx({ name });
    model.actions.resetName();
    goBack();
  }

  return (
    <Dialog open={isOpened} onClose={goBack}>
      <DialogTitle>{t("Add new list")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t("Enter a name for the list")}</DialogContentText>
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
        <Button onClick={create}>{t("Create")}</Button>
        <Button onClick={goBack}>{t("Cancel")}</Button>
      </DialogActions>
    </Dialog>
  );
};

const PopupCreateTodoList = reflect({
  view: View,
  bind: {},
  hooks: {
    mounted: () => model.actions.resetName(),
    unmounted: () => model.actions.resetName(),
  },
});

export { PopupCreateTodoList };
