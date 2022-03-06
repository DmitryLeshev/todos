import { reflect } from "@effector/reflect";
import { useTranslation } from "react-i18next";

import { Box, SxProps, Theme } from "@mui/system";
import { Button, Typography } from "@mui/material";

import type { Pagination as PaginationType } from "../model";

type Props = { sx?: SxProps<Theme>; pagination: PaginationType | null };

function View({ pagination, sx }: Props) {
  const { t } = useTranslation();

  if (!pagination) return null;

  const { currentPage, limit, totalPages, nextPage, prevPage } = pagination;

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        listStyle: "none",
        gap: 1,
        margin: 0,
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box component="li">
        <Button variant="outlined" size="small">
          {"<"}
        </Button>
      </Box>
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageCount = index + 1;
        const isCurrentPage = currentPage === pageCount;

        return (
          <Box component="li" key={index}>
            <Typography
              variant="body1"
              color={isCurrentPage ? "black" : "GrayText"}
            >
              {pageCount}
            </Typography>
          </Box>
        );
      })}
      <Box component="li">
        <Button variant="outlined" size="small">
          {">"}
        </Button>
      </Box>
    </Box>
  );
}

const Pagination = reflect({
  view: View,
  bind: {},
  hooks: {},
});

export { Pagination };
