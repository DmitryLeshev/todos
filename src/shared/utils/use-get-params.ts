import { useLocation } from "react-router-dom";

export const useGetParameter = (name: string): string | null => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query.get(name);
};

export const useSetParameters = (parameters: [string, string][]): void => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  parameters.forEach(([name, value]) => query.set(name, value));
};
