const greet = (name,callback)=>{
    console.log("hello " + name)
    callback()
}
const say_hi = ()=>{
    console.log("Goodbye")
}

greet("haider",say_hi)


setTimeout(()=>{
    console.log("loading data after 3 seconds")
},3000)



function fetcData(callback){
    setTimeout(()=>{
        const data = "this is your data"
        callback(data)
    },5000)
}
function processing_data(data){
    console.log("processing data : ",data)
}
fetcData(processing_data)


""