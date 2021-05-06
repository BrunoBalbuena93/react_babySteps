import { useState } from "react";
import Button from "./Button";
import "./Form.css";

const Form = ({ newUser }) => {
  const [data, setData] = useState({ username: "", age: "" });
  const changeUsername = (e) => {
    setData({ ...data, username: e.target.value });
  };
  const changeAge = (e) => {
    setData({ ...data, age: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    // Agregar validadores
    if (data.username.length === 0) {
      console.log("Name invalid");
      return;
    }
    if (data.age <= 0) {
      console.log("age invalid");
      return;
    }
    console.log(data);
    newUser(data);
    setData({ username: "", age: "" });
  };
  return (
    <form onSubmit={submit}>
      <div className="formular__control">
        <label>Username</label>
        <input type="text" onChange={changeUsername} value={data.username} />
      </div>
      <div className="formular__control">
        <label>Age</label>
        <input type="number" onChange={changeAge} value={data.age} />
      </div>
      <Button text="Submit" type="submit"></Button>
    </form>
  );
};

export default Form;
