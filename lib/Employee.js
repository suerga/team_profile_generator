// TODO: Write code to define and export the Employee class

// Employee class
class Employee {
    // Constructor takes name, id and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Method to get employee name
    getName() {
        return this.name;
    }
    // Method to get employee id
    getId() {
        return this.id;
    }
    // Method to get employee email
    getEmail() {
        return this.email;
    }
    // Method to get employee role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;