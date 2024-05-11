

const check = (str,char)=>{
    str =  str.toLowerCase().split(" ")
    
    return  (str[0] === char.toLowerCase())? true:false

}

console.log(check("Hello world","hello"));