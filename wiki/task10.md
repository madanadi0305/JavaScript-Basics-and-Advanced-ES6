# ES6
## Task10
### Write a js program for map
Create a function named **map** with three input parameters **arr1**, **arr2** and **key**.
* **arr1** will contain keys to be used while creating map.
  * eg, arr1 = [key1, key2]
* **arr2** will contain related values for **arr1**.
  * eg, arr2 = [value1, value2]
* **key** will contain key to be search
* You have to make a map using **arr1** as key and **arr2** as their corresponding values.
* If the third input parameter **key** exist in that map then,
  * Delete that key value pair completely from your map
  * And return an object in given format:
    * ```js
        {
            value: // value across that given key in the map, 
            size:  // size of your final map after deletion of key, 
            keys:  // Array of remaining keys in map, 
            map:   // Final map
        }
      ```
* Otherwise, return a string in following format: (new lines are mandatory **`between`** each key:value pair)
  * ```
    key1:value1
    key2:value2
    key3:value3
    ```
* Export your function using `module.exports`.