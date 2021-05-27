# 🏢 Profile Generator

![header](./dist/images/header.jpg)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 


## 📝 Description

```
This is a Node.js command-line application that prompts the user for information about their team. It requests Manager, Engineer, and Intern information and takes the input received and generates a card based webpage displaying the resulting team members.
```

## 🧰 Technologies Used

* `Node.js`
* `npm (Node Package Manager)`
* `Javascript`
* `Inquirer`
* `Bootstrap`
* `Font-Awesome`
 
## 📄 Installation Instructions

You will need to install the latest version of [Node](https://nodejs.org/en/) as well as the [Inquirer](https://www.npmjs.com/package/inquirer) package.

## 🉑 Tests

To test this application, open a command prompt and run node index.js. The video link below demonstrates this process.

[Video Demonstration](https://drive.google.com/file/d/12lTeJTEOYwCyFaK1x2njscZAl-Q4ulUu/view?usp=sharing)


![video](./dist/images/video.jpg)

## 🤸‍♂️ Challenges/Successes
* How to handle recursively asking questions using inquirer as the user has the option to add as many Engineers and Interns they see fit.
  * Created 3 functions to handle the different questions and called them recursively based on the users response to continue adding employees.
* How to keep track of all question responses to generate the profiles once all questions have been answered.
  * Used 3 arrays and pushed the responses into the correct array from each call of the questions.
* Generating tests for each of the Class files.
  * Successfully created multiple tests for the parent Employee Class and all of the classes that inherit from Employee.
* Handling external calls from the template literal to build the HTML file.
  * Successfully implemented multiple functions and helper template file to generate the Employee cards as well as to handle processing all question responses from the stored arrays.


## 📸 Screenshots

 > Below is a screenshot of the home page after the file has been generated.


![Homepage](./dist/images/home.jpg)

## 📱 Contact 

Malcolm Mason - [Github](https://github.com/malmason) Email: [Malcolm](mailto:malmason66@gmail.com) 📧

---

&copy; 2021 Malcolm Mason