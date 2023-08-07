import React from "react";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

let todoId = localStorage.getItem("todoId") ? JSON.parse(localStorage.getItem("todoId")) : 0;

function App() {
	const [todo, setTodo] = useState(
		localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
	);

	function addTodo(todoInput) {
		const newTodo = {
			id: todoId++,
			title: todoInput,
			completed: false,
		};
		setTodo([...todo, newTodo]);
		localStorage.setItem("todo", JSON.stringify([...todo, newTodo])); // this is to keep track of the todo
		localStorage.setItem("todoId", JSON.stringify(todoId)); // this is to keep track of the id
	}

	const ToDoListProps = {
		todo,
		setTodo,
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center">ToDo App</h1>
			</div>
			<div className="row text-center">
				<ToDoList {...ToDoListProps} />

				<ToDoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
