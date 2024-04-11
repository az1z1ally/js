const user = {
	name: "JS",
	surname: "ECMA",
	age: 20, 
	isActive: true
}

// console.log(user.name, user.age)

// const name = user.name
// const age = user.age

const {name, age} = user // Destruct name & age on the left from user object
console.log(name, age)

// const getFullName = (user) => {
// 	return `${user.name} ${user.surname}`
// 

// The function above can be written as because you might not what to read all the properties from user
const getFullName = ({name, surname}) => {
	return `${name} ${surname}` // Note: we did'nt destruct age & isActive and the code will still work
}

// Using positional argument
// const getFullName = (name, surname, age, isActive) => {
// 	return `${name} ${surname}`
// }

// getFullName("JS", "ECMA", true, 30) // Note here we are following a strict order and we have no idea what we provide in here if we don't see our fuction eg. what does it mean 30)

console.log(getFullName(user))

// Destructuring can be really handy especially when you need to provide lots of different parameters to your function that are not related to a single entity like user, but if its all about user then it make sense to pass "user" in the argument