import { FaTimes } from 'react-icons/fa' // npm i react-icons      This is used to enable font awesome icons.

const Task = ({ task, onDelete, onToggle }) => { // task and onDelete arrive from Tasks.js as it loops through all the tasks
    return (
        // if task.reminder is true then add the reminder class.
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}> {/* For double click, toggle the task.reminder boolean. logic is in App.js toggleReminder() */}

            <h3>
                {task.text}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} //This is a font awesome icon that was made available from npm i react-icons
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
