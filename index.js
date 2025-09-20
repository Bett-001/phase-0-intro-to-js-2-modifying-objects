// index.js

// Example object provided by the lab
const employee = {
  name: "Sam"
};

// Update an employee with a key and value, non-destructively
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value
  };
}

// Update an employee with a key and value, destructively
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Delete a property non-destructively
function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

// Delete a property destructively
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

// Export functions for testing
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};
