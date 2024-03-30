const list = document.querySelector(".list")

const button = document.querySelector(".submit")

// Adding event Listeners to element in the page
button.addEventListener("click", (event) => {
	console.log("clicked!")

	// Creating a new node to add to the DOM Tree
	const newElement = document.createElement("div")
	newElement.setAttribute("id", "1")
	newElement.appendChild(document.createTextNode('We created it in JS'));  // You can use innerText or innerHTML
	
	// Adding a new node as a child
	list.appendChild(newElement)
})