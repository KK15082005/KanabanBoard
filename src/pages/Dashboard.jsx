import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const[search , setSearch] = useState("");
    const[filter , setFilter ] = useState("All ");
    const[sort , setSort] = useState("Newest");

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
    let filteredTasks =tasks;
    filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <SideBar tasks={tasks} />

            <Navbar
                tasks={filteredTasks}
                addTask={addTask}
                deleteTask={deleteTask}
                editTask={editTask}
                moveTask={moveTask}
                search = {search}
                setSearch = {setSearch}
            />
        </>
    );
}

export default Dashboard;