let a = "Global Variable a"

const getUser = () => {
	let user = "unknown"
	const foo = () => {
		const bar = "bar"
		console.log("foo", bar, user, a)
	}

	console.log("getUser", user, a)
	foo()
}