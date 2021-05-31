import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isFive = (value) => value.trim().length === 5;

  const onConfirm = (event) => {
    event.preventDefault();
    // Retrieving values
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postal = postalRef.current.value;
    const city = cityRef.current.value;

    // Validating every entry
    setFormInputValidity({
      name: !isEmpty(name),
      street: !isEmpty(street),
      city: !isEmpty(city),
      postal: isFive(postal),
    });

    const formValid =
      formInputValidity.name &&
      formInputValidity.street &&
      formInputValidity.postal &&
      formInputValidity.city;

    if (!formValid) {
      return;
    }

    // Sumbit data
    props.onSubmission({ name, street, postal, city });
  };

  return (
    <form className={classes.form} onSubmit={onConfirm}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
