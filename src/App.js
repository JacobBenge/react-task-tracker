import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)

    // tasks is the name of the state. setTasks is the function to update the state. State is immutable, it is not something you can directly change (one way data). This data would be better stored in context api or redux. For now we place it in App.js so it is globally available
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    // Fetch Tasks from json server (db.json)
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    // Fetch a singlular Task from json server (db.json)
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data]) // add the new task to the array

        // // const id = Math.floor(Math.random() * 10000) + 1 // generate a random number for id
        // const newTask = { id, ...task } // combine the id and task info
        // setTasks([...tasks, newTask]) // update tasks array
    }

    // Delete Task
    const deleteTask = async (id) => { // the id is the id of the task that was selected for deletion in Task.js
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
        setTasks(tasks.filter((task) => task.id !== id)) // filters out the task. Still available on reload, no permanent deletion.
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id) // request the singular task from json-server
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder } // flip the boolean reminder and leave the rest of the task as it was.

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json(); // save the response into a variable

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task //map through the tasks. If the task.id matches the given id, then toggle the reminder boolean. else no changes
            )
        )
    }
    return (
        <Router>
            {/* Can only return one parent element, so everything will be within this container. */}
            <div className="container">
                {/* this is a component which can be found under components/Header */}
                <Header
                    onAdd={() => setShowAddTask(!showAddTask)} // for toggling add task form
                    showAdd={showAddTask} // for toggling add button text and color
                />
                <Route path="/" exact render={(props) => (
                    <>
                        {showAddTask && //if showAddTask is true, then display the add task form
                            <AddTask onAdd={addTask} />
                        }
                        {tasks.length > 0 ? // if no tasks(all tasks deleted) then show default message.
                            <Tasks
                                tasks={tasks}
                                onDelete={deleteTask}
                                onToggle={toggleReminder}
                            />
                            : 'No Tasks to Show'}
                    </>
                )} />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
