function task1(callback){
    setTimeout(()=>{
        console.log("task 1 completed")
        callback()
    })
}
function task2(callback){
    setTimeout(()=>{
        console.log("task 2 completed")
        callback()
    })
}
function task3(callback){
    setTimeout(()=>{
        console.log("task 3 completed")
        callback()
    })
}

task1(function(){
    task2(function(){
        task3(function(){
            console.log("all task are completed");
            
        })
    })
})