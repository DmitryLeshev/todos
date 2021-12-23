import React from "react";
import { Box, useTheme } from "@mui/material";
import { Container } from "shared/ui";

type Props = {};
export const Footer: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        height: 64,
        padding: theme.spacing(0, 3),
        background: theme.palette.divider,
      }}
    >
      <Container>
        Footer
      </Container>
    </Box>
  );
};
