// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

function gcd(a,b){
    if(b===0) return a
    return gcd(b,a%b)
}
function gcdOfStrings(str1="",str2=""){
    if(str1+str2!==str2+str1){
        return ""
    }
    const lengthOfGcd=gcd(str1.length,str2.length)
    return str1.substring(0, lengthOfGcd);
}

console.log("Value1",gcdOfStrings("ABCABC","ABC"))
console.log("Value2",gcdOfStrings("ABABAB","ABAB"))
console.log("Value3",gcdOfStrings("LEET","CODE"))
