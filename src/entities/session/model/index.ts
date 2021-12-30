import { createEffect, createEvent, createStore, forward } from 'effector'
import * as api from 'shared/api'

export type Session = api.auth.Session;

const sessionInfoFx = createEffect(() => {
    return api.auth.sessionInfo()
})

const checkSession = createEvent();

const $session = createStore<Session | null>(null);
$session.on(sessionInfoFx.doneData, (_, res) => res.data ?? null);

forward({
    from: checkSession,
    to: sessionInfoFx
})

$session.watch(state => console.log("SESSION: ", state))

export const actions = { checkSession, sessionInfoFx }
export const stores = { $session }