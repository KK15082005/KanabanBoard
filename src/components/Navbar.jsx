import React from 'react';
import "../css/Navbar.css";
import SearchBar from './SearchBar';
import TaskColumn from './TaskColumn';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
function Navbar({tasks , addTask , deleteTask , editTask , moveTask , search , setSearch , priority , setPriority , sort , setSort }) {
    return ( 
        
        <div className='content'> 
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div>
                    <h2 className='mb-2'>Kanban Board</h2>
                    <p>Organise your task and increase your productivity.</p>
                </div>
                <button type="button" className="btn btn-primary px-4 py-2 mb-2" data-bs-toggle="modal" data-bs-target="#taskModal"> <i className="bi bi-plus-circle me-2"></i> New Task</button>
            </div>   
            <SearchBar search = {search} setSearch = {setSearch} priority = {priority} setPriority = {setPriority} sort = {sort} setSort = {setSort}/>
            <TaskColumn tasks={tasks} deleteTask={deleteTask} editTask={editTask} moveTask={moveTask}/>
            <div className="modal fade" id="taskModal" tabIndex="-1">
                <div className="modal-dialog">

                    <div className="modal-content"> 

                        <div className="modal-header">

                            <h5 className="modal-title">
                                Create Task
                            </h5>

                            <button type="button" className="btn-close"data-bs-dismiss="modal"></button>

                        </div>

                        <div className="modal-body">

                        <TaskForm addTask={addTask} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    );
}   

export default Navbar;