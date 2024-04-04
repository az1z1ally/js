// Set Timeout & Intervals

//setTimeout() === execute_once_after() runs the code/function once after the timeout.
setTimeout(() => {
	console.log("#1")
}, 0) // even with 0ms delay which is the default setTimout() will still execute after some code has been executed

console.log("#2")
console.log("#3")

// This will start executing after 2ms
// setInterval() === execute_each()  runs the code/function repeatedly, with the length of the timeout between each repeat.
setInterval(() => {
	console.log("setInterval")
}, 2000)

// const intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

// const timeOutID = setTimeout(alert, 1000); // Will alert once, after a second.
// clearTimeout(timeOutID)