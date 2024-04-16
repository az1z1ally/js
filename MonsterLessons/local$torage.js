// LOCAL STORAGE
// https://www.freecodecamp.org/news/web-storage-api-how-to-store-data-on-the-browser


/*
	The Web Storage API is a set of APIs exposed by the browser so that you can store data in the browser.
	The data stored in the Web Storage use the key/value pair format, and both data will be stored as strings.

	How the Web Storage API Works?
	The Web Storage API exposes a set of objects and methods that you can use to store data in the browser. The data you store in Web Storage is private, which means no other website can access it.
	
	* There are two types of storage introduced in the Web Storage API: Local Storage and Session Storage.

	* There are other storage menu also has other storage types like Indexed DB, Web SQL, and cookies. The Web SQL standard has been deprecated, and IndexedDB is rarely used because it’s too complex. Any data you store in IndexedDB might better be stored on the server.

	As for cookies, it’s a more traditional mechanism of storing data that only allows you to store a maximum of 4 KB of data. By contrast, the Local Storage capacity is 10 MB and the session storage has 5 MB capacity.

	This is why we’re going to focus only on Local Storage and Session Storage



	* Local Storage and Session Storage are the two standard mechanisms supported by the Web Storage API.

	* Web storage is domain specific, meaning data stored under one domain (netflix.com) can’t be accessed by another domain (www.netflix.com or members.netflix.com)

	* Web storage is also protocol specific. This means the data you store in a http:// site won’t be available under the https:// site.

	The main difference between Local and Session Storage is that Local Storage will store your data forever. If you want to remove the data, you need to use the available method or clear it manually from the Applications tab.

	By contrast, the data stored in session storage is only available during the page session. When you close the browser or the tab, the session storage for that specific tab is removed.

	Both Local and Session Storage can be accessed through the window object under the variables localStorage and sesionStorage, respectively.



*/

const userName = localStorage.getItem("name")

// This can be useful if you want to store some settings about the page even if the user accidentally delete it i.e. saving game progress inside JS(after page reload the game is not started at the beginning but from that specific page b'se you can re-use data from local storage)
if (userName === null) {
	localStorage.setItem("name", "JS")
	// console.log(localStorage.getItem("name")) // This will only be executed when the name key does'nt exist in the localStorage, hence the log was moved after the if()
}

console.log(localStorage.getItem("name")) // If the key doesn’t exist, then getItem() will return null back:

const a = {
	name: "JS",
	value: 2

}

// localStorage.clear(); This will clear the local storage(all key/valu pairs)

localStorage.removeItem("firstName"); // The removeItem() method will always return undefined

const b = JSON.stringify(a)
console.log(a, b, typeof(b), b.length)

sessionStorage.setItem("firstName", "JS");
sessionStorage.setItem("lastName", "JS");

console.log(sessionStorage.length); // 2

sessionStorage.clear();
console.log(sessionStorage.length); // 0

// sessionStorage.clear(); // this will clear the session storage(all key/valu pairs)


// Since Web Storage always stores data as strings, you can store complex data as a JSON string, and then convert that string back into an object when you access it.

// For example, suppose I want to store the following information about a user:
const user = {
  firstName: "JS",
  lastName: "JSON",
  url: "https://js.com",
};


// At first, I might store the data as a series of key/value pairs like this:

// localStorage.setItem("firstName", user.firstName);
// localStorage.setItem("lastName", user.lastName);
// localStorage.setItem("url", user.url);

// But a better way is to convert the JavaScript object into a JSON string, and then store the data under one key as follows:
const userData = JSON.stringify(user);
localStorage.setItem("user", userData);

// Now the local storage will have only one key/value pair with the JSON string as its value. You can open the Applications tab to see this:
// When you need the data, call the getItem() and JSON.parse() methods as follows:
const getUser = JSON.parse(localStorage.getItem("user"));
console.log(getUser); // The data is returned as a regular JavaScript object

/* 

Based on my experience, localStorage is the preferred Web Storage mechanism because the data will persist as long as you need it to. When you don’t need the data, you can remove it using the removeItem() method.

sessionStorage is only used when you need to store temporary data, like tracking whether a popup box has been shown to the user or not.

But this is also open to discussion because you might not want to show a popup every time the user logs into your web application, but only once. In that case, you should use localStorage instead.

My rule of thumb is to use localStorage first, and sessionStorage when the situation needs it.

*/


/*
Benefits of Using the Web Storage API
Now that you know how the Web Storage API works, you can see that there are some benefits of using it:

- Storing data on the browser reduces the need to make a server request for a piece of information. This can improve the performance of your web applications.

- The simple key/value pair format allows you to store user preferences and local settings that should persist between sessions.

- The Web Storage API is simple to use, providing only a few methods and one property. It’s simple to set and retrieve data using JavaScript

- It has offline support. By storing necessary data locally, the Web Storage enables your web application to work offline.

- The Web Storage is also a standardized API, meaning the code you write will work in many different browsers.

But of course, not all data should be stored in the Web Storage API. You still need a server database to keep records that are important for your application.

*/

// Both Local and Session Storage have the same methods and properties

// Both storage types have only one property, which is the length property that shows the amount of data stored in them.

// The main difference between Local and Session Storage is that Local Storage will store your data forever. If you want to remove the data, you need to use the available method or clear it manually from the Applications tab.

// By contrast, the data stored in session storage is only available during the page session. When you close the browser or the tab, the session storage for that specific tab is removed.
