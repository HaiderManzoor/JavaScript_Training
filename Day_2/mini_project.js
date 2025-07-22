shopping_list = []

function add_item(name,category){
    shopping_list.push({name,category})
    console.log(`Added ${name} to ${category}`)
}

function Show_list(){
    if (shopping_list.length==0){
        console.log("shopping list is empty")
        }else{
            console.log("showing shopping list")
                shopping_list.forEach(items => {
                    console.log(`${items.name} , ${items.category}`)
                    
                });
            }
        }
function filter_item(category){
    const filtered = shopping_list.filter(items=> items.category == category)
    if(filtered.length ==0){
        console.log("cart is empty")
    }else{
        filtered.forEach(items=>{
            console.log(`filtred items according to category is : ${items.name}`)
        })
    }
}

function Remove_item(name){
    const index = shopping_list.findIndex(items=> items.name == name)
    if(index!= -1){
        shopping_list.splice(index,1)
        console.log(`${name} removed from shopping list `)
    }else{
        console.log("item does not found")
    }
}

add_item("Milk","Groceries")
add_item("bread","Groceries")
add_item("egg","Groceries")
add_item("Dryer","Electronics")
Show_list()
filter_item("Groceries")
Remove_item("Dryer")
console.log(shopping_list)

