import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user-slice";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 64px)",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 104px)",
    },
    fontFamily: "Montserrat, sans-serif",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontFamily: "Montserrat, sans-serif",
  },
  button: {
    marginTop: theme.spacing(4),
    fontFamily: "Montserrat, sans-serif",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const { t } = useTranslation();

  const handleGetStart = () => {
    if (currentUser) {
      navigate("/all-news");
    } else {
      toast(t("home-page"));
      navigate("/login");
    }
  };

  return (
    <div className={classes.root}>
      <div className="flex flex-col text-center">
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            className={classes.title}
          >
            {t("welcome")}
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            align="center"
            gutterBottom
          >
            {t("home-title")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={handleGetStart}
          >
            {t("get-started")}
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
