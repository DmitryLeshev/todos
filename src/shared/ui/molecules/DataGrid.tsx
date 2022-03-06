import React from "react";
import { Box, useTheme } from "@mui/system";
import { IconButton, Typography } from "@mui/material";

import { Icon } from "shared/assets";

type Column = {
  field: string;
  type: "date" | "number" | "string";
  headerName: string;
  width: number;
};

interface Props {
  columns: Column[];
  rows: any[];
}

export function DataGrid({ columns, rows }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `solid 1px ${theme.palette.divider}`,
        borderRadius: theme.spacing(0.5),
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: theme.spacing(1),
          borderBottom: `solid 1px ${theme.palette.divider}`,
        }}
      >
        {columns.map((column, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: column.width,
                cursor: "pointer",
              }}
            >
              <Typography variant="subtitle2">{column.headerName}</Typography>
              <IconButton size="small" sx={{ opacity: 1, marginLeft: 1 }}>
                {true ? (
                  <Icon.ArrowDownwardIcon color="disabled" />
                ) : (
                  <Icon.ArrowUpwardIcon color="disabled" />
                )}
              </IconButton>
              <Icon.HorizontalRuleIcon
                color="disabled"
                sx={{ transform: "rotate(90deg)", marginLeft: "auto" }}
              />
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {rows.map((row, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                padding: theme.spacing(1),
                borderBottom: `solid 1px ${theme.palette.divider}`,
              }}
            >
              {columns.map((column, index) => {
                return (
                  <Box key={index} sx={{ minWidth: column.width }}>
                    <Typography variant="body2">{row[column.field]}</Typography>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// export const Table = (props: Props<T>) => {
//   return (
//     <Box sx={{}}>
//         <Box sx={{}}>

//         </Box>
//     </Box>
//   );
// };
