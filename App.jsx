import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import UserManagement from './components/UserManagement';
import PriorityManagement from './components/PriorityManagement';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([
        { username: 'admin', password: 'admin' }
    ]);
    const [currentUser, setCurrentUser] = useState(null);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskToDelete) => {
        setTaskToDelete(taskToDelete);
    };

    const confirmDeleteTask = () => {
        setTasks(tasks.filter(task => task !== taskToDelete));
        setTaskToDelete(null);
    };

    const editTask = (oldTask, newTask) => {
        setTasks(tasks.map(task => (task === oldTask ? newTask : task)));
    };

    const toggleTaskStatus = (taskToToggle) => {
        setTasks(tasks.map(task => 
            task === taskToToggle ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
        ));
    };

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const removeUser = (userToRemove) => {
        setUsers(users.filter(user => user !== userToRemove));
    };

    const moveTask = (taskToMove, newPriority) => {
        setTasks(tasks.map(task =>
            task === taskToMove ? { ...task, priority: newPriority } : task
        ));
    };

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    const handleSignUp = (user) => {
        addUser(user);
        setIsSignUp(false);
    };

    const switchToSignUp = () => {
        setIsSignUp(true);
    };

    const switchToLogin = () => {
        setIsSignUp(false);
    };

    if (!currentUser) {
        return isSignUp ? (
            <SignUpForm onSignUp={handleSignUp} switchToLogin={switchToLogin} />
        ) : (
            <LoginForm users={users} onLogin={handleLogin} switchToSignUp={switchToSignUp} />
        );
    }

    return (
        <div className="App w-full h-screen  ">
            <h1 className='text-center font-semibold text-2xl mt-5 '>Task Management System</h1>
            <TaskForm addTask={addTask} users={users} />
            <PriorityManagement
                tasks={tasks}
                moveTask={moveTask}
                deleteTask={deleteTask}
                editTask={editTask}
                toggleTaskStatus={toggleTaskStatus}
            />
            <h2 className='font-semibold text-center mt-5'>Pending Tasks</h2>
            <TaskList
                tasks={tasks.filter(task => task.status === 'pending' && task.assignedUser === currentUser.username)}
                deleteTask={deleteTask}
                editTask={editTask}
                toggleTaskStatus={toggleTaskStatus}
            />
            <h2 className='font-semibold text-center mt-5'>Completed Tasks</h2>
            <TaskList
                tasks={tasks.filter(task => task.status === 'completed' && task.assignedUser === currentUser.username)}
                deleteTask={deleteTask}
                editTask={editTask}
                toggleTaskStatus={toggleTaskStatus}
            />
            {taskToDelete && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete this task?</p>
                    <button onClick={confirmDeleteTask}>Yes</button>
                    <button onClick={() => setTaskToDelete(null)}>No</button>
                </div>
            )}
            <UserManagement users={users} addUser={addUser} removeUser={removeUser} />
        </div>
    );
};

export default App;
