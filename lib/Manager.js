// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Manager class
class Manager extends Employee {
    // Constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Method to get office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Method to get manager role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;