import React from "react";
import { useState } from "react";

function ToDoForm( {addTodo} ) {
	const [todoInput, setTodoInput] = useState("");

	function handleTodoInput(e) {
		setTodoInput(e.target.value);
	}

	function add() {
		addTodo(todoInput);
		setTodoInput("");
	}

	return (
		<div className="col-6">
			<textarea
				className="form-control"
				placeholder="Write here your new task"
				id="taskTextarea"
				name="taskTextarea"
				onChange={handleTodoInput}
				value={todoInput}
				rows="25"></textarea>

			<button
				id="AddTaskBtn"
				onClick={add}
				className="btn btn-outline-secondary w-100 p-2 mt-2"
				type="button">
				Add
			</button>
		</div>
	);
}

export default ToDoForm;
