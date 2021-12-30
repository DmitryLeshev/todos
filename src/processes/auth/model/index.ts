import { createEvent, createStore, forward, sample } from "effector";
import { viewerModel } from 'entities/viewer'
import { sessionModel } from 'entities/session'
import { appStatusModel } from 'entities/app-status'

import { signInModel } from 'features/sign-in'
import { signOutModel } from 'features/sign-out'
import { signUpModel } from 'features/sign-up'

const changeAuth = createEvent<boolean>();
const $isAuth = createStore<boolean>(false);
$isAuth.on(changeAuth, (_, value) => value);

sample({
    source: sessionModel.actions.sessionInfoFx.doneData,
    clock: sessionModel.actions.sessionInfoFx.doneData,
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
    clock: sessionModel.actions.sessionInfoFx.doneData,
    fn: (viewer) => viewer ? appStatusModel.Status.IS_AUTH : appStatusModel.Status.IS_NOT_AUTH,
    target: appStatusModel.actions.changeStatus
})

forward({
    from: [signInModel.actions.signInFx.doneData, signOutModel.actions.signOutFx.doneData, signUpModel.actions.signUpFx.doneData],
    to: sessionModel.actions.checkSession
})

sessionModel.actions.checkSession();

export const stores = { $isAuth };