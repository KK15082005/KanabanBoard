import React, { useState } from "react";

function TaskForm({ addTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Todo");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            alert("Please enter task title");
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            status: status,
            priority: priority,
            dueDate: dueDate
        };

        addTask(newTask);

        // Clear form
        setTitle("");
        setDescription("");
        setStatus("Todo");
        setPriority("Medium");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="form-control mb-3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                className="form-select mb-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>

            <select
                className="form-select mb-3"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input
                type="date"
                className="form-control mb-3"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
                Add Task
            </button>

        </form>
    );
}

export default TaskForm;