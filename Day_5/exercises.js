// Exercise#1


const RandomNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const random = Math.floor(Math.random()*100)
        resolve(random)
    },3000)
})
RandomNumber.then((number)=>{
    console.log("random number is : ",number)
})

// Exercise#2


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response)=>{
    if(!response.ok){
        throw new Error("failed to fetch users")
    }
    return response.json()
}).then(data=> console.log(data))
.catch(error=>console.error()
)

// exercise#3
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const emailInput = "haider@example.com";

if (validateEmail(emailInput)) {
  console.log("Valid email");
} else {
  console.log(" Invalid email");
}
