function greet(name){
    console.log(`welcome ` + name)
}

function userInput(callback){
    let name = "haider"
    callback(name)
}

userInput(greet)


function hello(){
    console.log("hello from the team")
}

setTimeout(hello,2000)
