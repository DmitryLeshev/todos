import { Outlet } from "react-router";
import Box from "@mui/material/Box";

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isAuth: boolean;
};
export const Layout: React.FC<Props> = ({ header, footer, isAuth }) => {
  return (
    <>
      {header && header}
      <Box
        component="main"
        sx={{
          position: 'relative',
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: isAuth ? "flex-start" : "center",
          justifyContent: isAuth ? "flex-start" : "center",
        }}
      >
        <Outlet />
      </Box>
      {footer && footer}
    </>
  );
};
