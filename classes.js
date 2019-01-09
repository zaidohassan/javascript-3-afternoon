/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

class Employee {
  constructor (first_name, last_name, email, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
  }
    makeWidget () {
      return this.first_name + " " + this.last_name + " " + "Widget";
    }

}





////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co.
  The manager has all the same properties as an Employee. Copy the Employee class and rename it Manager.
  Each manager has the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

class Manager {
  constructor (first_name, last_name, email, age, reports){
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.reports = [];
  }
    
  makeWidget () {
    return this.first_name + " " + this.last_name + " " + "Widget";
  }

    hire (newEmployee){
      this.reports.push(newEmployee)
    }

    fire(firedEmployee){
       this.reports.splice(firedEmployee, 1)
    }

}



////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  Progressive managers have all the same properties as managers. Copy the Manager class and rename
  it to ProgressiveManager. Add the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are hired or fired, the manager's title should be updated based on the number of reports.
    0 reports : Not a manager
    1-3 reports : Barely Manager
    4-10 reports : Mostly Manager
    11-50 reports : Manager
    51-100 reports : Manager Plus
    101+ reports : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

class ProgressiveManager {
  constructor (first_name, last_name, email, age, reports, title, bonus){
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.reports = [];
    this.title = 'Not a manager';
    this.bonus = 0;
  }
    
  makeWidget () {
    return this.first_name + " " + this.last_name + " " + "Widget";
  }

  hire (newEmployee){
    this.reports.push(newEmployee)
    this.updateReport();
  }
    
  fire(firedEmployee){
       this.reports.splice(firedEmployee, 1)
       this.bonus += 100
       this.updateReport();
    }

  updateReport(){
      if (this.reports.length === 0) { 
        this.title = "Not a manager"}
      else if (this.reports.length > 0 && this.reports.length <= 3){
        this.title = "Barely Manager"}
      else if (this.reports.length >= 4 && this.reports.length <= 10) {
        this.title = "Mostly Manager"}
      else if (this.reports.length >= 11 && this.reports.length <= 50) {
        this.title = "Manager"}
      else if (this.reports.length >= 51 && this.reports.length <= 100) {
        this.title = "Manager Plus"}
      else { this.title = "Bestest Manager" }
    }
    
}




////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns an anonymous function that is called when the machine is done rebooting
        - The anonymous function should decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

// NO PARAMETERS?
// increases wear_and_tear_count by 1 for every 50
// anonymous function


class Machine {
  constructor(){
    this.widgets_made_count = 0
    this.wear_and_tear_count = 0
    this.needs_reboot = false
  }
    makeWidgets(num1){
      this.widgets_made_count += num1
      this.wear_and_tear_count += num1/50
    }

    fixMachine(){
      this.needs_reboot = true
    }

    reboot(){
      if (this.needs_reboot = true){
  
        return () => {
          this.wear_and_tear_count -= 10
          this.needs_reboot = false}
      }
      
    }
}

