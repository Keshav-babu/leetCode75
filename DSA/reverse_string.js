// Reverse a String

function reverseString(s=""){
    let output=""
    for(let i=0;i<s.length;i++){
        output=s[i]+output
    }

    return output
}

console.log("llll",reverseString(" hel. lo"))

// Using Recursion

function reverseStringRecursion(s=""){
    if(s==""){
        return ""
    }
    return  reverseStringRecursion(s.slice(1))+s[0]

}

console.log(reverseStringRecursion(". -> chat.   "));