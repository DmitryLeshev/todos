import { createEffect, createEvent, forward } from "effector";
import * as api from 'shared/api';

type DTOSignIn = api.auth.DTOSignIn

export const signInFx = createEffect((dto: DTOSignIn) => {
    console.log("SignInFx dto", dto);
    return api.auth.signIn(dto)
});

export const signIn = createEvent<DTOSignIn>();

forward({
    from: signIn,
    to: signInFx
});
