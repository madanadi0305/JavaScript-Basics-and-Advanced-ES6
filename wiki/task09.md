# ES6
## Task09
### Write a js program to create map_armstrong function.

* Create a function with two parameters **pre_map** and **arr**. Where **pre_map** 
will be an in-built map provided to you through our test cases and **arr** will be an array of numbers. 
For each element from the given array, your function should check whether 
that element exists in your given **pre_map** as one of its **key** or not.
  * eg: 
    * pre_map { 0 => true, 1 => true, 10 => false, 19 => false, 370 => true }
    * arr [10, 407]
* If it exists then, `delete` it from the **pre_map**
  * eg:
    * pre_map { 0 => true, 1 => true, 19 => false, 370 => true }
* otherwise, `add a new key` in that given **pre_map** where its value will be a boolean value as either `true` or `false` based upon whether that key is an *`armstrong number`* or not. (Remember Armstrong Numbers from your previous repo?)
  * eg:
    * pre_map { 0 => true, 1 => true, 19 => false, 370 => true , 407 => true}
* Then, return your updated map (**pre_map**)
* Export you function using `module.exports`.
