# ES6
## Task08
### Write a js program to create map_sort function.
Create a function with one parameter as **2-D array** (an array of arrays). 
You have to remove all duplicate elements from the internal arrays of the given **2-D array**.  

*For eg*: 

- 2-D Array = `[[1,2,3,8,1,2], [54,26,14,54], [81,4,6,84]]`

- Internal arrays = `[1,2,3,8,1,2]`, `[54,26,14,54]` and `[81,4,6,84]`

* Then, create a *`map`* by considering these new arrays (without any duplicate elements) as their `values` 
where the `keys` will be the **index value of these arrays** according to the given input 2-D array. 
Like `0` for `[1,2,3,8]`, `1` for `[54,26,14]` and `2` for `[81,4,6,84]`.
* Return the above-created map.

* Export your function using `module.exports`.
