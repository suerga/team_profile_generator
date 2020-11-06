// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Intern class
class Intern extends Employee {
    // Constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Method to get school
    getSchool() {
        return this.school;
    }
    // Method to get intern role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;