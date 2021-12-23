import { createEffect } from "effector";
import { createForm } from "effector-forms";
import { emailRules, passwordRules, firstNameRules, lastNameRules } from "../lib";

export const form = createForm({
    fields: {
        email: {
            init: "",
            rules: emailRules,
            validateOn: ["blur"],
        },
        hashPassword: {
            init: "",
            rules: passwordRules,
            validateOn: ["change"],
        },
        firstName: {
            init: "",
            rules: firstNameRules,
            validateOn: ["change"],
        },
        lastName: {
            init: "",
            rules: lastNameRules,
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

