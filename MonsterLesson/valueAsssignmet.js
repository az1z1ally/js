const basicConfig = {
	url: "www.js.com"
}

const getExtendedConfig = (config) => {
	// config.port = "3000" // This will mutate the basicConfig above since its just a reference to an object in the memory
	// return config

	// return {
	// 	url: config.url,
	// 	port: "3000"
	// } // Immutable construction for stable code (returning a new object); The code does'nt mutate the original object it simply return the new data

	return {...config, port: "3000"} // Since we don't know how many properties are in config and it doesn't make sense to write them all in the newly returned object, the spread operator ... was used in "config"
}

const extendedConfig = getExtendedConfig(basicConfig)
console.log(extendedConfig, basicConfig)


const user = ["Js"]
// const user2 = user
// user.push("ECMA") // Array push() is not safe it mutate the original array since both of them refer to the same area in the memory

const user2 = [...user, "ECMA"] // We can use spread operators to avoid that

console.log(user2, user)
