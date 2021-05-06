import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Elements from "./components/Elements";
function App() {
  const [usernames, setUsernames] = useState([]);
  const addUser = (user) => {
    setUsernames([...usernames, user]);
  };
  return (
    <div>
      <Card>
        <Form newUser={addUser}></Form>
      </Card>
      <Card>
        <Elements users={usernames}></Elements>
      </Card>
    </div>
  );
}

export default App;
