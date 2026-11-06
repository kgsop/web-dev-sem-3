const employees=require("../data/employeeData.js");

const getEmployees=(req,res)=>{
    res.json(employees)
}

const getEmployeeById=(req,res)=>{
    const id=req.params.id;
    const employee=employees.find((employee)=>employee.empId===Number(id));
    if(!employee){
        return res.status(404).json({success:false, message:"employee not found"});
    }
    return res.json({success:true,employee});
    
}

const addEmployee=(req,res)=>{
    const employee=req.body;
    const nextId = employees.length ? Math.max(...employees.map((emp)=>emp.empId)) + 1 : 1;
    const newEmployee = { empId: nextId, ...employee };
    employees.push(newEmployee);
    return res.status(201).json({success:true, employee: newEmployee});  
}

const updateEmployee=(req,res)=>{
    const id=req.params.id;
    const employee=req.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        return res.status(404).json({success:false, message:"employee not found"});
    }
    result.name=employee.name;
    result.salary=employee.salary;
    result.department=employee.department;
    return res.json({success:true, employee: result});
}

const deleteEmployee=(req,res)=>{
    const id=req.params.id;
    const index = employees.findIndex((employee)=>employee.empId===Number(id));
    if(index === -1){
        return res.status(404).json({success:false, message:"employee not found"});
    }
    const [deletedEmployee] = employees.splice(index,1);
    return res.json({success:true, employee: deletedEmployee});
}

module.exports={
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
}