const users = [{id : 1},{id : 2}]
let user = users.find(u => u.id==2)
console.log(user)


const nums = [12,2,3,34,56,78,90]
const find = nums.findIndex(n=>n==78)
console.log(find)


console.log(nums.some(n => n>26))

console.log(nums.every(n=>n>1))
console.log(nums.every(n=> n>7))