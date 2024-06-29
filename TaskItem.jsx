import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, toggleTaskStatus, moveTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTask(task, editedTask);
        setIsEditing(false);
    };

    const handleMoveTask = (e) => {
        moveTask(task, e.target.value);
    };

    return (
        <li className='flex flex-col text-center'>
            {isEditing ? (
                <form  className='flex flex-col text-center' onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleEditChange}
                        required
                    />
                    <textarea className='ml-4 '
                        name="description"
                        value={editedTask.description}
                        onChange={handleEditChange}
                        required
                    />
                    <input className='ml-4 rounded'
                        type="date"
                        name="dueDate"
                        value={editedTask.dueDate}
                        onChange={handleEditChange}
                        required
                    />
                    <select className='ml-4' name="priority" value={editedTask.priority} onChange={handleEditChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button className='px-3 py-1 rounded' type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <strong>{task.title}</strong>
                    {isViewing && (
                        <div>
                            <p>{task.description}</p>
                            <p>Due: {task.dueDate}</p>
                            <p className='font-bold'>Priority: {task.priority}</p>
                            <p>Assigned to: {task.assignedUser}</p>
                        </div>
                    )}
                    <button onClick={() => setIsViewing(!isViewing)}>
                        {isViewing ? 'Hide Details' : 'View Details'}
                    </button>
                    <button className='px-3 py-1 bg-blue-600' onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.status === 'completed'}
                            onChange={() => toggleTaskStatus(task)}
                        />
                        {task.status === 'completed' ? 'Completed' : 'Pending'}
                    </label>
                    <label>
                        Move to:
                        <select onChange={handleMoveTask} value={task.priority}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>
                </>
            )}
        </li>
    );
};

export default TaskItem;
