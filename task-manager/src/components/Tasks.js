import Task from './Task'

const Tasks = ({ tasks, onDelete, onToogle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id}
                    task={task}
                    onToogle={onToogle}
                    onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks