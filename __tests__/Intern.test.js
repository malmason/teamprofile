const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email address", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const student = new Intern(name, id, email,"UCONN");
  
      expect(student.name).toEqual("Malcolm Mason");
      expect(student.id).toEqual(500);
      expect(student.email).toEqual(email);
      
    })
  });
  describe("getRole", () => {
    it("should return the role as Intern", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const student = new Intern(name, id, email,"UCONN");
      const result = student.getRole();
      
      expect(result).toEqual("Intern");
    })
  });
  describe("getSchool", () => {
    it("should return the school as UCONN", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const student = new Intern(name, id, email,"UCONN");
      const result = student.getSchool();
      
      expect(result).toEqual("UCONN");
    })
  });

});