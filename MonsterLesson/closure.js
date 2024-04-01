const privateCounter = () => {
	let count = 0

	return {
		increment: () => {
			count++
		},

		getValue: () => {
			return count
		}
	}
}

// The variable count inside privateCounter() will exist for as long as counter exist

const counter = privateCounter()
counter.increment()
counter.increment()
console.log(counter)
console.log(counter.getValue())
console.dir(counter)