const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email address", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const emp = new Employee(name, id, email);
  
      expect(emp.name).toEqual("Malcolm Mason");
      expect(emp.id).toEqual(500);
      expect(emp.email).toEqual(email);
      
    })
  });
  describe("getRole", () => {
    it("should return the role as Employee", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const emp = new Employee(name, id, email);
      const result = emp.getRole();
      
      expect(result).toEqual("Employee");
    })
  });

});
