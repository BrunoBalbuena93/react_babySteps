import { useState } from "react";

const useBasic = (validator) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validator(value);
  const hasError = !isValid && touched;

  const valueChange = (event) => {
    setValue(event.target.value);
  };
  const touch = (event) => {
    setTouched(true);
  };

  const reset = (x) => {
    setValue(x);
  };

  return {
    value,
    touched,
    isValid,
    hasError,
    valueChange,
    touch,
    reset,
  };
};

export default useBasic;
