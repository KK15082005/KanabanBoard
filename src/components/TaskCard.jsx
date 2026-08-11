import React, { useState } from "react";
import "../css/TaskCard.css";

function TaskCard({ task, deleteTask, editTask , moveTask}) {

    const [showEdit, setShowEdit] = useState(false);

    const [editedTask, setEditedTask] = useState({
        title: task?.title || "",
        description: task?.description || "",
        priority: task?.priority || "Low",
        dueDate: task?.dueDate || ""
    });

    if (!task) {
        return null;
    }

    const handleChange = (e) => {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {

        editTask(task.id, editedTask);

        setShowEdit(false);
    };

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {
            deleteTask(task.id);
        }
    };

    return (
        <>
            <div className="task-card" draggable = "true" onDragStart={(e)=>{e.dataTransfer.setData("taskId" ,task.id)}}>

                <h5>{task.title}</h5>

                <p>{task.description}</p>

                <div className="task-details">

                    <span
                        className={
                            task.priority === "High"
                                ? "badge bg-danger"
                                : task.priority === "Medium"
                                ? "badge bg-warning text-dark"
                                : "badge bg-success"
                        }
                    >
                        {task.priority}
                    </span>

                    <span className="task-date">
                        <i className="bi bi-calendar3 me-1"></i>
                        {task.dueDate || "No date"}
                    </span>

                    <div className="task-actions">

                        {/* EDIT */}
                        <button
                            className="task-edit"
                            onClick={() => setShowEdit(true)}
                        >
                            <i className="bi bi-pencil-fill"></i>
                        </button>

                        {/* DELETE */}
                        <button
                            className="task-delete"
                            onClick={handleDelete}
                        >
                            <i className="bi bi-trash"></i>
                        </button>

                    </div>

                </div>

            </div>


            {/* EDIT MODAL */}

            {showEdit && (

                <div
                    className="modal fade show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                >

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Edit Task
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowEdit(false)}
                                ></button>

                            </div>


                            <div className="modal-body">

                                {/* TITLE */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Task Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        value={editedTask.title}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* DESCRIPTION */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Description
                                    </label>

                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows="3"
                                        value={editedTask.description}
                                        onChange={handleChange}
                                    ></textarea>

                                </div>


                                {/* PRIORITY */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Priority
                                    </label>

                                    <select
                                        name="priority"
                                        className="form-select"
                                        value={editedTask.priority}
                                        onChange={handleChange}
                                    >

                                        <option value="High">
                                            High
                                        </option>

                                        <option value="Medium">
                                            Medium
                                        </option>

                                        <option value="Low">
                                            Low
                                        </option>

                                    </select>

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Due Date
                                    </label>

                                    <input
                                        type="date"
                                        name="dueDate"
                                        className="form-control"
                                        value={editedTask.dueDate}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>


                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowEdit(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSave}
                                >
                                    Save Changes
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}

export default TaskCard;