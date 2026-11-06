const express = require('express');
const app = express();

app.use(express.json());

const employees = [
    { empId: 1, name: 'John Doe', salary: 50000, department: 'Engineering' },
    { empId: 2, name: 'Jane Smith', salary: 60000, department: 'Marketing' },
    { empId: 3, name: 'Mike Johnson', salary: 55000, department: 'Sales' },
    { empId: 4, name: 'Emily Davis', salary: 70000, department: 'HR' },
    { empId: 5, name: 'David Wilson', salary: 65000, department: 'Finance' },
];

app.get('/employees', (req, res) => {
    res.json(employees);
});
app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    const employee = employees.find(employee => employee.empId === Number(id));

    if (!employee) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    }
    res.json({ success: true, employee });
});
app.post('/employees', (req, res) => {
    const employee = req.body;
    employees.push({ empId: employees.length + 1, ...employee });
    res.json({ success: true, employee });
});
app.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const employee = req.body;
    const result = employee.findIndex(employee => employee.empId === Number(id));
    if (!result) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    }
    result.name = employee.name;
    result.salary = employee.salary;
    result.department = employee.department;
    res.json({ success: true, employee: result });
});
app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    const result = employees.findIndex(employee => employee.empId === Number(id));
    if (!result) {
    res.status(404).json({ success: false, message: 'Employee not found' });
}
employees.splice(id - 1, 1);
res.json({ success: true, result })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});