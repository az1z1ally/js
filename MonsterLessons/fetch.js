// Fetching data from API
// const loadPosts = async () => {
// 	const response = await fetch("http://localhost:3000/posts") // fetch() return a promise
// 	const json = await response.json()
// 	return json
// }

// const results = await loadPosts()
// console.log(results)


// Adding a record
// const createPost = async () => {
// 	 const response = await fetch("http://localhost:3000/posts", {
// 	 	method: "POST",
// 	 	body: JSON.stringify({title: "Hello W0rld", views: 900}),
// 	 	headers: {
// 	 		"Content-Type": "application/json"
// 	 	}
// 	 }) // JSON.stringfy() converts data to string

// 	 const json = await response.json()
// 	 return json
// }

// window.createPost = createPost // Assing createPost() to the window property so that we can use it inside console(make it global), b'se we are using (it levaerage module) workflow, it's not necessary if you are using a normal JS workflow


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