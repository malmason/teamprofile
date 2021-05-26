const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email address", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const mgr = new Manager(name, id, email);
  
      expect(mgr.name).toEqual("Malcolm Mason");
      expect(mgr.id).toEqual(500);
      expect(mgr.email).toEqual(email);
      
    })
  });
  describe("getRole", () => {
    it("should return the role as Manager", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const emp = new Manager(name, id, email,"1");
      const result = emp.getRole();
      
      expect(result).toEqual("Manager");
    })
  });

});