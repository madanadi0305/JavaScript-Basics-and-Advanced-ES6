# ES6
## Task10
### Write a js program for map

Create a function named **map** with three input parameters **arr1**, **arr2** and **key**.

* **arr1** will contain the keys which will be used to create a map later.
  * eg, arr1 = [key1, key2]
* **arr2** will contain the related values for each and every single key present inside **arr1** respectively at same index.
  * eg, arr2 = [value1, value2]
* **key** will contain the key to be searched

* Now, You have to make a **map** using the elements in **arr1** as keys and the elements in **arr2** as their corresponding values.
  * eg, map { key1 => value1, key2 => value2 }
* If the third input parameter **key** exist in that map then,

  * Delete that key-value pair completely from your map
  * And return an object in given format:

    ```js
        {
            value: // value across that given key (third input parameter) in the map, 
            size:  // size of your final map after deletion of key, 
            keys:  // Array of remaining keys in map, 
            map:   // Final map
        }
    // eg
        {
            value: value1, // if the third input parameter is key1
            size: 1,
            keys: [key2],
            map: map { key2 => value2 }
        }
    ```

* Otherwise if the third input key does not exist in the map, return a string in the following format: (new lines are mandatory **`between`** each key:value pair)
  
```
"key1:value1
key2:value2"
```

* Export your function using `module.exports`.