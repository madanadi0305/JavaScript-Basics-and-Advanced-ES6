# ES6
## Task02
### Write a js program for job assurance
Create a function named **jobAssurance** with seven members and four input parameters namely **name**, **age**, **gender**, and **experience**.
* Input parameters:
  * name: Name of the employee
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
  * age: should contain actual age of an employee in numbers not as like given string
    * eg: If age in input parameter is "25yrs" then it should become **25**.
  * gender: remains in its original form ("M" or "F") as taken from the input parameter.
  * experience: should contain the actual year of experience the employee has in numbers not as like given string
    * eg: If experience in input parameter is "5yrs" then it should become **5**.
  * isEligible
  * isExperienced
  * getStatus
* **isEligible** function will return boolean value either `true` or `false` depends on whether the age of employee is above 17 or not respectively.
* **isExperienced** function will return boolean value either `true` or `false` depends on whether the employee is having the experience of working for more than 4years or not respectively.
* **getStatus** function will return a string as employee status whether his/her job is assured or not
  * If the employee is eligible and has required experience then his/her status should be in favour as given below:
    * Eg: "Congratulation Mr. Ritwick, your job is assured"
  * Otherwise, the status would not be in favour as given below:
    * Eg, "Sorry Mr. Ritwick, we can not assure your job"
* *Caution*: All members should be defined using `this` keyword.

Steps:
* You have to code inside **task02.js** file.
* Finally, you have to export your function using the below code:
```js
  module.exports = jobAssurance;
  ```