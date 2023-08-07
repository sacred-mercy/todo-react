import React from "react";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
	const [todo, setTodo] = useState(
		localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
	);

	function addTodo() {
		const newTodo = {
			title: inputTitle,
			description: inputDescription,
			completed: false,
		};
		setTodo([...todo, newTodo]);
		localStorage.setItem("todo", JSON.stringify([...todo, newTodo]));
	}

	return (
		<div class="container">
			<div>
				<h1 class="text-center">ToDo App</h1>
			</div>
			<div class="row text-center">
				<ToDoList />
				<ToDoForm />
			</div>
		</div>
	);
}

export default App;
