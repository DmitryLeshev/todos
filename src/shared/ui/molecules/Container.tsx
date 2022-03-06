import {
  Container as MaterialUIContainer,
  ContainerProps,
} from "@mui/material";
import { CSSProperties } from "react";

const DEFAULT_MAX_WIDTH = "md";
const DEFAULT_CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
};

type Props = ContainerProps & {};
export const Container: React.FC<Props> = ({ children, maxWidth }) => {
  return (
    <MaterialUIContainer
      maxWidth={maxWidth ?? DEFAULT_MAX_WIDTH}
      sx={{ ...DEFAULT_CONTAINER_STYLE }}
    >
      {children}
    </MaterialUIContainer>
  );
};
