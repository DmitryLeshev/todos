import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

type CreateListButtonProps = {};

function CreateListButton(props: CreateListButtonProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="success"
      onClick={() => navigate("?popup=create-todo")}
    >
      {t("Create")}
    </Button>
  );
}

type DeleteListButtonProps = {
  todolistId: number;
};

function DeleteListButton(props: DeleteListButtonProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="error"
      onClick={() =>
        navigate(`?popup=delete-todo&todolist-id=${props.todolistId}`)
      }
    >
      {t("Delete")}
    </Button>
  );
}

type UpdateListButtonProps = {
  todolistId: number;
};

function UpdateListButton(props: UpdateListButtonProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={() =>
        navigate(`?popup=update-todo&todolist-id=${props.todolistId}`)
      }
    >
      {t("Update")}
    </Button>
  );
}

type OpenListItemButtonProps = {};

function OpenListItemButton(props: OpenListItemButtonProps) {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  return (
    <Button variant="outlined" color="primary" sx={{ marginLeft: "auto" }}>
      {t("Open")}
    </Button>
  );
}

export {
  CreateListButton,
  DeleteListButton,
  UpdateListButton,
  OpenListItemButton,
};
