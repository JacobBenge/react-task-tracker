import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {  // task array is stored on App.js so it is available globally. It's passed in as a parameter from App.js so we destructure as it comes in.
    return (
        <>
            {/* Loops through the tasks array and lists the text */}
            {tasks.map((task) => (
                // each child in a list should have a unique key prop
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                /> // Send the task info to Task.js
            ))}
        </>
    )
}

export default Tasks
