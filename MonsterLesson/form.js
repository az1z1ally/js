const registerForm = document.querySelector(".registerForm")
const emailInput = document.querySelector(".emailInput")
const usernameInput = document.querySelector(".usernameInput")
const passwdInput = document.querySelector(".passwdInput")

registerForm.addEventListener("submit", (event) => {
	event.preventDefault()

	// Remove all error messages at the beginning of submission
	const errorMsgs = document.querySelectorAll(".errorMsg")
	console.log(errorMsgs)
	errorMsgs.forEach(errorMsg => errorMsg.remove())

	// Check is email input is empty
	if (emailInput.value === "") {
		const errorMsg = document.createElement("span")
		errorMsg.classList.add("errorMsg")
		errorMsg.innerText = "Email is empty"
		emailInput.parentNode.appendChild(errorMsg)
	}

	// Check is username input is empty
	if (usernameInput.value === "") {
		const errorMsg = document.createElement("span")
		errorMsg.classList.add("errorMsg")
		errorMsg.innerText = "Username is empty"
		usernameInput.parentNode.appendChild(errorMsg)
	}

	// Check is password input is empty
	if (passwdInput.value === "") {
		const errorMsg = document.createElement("span")
		errorMsg.classList.add("errorMsg")
		errorMsg.innerText = "Password is empty"
		passwdInput.parentNode.appendChild(errorMsg)
	}
	console.log("submit", emailInput.value, usernameInput.value, passwdInput.value)
})