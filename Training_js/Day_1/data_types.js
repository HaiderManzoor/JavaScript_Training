let n1= 10
console.log(n1)

let n2 = 1.5

console.log(n2)

n3 = Infinity;
console.log(n3)

n4 = "jncsdbcjjbcj."/2
console.log(n4)



// Strings 
s1  = "heloooo haider"

console.log(s1)

s2 = 'single qores'
console.log(s2)

s3 = `use for embedding ${s1}`

console.log(s3)

// boolean 


let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);


let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);



// non primitive Data types 

let gfg = {
    name : "haider",
    location : "lahore"
}

console.log(gfg.type)



// functions 

function greet(name){
    return `hello welcome ${name} !!!!`

}
console.log(greet("haider"));



// date object 

let now = new Date()
console.log(now)

let myBday = new Date("2000-06-18");
let day = myBday.getDay();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("You were born on a:", days[day]);




const age = 20
if (age>=18 && age<25){
    console.log("you are eligible")
}

const a = true ,c = false ;
console.log(a&&c);
console.log(a || c);


// ternary operations 

let age_h = 20
const msg = (age > 18) ? "you can vote" : "you cannot vote"
console.log(msg)

console.log(5===5)


// PRE and post increment 

let x = 5
let y = ++x
console.log(x,y)



// Control flow: if, else, switch, break, continue. 

let score  = 81

if (score >= 90){
    console.log("A grade")
}
else if(score >80 && score <90){
    console.log("B grade")
}else{
    console.log("below average")
}

// switch statement 

let day_1 = "tuesday"

switch(day_1){
    case "monday":
        console.log("first day of week")
        break;
    case "tuesday":
        console.log("second day of week")
        break;
    case "friday":
        console.log("weeekend is comingggg")
        break;
    default:
        console.log("regular day")
}


// loop
for (let i = 1; i<=5;i++){
    if (i ==3){
        break
    }
    console.log(i)
}

for (let j =0 ; j<=7;j++){
    if (j==4){
        continue
    }
    console.log(j)
}

// practice
// let number  = parseInt(prompt("enter a number : "))
// if (number > 0){
//     console.log("positiv number")
// }else if (number < 0){
//     console.log("negative number")

// }else{
//     console.log("number is zero")
// }


const welcome = function(name){
    console.log(`welcome ${name} to inovaqo`)

}
welcome("haider")

let age_a = 15;
if (age_a < 18) {
  console.warn("You are underage!");
}


let isConnected = true;
if (!isConnected) {
  console.error("Failed to connect to the server!");
}
