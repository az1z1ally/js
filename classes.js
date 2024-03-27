class User {
	constructor(firstName, surName) {
		console.log("constructor", firstName, surName)
		this.firstName = firstName
		this.surName = surName
	}

	getFullName() {
		return `${this.firstName} ${this.surName}`
	}
} 

// Inheritance
class Admin extends User {
	constructor(firstName, surName, role) {
		super(firstName, surName)
		this.role = role
	}
}


const user = new User("Kannel", "SMPP")
const admin = new Admin("Admin name", "Admin surname", "SUPER_ADMIN")

console.log(user)

console.log(admin)
console.log(admin.getFullName())