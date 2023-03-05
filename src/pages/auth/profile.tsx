import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../../store/user-slice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { fetchCurrentUser } from "../../services/services";
import { useTranslation } from "react-i18next";
import { ListItemIcon } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontFamily: "Montserrat, sans-serif",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, currentUser]);

  const handleLogOut = () => {
    dispatch(logOut());
    toast.success(t("success-log-out"));
    navigate("/login");
  };

  return (
    <Paper className={classes.paper}>
      <div className="flex flex-col text-center md:min-w-[300px] lg:min-w-[500px]">
        <div className="flex flex-row justify-center mb-3">
          <AccountBoxIcon fontSize="large" />
        </div>
        <Typography variant="h5" className={classes.title}>
          {t("user-profile")}
        </Typography>
        <Typography variant="body1" className={classes.title}>
          {currentUser && (
            <div>
              <strong>{t("username")}:</strong> {currentUser.username}
            </div>
          )}
        </Typography>
        <div className="flex justify-end mt-8">
          <div className={classes.title}>
            <ListItemIcon className="flex content-start space-x-2 mx-3 items-center">
              <LogoutIcon fontSize="small" />
              <Link to="/login" onClick={handleLogOut}>
                {t("log-out")}
              </Link>
            </ListItemIcon>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Profile;
