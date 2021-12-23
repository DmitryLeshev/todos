import { Button } from "@mui/material";
import { useForm } from "effector-forms";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

import { actions, stores } from "../model";

export const SignInBtn = () => {
    const { eachValid } = useForm(stores.form);
    const pending = useStore(actions.signUpFx.pending);

    const { t } = useTranslation();

    return (
        <Button
            disabled={!eachValid || pending}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            {t('Sign In')}
        </Button>
    );
};
