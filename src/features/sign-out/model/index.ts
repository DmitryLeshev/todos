import { createEffect, createEvent, forward } from "effector";
import * as api from 'shared/api';

const signOutFx = createEffect(() => {
    console.log("signOutFx");
    return api.auth.signOut()
});

const signOut = createEvent();

forward({
    from: signOut,
    to: signOutFx
});

export const actions = { signOutFx, signOut }