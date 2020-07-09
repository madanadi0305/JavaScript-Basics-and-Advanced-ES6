# ES6
## Task02
### Write a js program for job assurance
Create a function named **jobAssurance** with six members and three input parameters namely **name**, **age**, **gender**, and **experience**.
* Input parameters:
  * name: Name of employee
    * eg: "Ritwick"
  * age: Age of employee
    * eg: "25yrs"
  * gender: Gender of employee
    * eg: May be "M" (for male) or "F" (for female)
  * experience: Years of experience the employee does have
    * eg: "5yrs"
* Members:
  * name: will contain employee name with a prefix **Mr.** or **Mrs.**.
    * eg, name = "Ritwick", then it should become "Mr. Ritwick" if gender is "M" otherwise, "Mrs. Ritwick"
  * age: should contain actual age of employee in numbers not as like given string
  * gender: remains in its original form as taken from input parameter.
  * experience: should contain actual year of experience the employee have in numbers not as like given string
  * isEligible
  * isExperienced
  * getStatus
* **isEligible** function will return boolean value either `true` or `false` depends on whether the employee is above 17 or not respectively.
* **isExperienced** function will return boolean value either `true` or `false` depends on whether the employee is having an experience of working for more than 4years or not respectively.
* **getStatus** function will return string as employee status whether his/her job is assured or not
  * If the employee is eligible and have required experience then his/her status should be in favour
    * Eg: "Congratulation Mr. Ritwick, your job is assured"
  * Otherwise, status wpuld not not be in favour
    * Eg, "Sorry Mr. Ritwick, we can not assure your job"
* *Caution*: All members should be defined using `this` keyword.

Steps:
* You have to code inside **task02.js** file.
* Finally export your function using 
* ```js
  module.exports = jobAssurance;
  ```