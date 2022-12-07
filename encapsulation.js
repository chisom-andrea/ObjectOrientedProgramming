class Employee {

    setEmployeeDetails(name, id, phoneNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
    }
    getEmployeeName() {
        return this.name
    }
    getEmployeeId() {
        return this.id
    }
    getEmployeePhoneNo() {
        return this.phoneNo
    }

}

let Employee1 = new Employee
Employee1.setEmployeeDetails('John', 2000, 22446688);
console.log (Employee1.getEmployeeName());
console.log (Employee1.getEmployeeId());
console.log (Employee1.getEmployeePhoneNo());




