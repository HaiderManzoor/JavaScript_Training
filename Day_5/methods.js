// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then(data=> console.log(data))
// .catch(error=>console.error("Errror : ",error))



fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response)=>{
    if(!response.ok){
        throw new Error("http status : ",response.status)
    }
    return response.json()
})
.then(data => console.log(data))
.catch(error=> console.error("error is : ",error))


// practicing post request 



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "hello",
        body: "this is haider",
        userId: 1
    })
})
.then((response) => response.json())
.then((data) => {
    console.log("Response data:", data);
})
.catch((error) => {
    console.error("Error is:", error);
});
