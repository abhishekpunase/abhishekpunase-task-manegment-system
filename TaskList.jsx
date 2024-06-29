import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, toggleTaskStatus }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    toggleTaskStatus={toggleTaskStatus}
                />
            ))}
        </ul>
    );
};

export default TaskList;
