import React from "react";
import { useState } from "react";

function ToDoForm() {
	const [inputTitle, setInputTitle] = useState("");

	function changeTitle(e) {
		setInputTitle(e.target.value);
	}

	const [inputDescription, setInputDescription] = useState("");

	function inputDescriptionChange(e) {
		setInputDescription(e.target.value);
	}

	return (
		<div className="col-6">
			<textarea
				className="form-control"
				placeholder="Write here your new task"
				id="taskTextarea"
				name="taskTextarea"
				rows="20"></textarea>

			<input
				type="file"
				name="imgFile"
				id="imgFile"
				className="form-control my-2"
				accept="image/*"
				required
			/>

			<button
				id="AddTaskBtn"
				// onclick="addToDo()"
				className="btn btn-outline-secondary w-100 p-2 mt-2"
				type="button">
				Add
			</button>
		</div>
	);
}

export default ToDoForm;
