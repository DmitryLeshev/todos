import { createEffect } from "effector";
import { createForm } from "effector-forms";
import { emailRules, passwordRules } from "../lib";

export const form = createForm({
    fields: {
        email: {
            init: "",
            rules: emailRules,
            validateOn: ["blur"],
        },
        password: {
            init: "",
            rules: passwordRules,
            validateOn: ["change"],
        },
    },
    validateOn: ["submit"],
});

export const resetFx = createEffect(() => {
    form.reset();
});

export const submitFx = createEffect(() => {
    console.log("submit");
});

