import {
  createEvent,
  createStore,
  Effect,
  Event,
  sample,
  Store,
} from "effector";
import * as api from "shared/api";

export type Pagination = api.base.Pagination;

function createPagination<T, Y>(
  action: Effect<T, api.base.BaseResponse<api.base.ResponseWithPagination<Y>>>
): {
  set: Event<Pagination | null>;
  reset: Event<void>;
  store: Store<Pagination | null>;
} {
  const set = createEvent<Pagination | null>();
  const reset = createEvent();

  const $pagination = createStore<Pagination | null>(null);

  $pagination.on(set, (_, pagination) => pagination);
  $pagination.reset(reset);

  sample({
    source: action.doneData,
    fn: (res) => res.data?.pagination ?? null,
    target: set,
  });

  return { set, reset, store: $pagination };
}

export type CreatePagination = ReturnType<typeof createPagination>;
export { createPagination };
