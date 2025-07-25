const person = {
    name : "haider",
    age : 22,
    IsStudent : true
}

const strinfgified = JSON.stringify(person)
console.log(strinfgified)


const parsed = JSON.parse(strinfgified)
console.log("parsed data : ",parsed)
