import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div style={taskItemStyle}>
            <h3>
                {task.title} 
                <button onClick={() => onDelete(task.id)}>Excluir</button>
            </h3>
            <p>Status: {task.status}</p>
        </div>
    );
};

const taskItemStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '10px'
};

export default TaskItem;
