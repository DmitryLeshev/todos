import { createEvent, createStore } from "effector"

export enum Status {
    IS_AUTH = 'is-auth',
    IS_NOT_AUTH = 'is-not-auth',
    NOT_READY = 'not-ready'
}
export type AppStatus = Status;

const changeStatus = createEvent<AppStatus>();
const $appStatus = createStore<AppStatus>(Status.NOT_READY);
$appStatus.on(changeStatus, (_, status) => status);
$appStatus.watch(state => console.log("APP STATUS: ", state))
export const actions = { changeStatus }
export const stores = { $appStatus }