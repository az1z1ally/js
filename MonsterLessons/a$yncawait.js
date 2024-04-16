// PROMISES

// Promises allow us to work with asynchronous code in an easy way
// const getData = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve([{id: "1", name: "JS"}])
// 		}, 2000)
// 	})
// }

// const promise = getData()

// promise
// 	.then((data) => {
// 		console.log("I got data", data)
// 	})
// 	.catch((data) => {
// 		console.log("I have an error", data)
// 	})
// 	.finally(() => {
// 		console.log("Finally its done")
// 		
// 	})


// Re-writting getData() function with async which will still return a Promise 
const getData = async () => {
	return [{id: "1", name: "JS"}]
}


// Althoug promises are cool but we can still do better, we finally got something better that leverages promises but do it in a new level

// ASYNC AWAIT

const response = await getData() // Using await to resolve our promise return form getData()
console.log(response)


// PROMISES DILEMMA
const getCurrentUser = async () => {
	return {id: "1"}
}

const getCurrentUserDetails = async (id) => {
	throw new Error("Something bad happened!") // Simulation of function throw an error to catch them in await
	return {name: "JS"}
}

// Using promises
// getCurrentUser().then((currentUser) => {
// 	getCurrentUserDetails(currentUser.id).then((details) => {
// 		console.log(details)
// 	})
// })


// Using await
const getFullUser = async () => {
	try{
		const currentUser = await getCurrentUser()
		return await getCurrentUserDetails(currentUser.id)
	} catch(err) {
		console.error("Some error happened!")
	}
}

const details =  await getFullUser()
console.log(details)