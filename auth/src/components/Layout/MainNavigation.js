import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLogged = authCtx.isLoggedIn;

  const LogoutHandler = () => {
    authCtx.logout();
    localStorage.removeItem("token");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogged && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
