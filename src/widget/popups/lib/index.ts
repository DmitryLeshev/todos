import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { params } from "../config";

const useGetParameter = (name: string) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query.get(name);
};

let timeout: NodeJS.Timeout;

export const useGetPopupState = () => {
  const popupName = useGetParameter(params.popup);
  const [mountedPopup, setMountedPopup] = useState<any>(popupName);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return { mountedPopup, isOpened, goBack };
};

// export const useClosePopup = () => {
//   const navigate = useNavigate();
//   const location = useLocation<{ hasPrevRoute: boolean }>();
//   const match = useRouteMatch();

//   console.log("useClosePopup", { location, history, match });

//   return useCallback(() => {
//     // if (state && state.hasPrevRoute) {
//     if (false) {
//       history.goBack();
//     } else {
//       history.replace(match.url);
//     }
//   }, [history, match.url]);
// };
