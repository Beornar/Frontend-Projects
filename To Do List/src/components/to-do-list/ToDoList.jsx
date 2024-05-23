import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {

        if (newTask.trim() !== "") {

            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (taskId) => {

        const updatedTasks = tasks.filter(((_, id) => id !== taskId));
        setTasks(updatedTasks);

    }

    const moveUpTask = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }
    const moveDownTask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }

    return (
        <div className='to-do-list'>
            <h1>To Do List</h1>

            <div>
                <input type="text"
                    placeholder='Enter a task'
                    value={newTask}
                    onChange={handleInputChange} />
                <button className='add-button'
                    onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, id) =>
                    <li key={id}>
                        <span className='to-do-text'>{task} </span>
                        <button className='delete-button'
                            onClick={() => deleteTask(id)}>
                            Delete</button>
                        <button className='move-button'
                            onClick={() => moveUpTask(id)}>
                            Up</button>
                        <button className='move-button'
                            onClick={() => moveDownTask(id)}>
                            Down</button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList;