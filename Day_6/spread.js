n1 = [1,2,3]
n2= [...n1,4,5]
console.log(n2)




n3 = [1,2,3,4,5]
n4 = [6,7,8,9,0]

merged = [...n3,...n4]
console.log(merged)


const original = [10, 20, 30];
const clone = [...original];
console.log(clone)


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)


// default parameteres


function greet(name="guest"){
    console.log(`hello ${name}`)
}
greet()
greet("haider")