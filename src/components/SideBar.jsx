import React from 'react';
import "../css/SideBar.css"
function SideBar({tasks}) {
    const totalTasks = tasks.length;

    const todoTasks = tasks.filter(
        task => task.status === "Todo"
    ).length;
    return (
        <div className= 'sidebar d-flex flex-column p-3 '>
            <div >
                <h2 className='mb-4' >Kanban Board</h2>
            </div>
            
            <ul className='nav flex-column menu'>
                <li className='active'> <i className="bi bi-columns"></i> Board</li>
                <li><i className="bi bi-list-task"></i> All Tasks</li>
                <li><i className="bi bi-person-circle"></i> My Tasks</li>
                <li><i className="bi bi-gear-fill"></i> My Tasks</li>
            </ul>
            <div className='stats'>
                <h6>Total Tasks</h6>
                    <h2>{totalTasks}</h2>
                    <p>Todo : {todoTasks}</p>
                    <p>In Progress : {tasks.filter(task => task.status === "In Progress").length}</p>
                    <p>Done : {tasks.filter(task => task.status === "Done").length}</p>
            </div>
                        
        </div>
    );
}

export default SideBar;