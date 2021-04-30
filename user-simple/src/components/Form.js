import {useState} from 'react'
import Button from './Button';
import './Form.css';

const Form = ({newUser}) => {
    const [data, setData] = useState({username: '', age: null})
    const changeUsername = (e) => {
        if (e.target.value.length <= 0) {
            console.log('Invalid username');
            return;
        } 
        setData({...data, username: e.target.value})
    }
    const changeAge = (e) => { 
        if (Number(e.target.value) <= 0) {
            console.log('Age not valid');
            return;
        }
        setData({...data, age: e.target.value}) 
    }
    const submit = (e) => {
        e.preventDefault();
        // Agregar validadores
        console.log(data);
        newUser(data);
    }
    return (
        <form onSubmit={submit}>
                <div className='formular__control'>
                    <label>Username</label>
                    <input type="text" onChange={changeUsername}/>
                </div>
                <div className='formular__control'>
                    <label>Age</label>
                    <input type="number" onChange={changeAge}/>
                </div>
            <Button text='Submit' type='submit'></Button>
        </form>
    )
}

export default Form
