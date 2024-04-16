// All code in JS is sync by default

// But sometimes we need asynchronous code because some operations may take some time. A typical use case for asyc code will be calling an API
// So we don't want to stop the execution our code waiting for the asyn code to finish executing(we can always comeback later)

// This is the async function, it will deliver for us data after sometime(setTimeout() simulation)
const getData = (callback) => {
	// Long API call
	setTimeout(() => {
		console.log("I got data from API")
		callback([{id: "1", name: "data"}])
	},2000)
}

console.log("#1")

let users
getData((data) => {
	console.log("In my project I got data from API", data)
	users = data
})
console.log("#2")

// Note: Callback is the oldest approach of handling asynchronous code