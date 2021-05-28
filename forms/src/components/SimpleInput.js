import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameValid,
    hasError: nameError,
    valueChange: nameChange,
    inputBlur: nameBlur,
    reset: resetName,
  } = useInput((x) => x.trim() !== "");

  const {
    value: email,
    isValid: emailValid,
    hasError: emailError,
    valueChange: emailChange,
    inputBlur: emailBlur,
    reset: resetEmail,
  } = useInput((x) => x.includes("@"));

  let formIsValid = Boolean(nameValid && emailValid);

  const formSubmission = (event) => {
    event.preventDefault();
    if (!nameValid) {
      return;
    }
    console.log(enteredName);
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChange}
          onBlur={nameBlur}
          value={enteredName}
        />
        {nameError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={emailChange}
          onBlur={emailBlur}
          value={email}
        />
        {emailError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
