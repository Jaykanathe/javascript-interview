
const test = (array) =>{
 
    let result = array.sort((a,b)=>{
    if(a<b) return-1
});
    
        return  result
        
        // another method
        // Math.min(...array)
  
}

console.log(test([1,2,5,3,-7,-2,8,65]));