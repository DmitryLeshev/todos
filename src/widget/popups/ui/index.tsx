import { useGetPopupState } from "../lib";
import { popups as config } from "../config";

export const PopupComponent = () => {
  const { mountedPopup, isOpened, goBack } = useGetPopupState();

  const popups = Object.values(config);
  const popup = popups.find((p) => p.path === mountedPopup);

  if (!popup) return null;

  const { component: Component, ...props } = popup;
  return <Component isOpened={isOpened} goBack={goBack} {...props} />;
};
