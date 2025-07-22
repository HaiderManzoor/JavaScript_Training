// exercise #1 Filter an array of numbers to return only values greater than 10 using filter.
let array = [1,2,34,21,33,56,2,3,5,9,10,24,11]
let filtered_array = array.filter(x => x>=10)
console.log(filtered_array)



// exercise #2 Use map to create an array of squared numbers. 

let array_1 = [1,2,3,4,5,6,7,8,9]
result_array = array_1.map(x=> x**2)

console.log(result_array)



// exercise#3 Calculate the average of an array of numbers using reduce.

let array_2 = [1,2,3,4,5,6,7,8,9]

let sum = array_2.reduce((acc,curr)=> acc+curr)

let result = sum/array_2.length

console.log(result)