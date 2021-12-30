import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { reflect } from "@effector/reflect";
import { Box } from "@mui/system";

import { Layout, Loader } from "shared/ui";
import { navigation } from "shared/config";

import { appStatusModel } from "entities/app-status";

import { Header } from "widget/header";
import { Footer } from "widget/footer";

import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";

import { HomePage } from "./home";
import { AccountsPage } from "./accounts";
import { SettingsPage } from "./settings";
import { TodosPage } from "./todos";

const IS_AUTH_ROUTES = [
  { path: navigation.authorized.home.path, component: HomePage },
  { path: navigation.authorized.accounts.path, component: AccountsPage },
  { path: navigation.authorized.settings.path, component: SettingsPage },
  { path: navigation.authorized.todos.path, component: TodosPage },
];

const IS_NOT_AUTH_ROUTES = [
  { path: navigation.unauthorized.signIn.path, component: SignInPage },
  { path: navigation.unauthorized.signUp.path, component: SignUpPage },
];

type Props = { appStatus: appStatusModel.AppStatus };

const View: React.FC<Props> = ({ appStatus }) => {
  const { pathname } = useLocation();
  if (appStatus === appStatusModel.Status.NOT_READY) {
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
      <Loader.Circular />
    </Box>
  }
  const isAuth = appStatus === appStatusModel.Status.IS_AUTH;
  const routes = isAuth ? IS_AUTH_ROUTES : IS_NOT_AUTH_ROUTES;
  const authRedirectUrl = Object.entries(navigation.authorized).some(([, page]) => `/${page.path}` === pathname) ? pathname : navigation.authorized.home.path;
  const redirectUrl = isAuth ? authRedirectUrl : navigation.unauthorized.signIn.path;

  return (
    <Routes>
      <Route path="/" element={<PageLayout isAuth={isAuth} />}>
        {routes.map(({ path, component: Component }, index) => {
          return <Route key={index} path={path} element={<Component />} />;
        })}
        <Route path="/" element={<Navigate replace to={redirectUrl} />} />
      </Route>
      <Route path="*" element={<Navigate replace to={redirectUrl} />} />
    </Routes>
  );
};

type PageLayoutProps = { isAuth: boolean; };
const PageLayout: React.FC<PageLayoutProps> = ({ isAuth }) => {

  return (
    <Layout
      header={isAuth && <Header isAuth={isAuth} />}
      footer={isAuth && <Footer />}
      isAuth={isAuth}
    />
  );
};

export const Routing = reflect({
  view: View,
  bind: {
    appStatus: appStatusModel.stores.$appStatus
  },
});
