import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    // Add Task
    const addTask = (newTask) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                ...newTask,
                id: Date.now()
            }
        ]);
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        );
    };

    // Edit Task
    const editTask = (id, updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, ...updatedTask }
                    : task
            )
        );
    };

    const moveTask = (id , newStatus)=>{
        setTasks((prevTasks)=>
            prevTasks.map((task)=>
                task.id === Number(id)
                ?{...task  , status : newStatus}
                :task
            )
        );
    }

    return (
        <>
            <SideBar tasks={tasks} />

            <Navbar
                tasks={tasks}
                addTask={addTask}
                deleteTask={deleteTask}
                editTask={editTask}
                moveTask={moveTask}
            />
        </>
    );
}

export default Dashboard;