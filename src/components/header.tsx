import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { logOut, selectCurrentUser } from "../store/user-slice";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageSelector from "./language-select";
import { useTranslation } from "react-i18next";
import { fetchCurrentUser } from "../services/services";
import toast from "react-hot-toast";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#3f51b5",
    justifyContent: "space-between",
    color: "#000",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    padding: theme.spacing(1, 1),
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
      padding: theme.spacing(1, 3),
    },
  },
  links: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginLeft: theme.spacing(3),
    },
  },
  link: {
    color: "#000",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    fontFamily: "Montserrat, sans-serif",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<FormData | null | any>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentUser = useAppSelector(selectCurrentUser);
  const [openMenu, setOpenMenu] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClickMenu = (event: any) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleMenu = (event: React.FormEvent<HTMLFormElement | any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    toast.success(t("success-log-out"));
    navigate("/login");
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className="flex flex-row justify-between">
        <div className="flex">
          <Typography variant="h5" className={classes.title}>
            <FiberNewIcon fontSize="large" />
            {t("logo")}
          </Typography>
          {isMobile && (
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickMenu}
            >
              <MenuIcon />
            </Button>
          )}
        </div>
        <div className="flex">
          <div className="flex flex-row items-center space-x-3">
            <nav className={classes.links}>
              {!isMobile && (
                <ul className="flex flex-row space-x-5 items-center">
                  <li>
                    <Link className={classes.link} to="/news">
                      {t("home")}
                    </Link>
                  </li>
                  {currentUser && (
                    <li>
                      <Link className={classes.link} to="/all-news">
                        {t("news")}
                      </Link>
                    </li>
                  )}
                  {!currentUser && (
                    <li>
                      <Link className={classes.link} to="/login">
                        {t("login")}
                      </Link>
                    </li>
                  )}
                  {currentUser && (
                    <li>
                      <Link className={classes.link} to="/profile">
                        {t("profile")}
                      </Link>
                    </li>
                  )}
                </ul>
              )}
              <LanguageSelector />
            </nav>
            {isMobile && (
              <Menu
                id="simple-menu"
                anchorEl={openMenu}
                keepMounted
                open={Boolean(openMenu)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>
                  <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                    <HomeIcon fontSize="small" />
                    <Link className={classes.link} to="/news">
                      {t("home")}
                    </Link>
                  </ListItemIcon>
                </MenuItem>
                {currentUser && (
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                      <NewspaperIcon fontSize="small" />
                      <Link className={classes.link} to="/all-news">
                        {t("news")}
                      </Link>
                    </ListItemIcon>
                  </MenuItem>
                )}
                {!currentUser && (
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                      <LoginIcon fontSize="small" />
                      <Link className={classes.link} to="/login">
                        {t("login")}
                      </Link>
                    </ListItemIcon>
                  </MenuItem>
                )}
                {currentUser && (
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                      <PersonIcon fontSize="small" />
                      <Link className={classes.link} to="/profile">
                        {t("profile")}
                      </Link>
                    </ListItemIcon>
                  </MenuItem>
                )}
              </Menu>
            )}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              disabled={!currentUser}
              onClick={handleMenu}
            >
              <div className="flex flex-col justify-center items-center">
                <AccountCircle />
                {currentUser && (
                  <p className="font-['Montserrat'] text-[12px]">
                    {currentUser.username}
                  </p>
                )}
              </div>
            </IconButton>
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                <PersonIcon fontSize="small" />
                <Link className="font-['Montserrat']" to="/profile">
                  {t("profile")}
                </Link>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
                <LogoutIcon fontSize="small" />
                <Link
                  className="font-['Montserrat']"
                  to="/login"
                  onClick={handleLogOut}
                >
                  {t("log-out")}
                </Link>
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
