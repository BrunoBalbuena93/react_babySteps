import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const logout = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
