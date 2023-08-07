import React from "react";

function ToDoList(props) {
	return (
		<div className="col-6 rounded overflow-scroll mb-0" id="viewArea">
			<div
				id="taskPill"
				className="my-1 pill rounded d-flex align-items-center justify-content-around">
				<p className="taskText px-1 text-start text-break fs-4">text</p>
				<button
					className="ms-auto btn-sm btn-info"
					onclick="editTask(this)"
					id="taskEdtBtn">
					<span className="material-symbols-outlined">edit</span>
				</button>
				<button className="btn-sm mx-1" onclick="checkBoxClick(this)" id="checkbox">
					<span className="material-symbols-outlined">check</span>
				</button>
				<button
					className="btn-sm btn-danger deleteButton"
					onclick="deleteTask(this)"
					id="taskDltBtn">
					<span className="material-symbols-outlined">close</span>
				</button>
			</div>
		</div>
	);
}


export default ToDoList;