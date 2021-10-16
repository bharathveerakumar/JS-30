const arr=[
    { name:"bharath", age:15 },
    { name:"vinoth", age:10 },
    { name:"kumar", age:50 },
    { name:"raj", age:19 },
    { name:"ramesh", age:45 },
    { name:"pranav", age:20 },
]

const arr1=[
    { cName:"india", population:13300000 },
    { cName:"australia", population:200050 },
    { cName:"sri lanka", population:3456120 },
    { cName:"england", population:8967234 },
    { cName:"japan", population:7812906 },
    { cName:"china", population:89125343 },
]

//array.prototype.some()
//To find the anyone of them is greater than 19
const some=arr.some((data)=>(data.age>=19))
console.log(some)

//array.prototype.every()
//To find if all the person are >= 19
const all=arr.every((data)=>(data.age>=19))
console.log(all)

//array.prototype.find()
//To find the first individuals
const indi=arr1.find((data)=>(data.population<=200050))
console.table(indi)

//arrat.prototype.findIndex()
const index=arr1.findIndex(data=>(data.population==89125343))
arr1.splice(index);
console.table(arr1);