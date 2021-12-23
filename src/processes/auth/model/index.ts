import { createEffect, createEvent, createStore, forward, sample } from "effector";
import { viewerModel } from 'entities/viewer'
import { signInModel } from 'features/sign-in'
import { signOutModel } from 'features/sign-out'
import { signUpModel } from 'features/sign-up'

import * as api from 'shared/api';

const sessionInfoFx = createEffect(() => {
    console.log("sessionInfoFx")
    return api.auth.sessionInfo()
})

const changeAuth = createEvent<boolean>();
const $isAuth = createStore<boolean>(false);
$isAuth.on(changeAuth, (_, value) => value);

sample({
    source: sessionInfoFx.doneData,
    clock: sessionInfoFx.doneData,
    fn: (response) => {
        if (!response.data) return null;
        const { accountId, data: { authorities, email, firstName, lastName } } = response.data;
        const viewer: viewerModel.Viewer = {
            accountId,
            authorities,
            email,
            firstName,
            lastName
        }
        return viewer
    },
    target: viewerModel.actions.addViewer
})

sample({
    source: viewerModel.stores.$viewer,
    fn: (viewer) => viewer ? true : false,
    target: changeAuth
})

forward({
    from: [signInModel.actions.signInFx.doneData, signOutModel.actions.signOutFx.doneData, signUpModel.actions.signUpFx.doneData],
    to: sessionInfoFx
})

$isAuth.watch((state) => {
    console.log("Is Auth: ", state);
});

sessionInfoFx()

export const stores = { $isAuth };