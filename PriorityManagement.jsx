import React from 'react';
import TaskList from './TaskList';

const PriorityManagement = ({ tasks, moveTask, deleteTask, editTask, toggleTaskStatus }) => {
    const priorities = ['High', 'Medium', 'Low'];

    const getTasksByPriority = (priority) => {
        return tasks.filter(task => task.priority === priority);
    };

    return (
        <div className='w-full h-30 bg-red-300 '>
            {priorities.map(priority => (
                <div key={priority} className={`${priority.toLowerCase()}-priority`}>
                    <h2>{priority} Priority</h2>
                    <TaskList 
                        tasks={getTasksByPriority(priority)}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        toggleTaskStatus={toggleTaskStatus}
                        moveTask={moveTask}
                    />
                </div>
            ))}
        </div>
    );
};

export default PriorityManagement;
