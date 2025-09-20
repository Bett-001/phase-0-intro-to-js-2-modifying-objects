// index.test.js
const {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
} = require("./index");

describe("employees", () => {
  it("updates employee non-destructively", () => {
    const updated = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
    expect(updated).toEqual({ name: "Sam", streetAddress: "11 Broadway" });
    expect(employee).toEqual({ name: "Sam" });
  });

  it("updates employee destructively", () => {
    const updated = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
    expect(updated).toEqual({ name: "Sam", streetAddress: "12 Broadway" });
    expect(employee).toEqual({ name: "Sam", streetAddress: "12 Broadway" });
  });

  it("deletes from employee non-destructively", () => {
    const updated = deleteFromEmployeeByKey(employee, "name");
    expect(updated).toEqual({ streetAddress: "12 Broadway" });
    expect(employee).toEqual({ name: "Sam", streetAddress: "12 Broadway" });
  });

  it("deletes from employee destructively", () => {
    const updated = destructivelyDeleteFromEmployeeByKey(employee, "name");
    expect(updated).toEqual({ streetAddress: "12 Broadway" });
    expect(employee).toEqual({ streetAddress: "12 Broadway" });
  });
});
