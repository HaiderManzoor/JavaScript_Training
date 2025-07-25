function sync(){
    console.log("step 1")
    console.log("step 2")
    console.log("step 3")
}

sync()


function asyn(){
    console.log("step 1")
    setTimeout(()=>{
        console.log("step 2 comes after 2 secs")
    },2000)
    console.log("step 3")
}
asyn()


async function greet(){
    return "hello"
}

greet().then((msg)=> console.log(msg))



function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data recieved")
        },2000)
    })
}

async function fetcData(){
    console.log("waiting for data")
    const result = await getData()
    console.log("results : ",result)
}
fetcData()