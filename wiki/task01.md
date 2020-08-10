# ES6
## Task01
### Write a js program for number system
Create an object named **numberSystem** with three members.
* Members: 
  * The first member is an object having 2 properties with **primeNumbers** and **fibonacci** as keys and a number (positive integer) as value as shown below (you can put any number of your choice):

    ```js
    numberData: {
        primeNumbers: // put a number (positive integer) here,
        fibonacci: // put a number (positive integer) here
    }
    ```
  * The second member is a function with name sum_prime_number 
  * The third member is a function with name fibonacci_Nth_term
* **sum_prime_number** function will calculate and return sum of all the prime numbers which exist before the number value mentioned above with **primeNumbers** key inside **numberData** member. For eg - if number value is 6, the function will calculate: 2+3+5 = 10
* **fibonacci_Nth_term** function will calculate and return the **Nth** term of a fibonacci series, where **N** is the number value mentioned above with **fibonacci** key inside **numberData** member. For eg -  if number value is 6, the function will calculate the 6th fibonacci term : 8
* *Caution*: For accessing members in an object, you have to use `this` keyword.

Steps:
* You have to code inside **task01.js** file.
* Finally export your object using the below code:
```js
  module.exports = numberSystem;
  ```