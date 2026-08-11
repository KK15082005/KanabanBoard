import React from "react";
import "../css/TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn({ tasks , deleteTask , editTask , moveTask}) {

    return (
        <div className="task-container mt-4">

            <div className="row g-4">

                {/* Todo */}
                <div className="col-12 col-lg-4">
                    <div className="task-box todo" onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>{
                        const taskId = e.dataTransfer.getData("taskId");
                        moveTask(taskId , "Todo")}}
                    >  

                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Todo</h5>

                            <div>
                                <i className="bi bi-plus-lg me-3"></i>
                                <i className="bi bi-three-dots-vertical"></i>
                            </div>
                        </div>

                        {tasks
                            .filter(task => task.status === "Todo")
                            .map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    deleteTask = {deleteTask}
                                    editTask ={editTask}
                                    moveTask={moveTask}
                                />
                            ))
                        }

                    </div>
                </div>


                {/* In Progress */}
                <div className="col-12 col-lg-4">
                    <div className="task-box inprogress" onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>{
                        const taskId = e.dataTransfer.getData("taskId");
                        moveTask(taskId , "In Progress");
                    }}>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">In Progress</h5>

                            <div>
                                <i className="bi bi-plus-lg me-3"></i>
                                <i className="bi bi-three-dots-vertical"></i>
                            </div>
                        </div>

                        {tasks
                            .filter(task => task.status === "In Progress")
                            .map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    editTask = {editTask}
                                    deleteTask= {deleteTask}
                                    moveTask = {moveTask}
                                />
                            ))
                        }

                    </div>
                </div>


                {/* Done */}
                <div className="col-12 col-lg-4">
                    <div className="task-box done" onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>{
                        const taskId = e.dataTransfer.getData("taskId");
                        moveTask(taskId , "Done")
                    }}>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Done</h5>

                            <div>
                                <i className="bi bi-plus-lg me-3"></i>
                                <i className="bi bi-three-dots-vertical"></i>
                            </div>
                        </div>

                        {tasks
                            .filter(task => task.status === "Done")
                            .map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    editTask = {editTask}
                                    deleteTask={deleteTask}
                                    moveTask ={moveTask}
                                />
                            ))
                        }

                    </div>
                </div>

            </div>

        </div>
    );
}

export default TaskColumn;