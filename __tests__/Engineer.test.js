const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email address", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const eng = new Engineer(name, id, email);
  
      expect(eng.name).toEqual("Malcolm Mason");
      expect(eng.id).toEqual(500);
      expect(eng.email).toEqual(email);
      
    })
  });
  describe("getRole", () => {
    it("should return the role as Engineer", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const emp = new Engineer(name, id, email,"malmason");
      const result = emp.getRole();
      
      expect(result).toEqual("Engineer");
    })
  });
  describe("getGithub", () => {
    it("should return the github username", () => {
      const name = "Malcolm Mason";
      const id = 500;
      const email = "malmason66@gmail.com";
      const emp = new Engineer(name, id, email,"malmason");
      const result = emp.getGithub();
      
      expect(result).toEqual("malmason");
    })
  });

});