import { createEffect, createEvent, forward } from "effector";
import * as api from 'shared/api';

type DTOSignUp = api.auth.DTOSignUp

export const signUpFx = createEffect((dto: DTOSignUp) => {
    console.log("SignUpFx dto", dto);
    return api.auth.signUp(dto)
});

export const signUp = createEvent<DTOSignUp>();

forward({
    from: signUp,
    to: signUpFx
});
