import React, { useState } from 'react';

const TaskForm = ({ addTask, users }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [assignedUser, setAssignedUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, dueDate, priority, status: 'pending', assignedUser });
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('Medium');
        setAssignedUser('');
    };

    return (
        <div className=' h-60 w-full   bg-green-400 flex items-center justify-evenly relative rounded-lg   '>
            <form className='relative  ' onSubmit={handleSubmit}>
            <label className='text-lg'>
                Title:  
                <input className='rounded-md border-none ml-5 border-white'
                    type="text"
                    value={title}
                    placeholder='title name'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Description:
                <textarea className='rounded-md border-none ml-5 mt-2  border-white'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Due Date:
                <input  className='rounded-md border-none ml-5 mt-2  border-white'
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Priority:
                <select  className='rounded-md border-none ml-5 mt-2  border-white' value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </label>
            <br />
            <label>
                Assign to:
                <select  className='rounded-md border-none ml-5 mt-2  border-white' value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)}>
                    <option value="">None</option>
                    {users.map(user => (
                        <option key={user.username} value={user.username}>{user.username}</option>
                    ))}
                </select>
            </label>
            <br />
            <button  className='rounded-md ml-20 mt-2 px-3 bg-blue-600 text-white' type="submit">Add Task</button>
        </form>
        </div>
    );
};

export default TaskForm;
