import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    const nuPassword = newPasswordInputRef.current.value;
    // Here would go the validation
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD4t73vlUbWnNOaCcQE3cxOzdxagFKOc3c",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: nuPassword,
          returnSecuredToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form className={classes.form} onSubmit={submit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
