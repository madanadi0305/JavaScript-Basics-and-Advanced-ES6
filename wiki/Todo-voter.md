# ToDo
#### Make a function named **`voting`** with two members and having one input parameter namely `age`.
* Input parameters
  * age: Age of the canditate (in string with prefix *yrs*).
    * eg: "48yrs"
* Members
  * Age: will contain age of the citizen in numeric form
    * eg: 48
  * isEligible
* **isEligible** function will return a string saying 
  * **You are eligible for voting.** if age of candidate is greater than 17.
  * otherwise the returning string will say **Sorry, you are not eligible for voting. Come back later.**.
* *Caution*: All members should be defined using `this` keyword.

```js
const voting = function(age) {
    this.Age = parseInt(age),
    this.isEligible = function () {
        if(this.Age>=18)
            return "You are eligible for voting.";
        else return "Sorry, you are eligible for voting. Come back later."
    }
}
const candidate1 = new voting("44yrs");
console.log("For candidate1 =>", candidate1.isEligible());
const candidate2 = new voting("15yrs");
console.log("For candidate2 =>", candidate2.isEligible());
```
* **`You should practice this code-snippet in the pactice file`**.
