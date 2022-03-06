import { createStore, createEvent, combine } from "effector";
import { useStore } from "effector-react";

export const createModal = (initialState: boolean) => {
  const open = createEvent();
  const close = createEvent();
  const reset = createEvent();

  const $isOpen = createStore<boolean>(initialState);
  const $isClose = combine($isOpen, (isOpen) => !isOpen);

  $isOpen.on(open, () => true);
  $isOpen.on(close, () => false);
  $isOpen.reset(reset);
  $isOpen.watch(console.log);
  const stores = { $isOpen, $isClose };
  const actions = { reset, open, close };

  return { stores, actions };
};

export type CreateModal = ReturnType<typeof createModal>;

export const useModal = (modal: CreateModal) => {
  const isOpen = useStore(modal.stores.$isOpen);
  const isClose = useStore(modal.stores.$isClose);

  return { isOpen, isClose, ...modal.actions };
};

export type UseModal = ReturnType<typeof useModal>;
