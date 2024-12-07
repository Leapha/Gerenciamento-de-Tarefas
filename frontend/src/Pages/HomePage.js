import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), ...task }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>Minhas Tarefas</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
};

export default HomePage;
