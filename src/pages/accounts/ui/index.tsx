import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DefaultTemplate } from "shared/ui";

const AccountsPage: React.FC = () => {
  return (
    <DefaultTemplate helmet='home-page' scrollbar style={{
      backgroundImage: "url(https://source.unsplash.com/random)",
    }}>
      <Box sx={{
        width: '100%',
        flexGrow: 1,
        background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`
      }}>
        <Typography padding={3} variant='h1' color='black'>
          AccountsPage
        </Typography>

        <Typography padding={3} variant='h3' color='black'>
          Description
        </Typography>
      </Box>
    </DefaultTemplate>
  );
};

export default AccountsPage;
