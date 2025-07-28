function myfunc(...args){
    console.log(args)
}
myfunc(1,2,3,4,5)


function sum(...args){
    return args.reduce((total,num)=>total+num,0)
}

console.log(sum(1,2,3,4,5,6))