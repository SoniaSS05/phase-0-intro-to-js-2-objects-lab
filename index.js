// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(objectName, keyName, valueNum){
    const newEmployee = Object.assign( {}, objectName, {[keyName]:valueNum});
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(objectName, keyName, valueNum){
    objectName[keyName] = '12 Broadway';
    return objectName;
    
}

function deleteFromEmployeeByKey(objectName, keyName){
    const newEmployee = {...objectName};
    delete newEmployee[keyName];
    return (newEmployee);
}

function destructivelyDeleteFromEmployeeByKey(objectName, keyName){
    delete objectName[keyName];
    return (objectName);
}

const nuevo = updateEmployeeWithKeyAndValue(employee, 'streetAddress',' ');
const nuevo1 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
const nuevo2 = deleteFromEmployeeByKey(employee, 'name');
const nuevo3 = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);
console.log(nuevo1);
console.log(nuevo2);
console.log(nuevo3);


