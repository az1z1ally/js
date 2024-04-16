// Array map & filter functions

// MAP FUNCTION

console.log("----------MAP FUNCTION -----------")

const users = [
	{id: 1, name: "sherry", age: 60},
	{id: 2, name: "shilla", age: 37},
	{id: 3, name: "lay", age: 35}
]

// const usernames = []

// for (let i =0; i < users.length; i++) {
// 	usernames.push(users[i].name)
// }


// Using map()
const usernames = users.map((user) => {
	console.log(user)
	return user.name
})

console.log(usernames)

console.log("----------FILTER FUNCTION -----------")


//FILTER FUNCTION
const buddies = [
	{id: 1, name: "sherry", age: 60, isActive:true},
	{id: 1, name: "chedu", age: 55, isActive:false},
	{id: 2, name: "shilla", age: 37, isActive:true},
	{id: 3, name: "lay", age: 35, isActive:true}
]


// const activeUsers = []

// for (let i =0; i < buddies.length; i++) {
// 	if (buddies[i].isActive) {
// 		activeUsers.push(buddies[i])
// 	}
// }

// Using forEach() which is easy to read than forLoop()

// buddies.forEach((user) => {
// 	if (user.isActive) {
// 		activeUsers.push(user)
// 	}
// })


// Using filter()
const activeUsers = buddies.filter((buddy) => buddy.isActive)
console.log(activeUsers)


console.log("---------- FILTERING & LOGGING OLD Buddies -----------")

const getOldUsers = (users) => {
	return users.filter((user) => user.age > 50 )
}

result = getOldUsers(buddies)
console.log(result)