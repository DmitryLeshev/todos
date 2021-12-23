import { Routing } from "pages";
import { withProviders } from "./providers";

import { authModel } from "processes/auth";
import { useStore } from "effector-react";

const App = () => {
  const isAuth = useStore(authModel.stores.$isAuth)
  return <Routing isAuth={isAuth} />;
};

export default withProviders(App);
