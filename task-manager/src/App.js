import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'


function App() {
  const [tasks, setTasks] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  // Con useEffect cargas cosas al inicio de la carga de la pagina
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    // Mandandolo al server
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }


  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toogle reminder
  const toogleReminder = async (id) => {

    const Task2Toogle = await fetchTask(id)
    const upTask = { ...Task2Toogle, reminder: !Task2Toogle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(upTask),
    })
    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title='Fucker ' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
        <Route path='/' exact render={(props) =>
        (
          <>
            {showAdd && <AddTasks onAdd={addTask}></AddTasks>}
            <Tasks tasks={tasks}
              onToogle={toogleReminder}
              onDelete={deleteTask}></Tasks>
          </>
        )
        } />
        <Route path='/about' component={About}></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
