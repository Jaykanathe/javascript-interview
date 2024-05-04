const duplicateArr = (arr)=>{

    let dparr = [...new Set(arr)]
    
    return dparr 
}


console.log(duplicateArr([1,2,2,3,4,1,5,2]));


const countvowels = (str)=>{
    let vowels = ['a','e','i','o','u'];

    let string = str.toLowerCase().split("")
    let count = 0;
    for(let char of string){
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log(countvowels("jaykanatheonedayyouwillbaccomethebestcoder"));

const poweroftow = (num) => {
    let op = false;

    for(let i= 1;i<num;i++){
        if(2**i=== num){
            op = true
        }
    }
    return op;
}

console.log(poweroftow(8));




