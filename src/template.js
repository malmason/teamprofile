const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const fs = require("fs");
const { off } = require("process");


class Template {
  constructor(name, id, email, totalCards){
    this.name = name;
    this.id = id;
    this.email = email;
    this.totalCards = totalCards;
  }
  
  createManager(office) {
    // console.log(`Manager: ${this.name}, ID: ${this.id}, EMail: ${this.email}, Office: ${office}`) 
    let card = ""; 
    let newMgr = new Manager(this.name,this.id,this.email,office);
    card = 
    `<div class="card rounded-top">
      <div class="card-header bg-primary text-white">
        <h3>${newMgr.name}</h3>
        <h5 class="card-title"><i class="fas fa-user-tie"></i> ${newMgr.getRole()}</h5>
      </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: <i class="fas fa-id-badge"></i> ${newMgr.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${newMgr.email}" target="_blank"><i class="fas fa-envelope"></i> ${newMgr.name}</a></li>
        <li class="list-group-item">Office Number: <i class="fas fa-building"></i> ${newMgr.officenumber}</li>
      </ul>
    </div>
  </div>`
    return card;
  }
}



module.exports = Template;
