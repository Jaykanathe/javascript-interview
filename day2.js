let word = "hello jayyyayaya kanathei am good";

let longestword = (word) =>{
    if (word.trim().length === 0) {
        return false;
    }

    word = word.split(" ");
    // word = word.sort((a,b)=> b.length-a.length)
    // return word[0]

    return word.reduce(
        (accu,curr)=>curr.length>accu.length?curr:accu
    );
}

console.log(longestword(word));


let str = "hi my name is jay kanathe"

let hashgenerator = (str)=>{
    if (str.trim().length === 0) {
        return false;
    }

    str = str.split(" ");
    str = str.map((CurrEle)=>CurrEle.replace(CurrEle[0],CurrEle[0].toUpperCase(),))
    str = `#${str.join("")}`

    return str
}

console.log(hashgenerator(str))


let countchar = (word,char)=>{
   word = word.toLowerCase()
   char = char.toLowerCase()

    word = word.split("")
    totalcount = word.reduce((accu,curr) =>{
        if (curr === char) {
            accu++;
        }
        return accu;
    },0)


return `${char}  ${totalcount}`
}

console.log(countchar("javascript","a"));