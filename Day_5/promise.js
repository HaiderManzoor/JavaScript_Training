const my_promise = new Promise((resolve,reject)=>{
    const sucess = true
    if(sucess){
        resolve("operation sucessfull")
    }else{
        reject("operation failed")
    }
})
console.log(my_promise)

my_promise.then((message)=>{
    console.log("then : ",message)
}).catch((error)=>{
    console.log("there is some error ",error)
}).finally(()=>{
    console.log("this will finally run no matter what")
})


const fetchData = ((sucess)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(sucess){
            resolve("operation done successfully")
        }
        else{
            reject("operation failed")
        }
        },2000)
        
    })
})
fetchData(true)
.then((data)=>{
    console.log("then : ",data)
}).catch((error)=>{
    console.log("error is : ",error)
})
.finally(()=>{
    console.log("it will run finally")
})

