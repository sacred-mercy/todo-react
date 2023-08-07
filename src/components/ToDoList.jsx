import React from "react";
import Button from "./button";

function ToDoList({ todo, setTodo }) {
	function editTask() {
		console.log("edit task");
	}

	function checkTask() {
		console.log("check task");
	}

	function deleteTask() {
		console.log("delete task");
	}

	return (
		<div className="col-6 rounded overflow-scroll mb-0 h-100">
			{todo.length === 0 ? (
				<div>
					<p className="text-center fs-4">No tasks, add a task</p>
				</div>
			) : (
				todo.map((todo) => {
					return (
						<div
							key={todo.id}
							className="my-1 pill rounded d-flex align-items-center justify-content-around">
							<p className="taskText px-1 text-start text-break fs-4">
								{todo.title}
							</p>
							<div className="ms-auto">
								<Button className="btn-info" onClick={editTask}>
									edit
								</Button>
								<Button onClick={checkTask}>check</Button>
								<Button className="btn-danger" onClick={deleteTask}>
									close
								</Button>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}

export default ToDoList;
