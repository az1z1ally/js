import { getUserNames, bar, foo } from "./utils"
import secretString, { baz } from "./constants"

const usernames = getUserNames([{id: "1", name: "JS"}])
console.log(usernames,bar, foo, secretString, baz)

// Add post from text inputs using API after clicking a button
const postInput = document.querySelector(".postInput")
const postViews = document.querySelector(".postViews")
const postBtn = document.querySelector(".postBtn")

// Binding click event to the button
postBtn.addEventListener("click", async () => {
	if (postInput.value === "" || postViews.value === "") {
		alert("Add some values in the input box before proceeding ")
		return
	}

	// Adding a post
	try {
		await fetch("http://localhost:3000/posts", {
			method: "POST",
			body: JSON.stringify({title: postInput.value, views: Number(postViews.value)}),
			headers: {
		 		"Content-Type": "application/json"
		 	}
		})
	} catch(err){
		console.error("Something is wrong!")
	}

	// Clear input boxes after submitting
	postInput.value = ""
	postViews.value = ""	
 
})