import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import InfoIcon from "@material-ui/icons/Info";
import News from "@/pages/news";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <div className="flex flex-row items-center space-x-3">
            <nav>
              <ul className="flex flex-row space-x-5 items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
              </ul>
            </nav>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
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
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/auth/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <Link to="/auth/profile">Logout</Link>
          </MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Header;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { useRouter } from "next/router";
// import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: "#fff",
//     color: "#000",
//   },
//   title: {
//     flexGrow: 1,
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 600,
//   },
//   button: {
//     margin: theme.spacing(1),
//     backgroundColor: "transparent",
//     color: "#000",
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 600,
//   },
// }));

// function Header() {
//   const router = useRouter();
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           <Button
//             className={classes.button}
//             onClick={() => router.push("/")}
//           >
//             News
//           </Button>
//         </Typography>
//         <Button className={classes.button} onClick={() => router.push("/home")}>
//           Home
//         </Button>
//         <Button className={classes.button}>About</Button>
//         <Button className={classes.button}>Contact</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;
