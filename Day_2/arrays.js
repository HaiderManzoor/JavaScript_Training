let fruits = ["apple","mango","guava"]
console.log(fruits[1])


let arr = new Array(5)

console.log(arr.length)
arr[0] = "haider"
arr[2] = 2
console.log(arr)
arr.length = 2
console.log(arr)


// push() — Add to the end of the array

arr.push("inovaqo")
console.log(arr)


// pop() — Remove the last element

arr.pop()
console.log(arr)

arr.pop("haider")
console.log(arr)

// unshift

arr.unshift("pucit")
console.log(arr)

arr.shift()
console.log(arr)


let items = [1,2,3,4,5]
sliced_array = items.slice(1,3)
console.log(items)
console.log(sliced_array)


let arr2 = [1,2,3,4,5]
arr2.splice(1,0,99)
console.log(arr2)

console.log(arr2.indexOf(99))

const arr3 = ["a","b","c"]
let arr4 = arr3.join("-")
console.log(arr4)


let nums = [1,2,3]
nums.reverse()
console.log(nums)


const array = [1,2,3,4,5,6]
let len_array = array.length
for(let i =0 ; i< len_array;i++){
    console.log(array[i])
}


for(let item of array){
    console.log(item)
}

array.forEach(function(item,index){
    console.log(`items : ${item} , Index : ${index}`)
})

array.forEach((item,index)=>{
    console.log("arrow function")
    console.log(`items : ${item} , Index : ${index}`)
})


let num = [1,2,3,4]
let sq_num = num.map(x=>x**2)
console.log(sq_num)


let even = num.filter(x=> x%2 ==0)
console.log(even)



let numbers = [1,2,3,4,5,6,7,8,9]
let sum = numbers.reduce((acc,curr)=>acc+curr,0)
let avg = sum/numbers.length
console.log(avg)

let i =1
do {
    console.log("i = ",i)
    i++
}while(i<=3)


let person = {
    name : "haider",
    age : 22,
    location : "lahore"
}
for(let key in person){
    console.log("key : ",person[key])}





// nested loop



for(let i =0; i<=3;i++){
    for (let j = 0; j<=2 ;j++){
        console.log(`Row ${i} , Column ${j}`)
    }
}


let matrix = [
  [1, 2, 3],  // row 0
  [4, 5, 6],  // row 1
  [7, 8, 9]   // row 2
];

console.log(matrix[0][1])

for(let i = 0 ; i< matrix.length;i++){
    for(j=0; j<matrix[i].length;j++){
        console.log(`matrix[${i}][${j}] = `,matrix[i][j])
    }
}


// try catch error 
try{
    let x = y + 1
}catch(error){
    console.log("error messsage : ", error.message)

}finally{
    console.log("program runs finally")
}


function withdraw(amount) {
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }
  console.log(`Withdrawing Rs. ${amount}`);
}

try {
  withdraw(100);
} catch (e) {
  console.log(e.message);
}
