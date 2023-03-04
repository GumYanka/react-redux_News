import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import { Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3f51b5",
    padding: theme.spacing(1),
    marginTop: "auto",
    borderTop: `1px solid ${theme.palette.divider}`,
    fontFamily: "Montserrat, sans-serif",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Toolbar>
        <Typography
          className="font-['Montserrat']"
          variant="subtitle1"
          color="textSecondary"
        >
          © News App {new Date().getFullYear()}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.facebook.com/"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.twitter.com/"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.linkedin.com/"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.instagram.com/"
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Toolbar>
    </footer>
  );
};

export default Footer;
