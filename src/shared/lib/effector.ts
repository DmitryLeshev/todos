import { createEvent, createStore } from "effector";

type ExportsInput = {
  value: string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  error?: string | boolean;
  touched?: boolean;
  onBlur?: () => void;
  placeholder?: string;
  start?: React.ReactElement | string;
  end?: React.ReactElement | string;
};

type Options = {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: any[];
  start?: React.ReactElement | string;
  end?: React.ReactElement | string;
  error?: string | boolean;
};

function createInput(defaultValue = "", options?: Options) {
  const change = createEvent<string>();
  const reset = createEvent();
  const $value = createStore<string>(defaultValue);

  $value.on(change, (_, v) => v);
  $value.reset(reset);

  return { change, reset, $value };
}

export { createInput };
