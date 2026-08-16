import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const[priority , setPriority] = useState("All");
    const[search , setSearch] = useState("");
    
    const[sort , setSort] = useState("Newest");

    // Load tasks from localStorage on mount
    useEffect(() => {
        const savedTasks = localStorage.getItem("kanban_tasks");
        console.log("Loading tasks from localStorage:", savedTasks);
        if (savedTasks) {
            try {
                setTasks(JSON.parse(savedTasks));
            } catch (error) {
                console.error("Error parsing tasks:", error);
            }
        }
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        if (tasks.length > 0) {
            console.log("Saving tasks to localStorage:", tasks);
            localStorage.setItem("kanban_tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

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
    let filteredTasks =[...tasks];
    filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
        ).filter((task) => 
        priority ==="All" ? true : task.priority === priority
    );
    if (sort === "Newest") {
        filteredTasks.sort((a, b) => b.id - a.id);
    }

    if (sort === "Oldest") {
        filteredTasks.sort((a, b) => a.id - b.id);
    }

    if (sort === "Highest") {
        const order = {
            High: 3,
            Medium: 2,
            Low: 1
        };

        filteredTasks.sort(
            (a, b) => order[b.priority] - order[a.priority]
        );
    }
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
                sort = {sort}
                setSort = {setSort}
                priority = {priority}
                setPriority = {setPriority}
            />
        </>
    );
}

export default Dashboard;