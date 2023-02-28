import { useAppSelector } from "../hooks/redux-hooks";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../store/user-slice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Button onClick={() => console.error("/")}>News</Button>
        </Typography>
        <Link to={`/profile`} className="button muted-button">
          Profile
        </Link>
        <Link to={`/news`} className="button muted-button">
          News
        </Link>
        <Link to={`/login`} className="button muted-button">
          Login
        </Link>
        {currentUser && (
          <>
            <Button onClick={handleLogout}>Logout</Button>
            <p>{currentUser.username}</p>
          </>
        )}
      </Toolbar>
    </AppBar>
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

// return (
//   <AppBar position="static" className={classes.appBar}>
//     <Toolbar>
//       <Typography variant="h6" className={classes.title}>
//         <Button
//           className={classes.button}
//           onClick={() => router.push("/")}
//         >
//           News
//         </Button>
//       </Typography>
//       <Button className={classes.button} onClick={() => router.push("/home")}>
//         Home
//       </Button>
//       <Button className={classes.button}>About</Button>
//       <Button className={classes.button}>Contact</Button>
//     </Toolbar>
//   </AppBar>
// );
// }

// export default Header;
