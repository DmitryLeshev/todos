import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { popupsConfig } from "widget/popups";

import { DefaultTemplate } from "shared/ui";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DefaultTemplate
      helmet="home-page"
      scrollbar
      style={{
        backgroundImage: "url(https://source.unsplash.com/random)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          display: "flex",
          gap: 1,
          flexDirection: "column",
          background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`,
        }}
      >
        <Typography padding={3} variant="h1" color="black">
          HomePage
        </Typography>

        <Typography padding={3} variant="h3" color="black">
          Description
        </Typography>

        {Object.values(popupsConfig.popups).map((popup, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              onClick={() => navigate(`?popup=${popup.path}`)}
            >
              {popup.title}
            </Button>
          );
        })}

        <Button
          variant="contained"
          onClick={() => navigate(`?popup=create-todo&popup=sign-in`)}
        >
          TEST
        </Button>
      </Box>
    </DefaultTemplate>
  );
};

export default HomePage;
