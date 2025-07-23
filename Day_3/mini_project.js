function Library(){
    let books = []
    return{
        add: function(title,author){
            books.push({title,author})
            console.log("Adding book to the library :)")
        },
        remove : function(title){
            books = books.filter(book => book.title!== title)
            console.log("book removed successfully.")
        },
        list : function(){
            if(books.length==0){
                console.log("no book in the library")
                return
            }
            console.log("books in our library are : .....")
            books.forEach((items,i)=>{
                console.log(`${i + 1}. book name is ${items.title} and author is ${items.author}.`)
            });
        }
    }
}

const myLibrary = Library();

myLibrary.add("The Alchemist", "Paulo Coelho");
myLibrary.add("Atomic Habits", "James Clear");
myLibrary.add("Rich Dad, Poor Son","James Kathery")

myLibrary.list();

myLibrary.remove("The Alchemist");

myLibrary.list();