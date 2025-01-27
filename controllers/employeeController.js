const Employee = require('../models/EmployeeModel');

// Create employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;
    const newEmployee = new Employee({ name, position, department, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await employee.deleteOne();
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

