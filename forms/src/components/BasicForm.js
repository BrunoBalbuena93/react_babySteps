import useBasic from "../hooks/use-basic";

const BasicForm = (props) => {
  // Here I will define the "handler" of the input "First Name" adding the validation function
  const {
    value: first,
    touched: firstTouched,
    isValid: firstValid,
    hasError: firstError,
    valueChange: firstChange,
    touch: firstTouch,
    reset: firstReset,
  } = useBasic((x) => x.trim() !== "");

  // Same thing but with "lastname"
  const {
    value: last,
    touched: lastTouched,
    isValid: lastValid,
    hasError: lastError,
    valueChange: lastChange,
    touch: lastTouch,
    reset: lastReset,
  } = useBasic((x) => x.trim() !== "");

  // Same thing with email
  const {
    value: email,
    touched: emailTouched,
    isValid: emailValid,
    hasError: emailError,
    valueChange: emailChange,
    touch: emailTouch,
    reset: emailReset,
  } = useBasic((x) => x.includes("@"));

  const firstClasses = firstError ? "form-control invalid" : "form-control";
  const lastClasses = lastError ? "form-control invalid" : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  let formIsValid = Boolean(firstValid && lastValid && emailValid);

  const formSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("Yes, you did it");
      emailReset("");
      lastReset("");
      firstReset("");
    }
  };

  return (
    <form>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChange}
            onBlur={firstTouch}
            value={first}
          />
          {firstError && (
            <p className="error-text">The firstname can't be empty</p>
          )}
        </div>
        <div className={lastClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChange}
            onBlur={lastTouch}
            first={last}
          />
          {lastError && (
            <p className="error-text">The lastname can't be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChange}
          onBlur={emailTouch}
          value={email}
        />
        {emailError && <p className="error-text">The email can't be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
