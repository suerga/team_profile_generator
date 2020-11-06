// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee {
    // Constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Method to get Github username
    getGithub() {
        return this.github;
    }
    // Method to get engineer role
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;