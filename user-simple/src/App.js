import "./App.css";
import {useState} from 'react'
import Card from './components/Card';
import Form from './components/Form';
function App() {
  const [usernames, setUsernames] = useState([])
  const addUser = (user) => { setUsernames([...usernames, user]); console.log(usernames) }
  return (
    <div>
      <Card>
        <Form newUser={addUser}></Form>
      </Card>
      <Card>

      </Card>
    </div>
    );
}

export default App;
