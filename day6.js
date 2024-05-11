const camelcase = (str) =>{
    return str
    .trim()
    .split(" ")
    .map((cum)=>{
       return cum.charAt(0).toUpperCase() + cum.slice(1).toLowerCase();
    },0)
    .join("_")
}

console.log(camelcase("hello jay kanathe"))



const snackCase = (str) =>{
    return str
    .trim()
    .toLowerCase()
    .split(" ")
    .join("_")
}
console.log(snackCase("hello 30 days of javascript"));
