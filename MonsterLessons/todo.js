const todoForm = document.querySelector(".todoForm")
const todoInput = document.querySelector(".todoInput")
const todoList = document.querySelector(".todoList")

todoForm.addEventListener("submit", (event) => {
	event.preventDefault()
	const todo = document.createElement("div")
	todo.classList.add("todoListItem")
	todo.innerHTML = `<span>${todoInput.value}</span> <span class="deleteTodo">X</span>`

	// Append a new todo to the todoList
	todoList.appendChild(todo)

	const deleteTodoBtn = todo.querySelector(".deleteTodo")
	deleteTodoBtn.style.cursor = "pointer"
	// Bind an event listener for each deleteButtonn added
	deleteTodoBtn.addEventListener("click", () => {
		deleteTodoBtn.parentNode.remove()  // deleteTodoBtn.parentElement.remove()
	})

	// Clear form input after each submission
	todoInput.value = ""
})