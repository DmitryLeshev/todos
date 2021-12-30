import { createEvent, createStore } from "effector"
import * as api from "shared/api";

export type Viewer = {
  accountId: number,
  authorities: api.auth.Authorities
  email: string
  firstName: string
  lastName: string
}

const addViewer = createEvent<Viewer | null>();

const $viewer = createStore<Viewer | null>(null);
$viewer.on(addViewer, (_, viewer) => viewer);

export const stores = { $viewer }
export const actions = { addViewer }
