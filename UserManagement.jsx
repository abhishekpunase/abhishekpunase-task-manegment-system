import React, { useState } from 'react';

const UserManagement = ({ users, addUser, removeUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAddUser = (e) => {
        e.preventDefault();
        addUser({ username, password });
        setUsername('');
        setPassword('');
    };

    return (
        <div className='flex flex-col items-center w-full h-[50%]'>
            <h2 className='font-bold text-lg mt-5 mb-2'>User Management</h2>
            <form onSubmit={handleAddUser}>
                <label>
                    Username: <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password: <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button className='ml-14 mt-4 px-3 py-1 bg-green-400 text-black' type="submit">Add User</button>
            </form>
            <h3 className='font-semibold'>Existing Users</h3>
            <ul >
                {users.map((user, index) => (
                    <li key={index}>
                        {user.username}
                        <button className='bg-red-700 ml-5 px-3 py-1' onClick={() => removeUser(user)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
