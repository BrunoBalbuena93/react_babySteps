import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    let url;
    // The validation would come here
    if (isLogin) {
      // Login url
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4t73vlUbWnNOaCcQE3cxOzdxagFKOc3c";
    } else {
      // Singup url
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4t73vlUbWnNOaCcQE3cxOzdxagFKOc3c";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.ok);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errormsg = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errormsg = data.error.message;
            }
            throw Error(errormsg);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        localStorage.setItem("token", data.idToken);
        // Redirecting
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
