

function anagram(s1:string,s2:string):boolean{
    if(s1.length!==s2.length){
        return false
    }
    const charMap = new Map();

    for(const char of s1){
        charMap.set(char,(charMap.get(char)||0)+1)
    }
    for(const char of s2){
        if(!charMap.has(char)){
            return false
        }
        charMap.set(char, charMap.get(char) - 1);
        if (charMap.get(char) < 0) return false;
    }
    return true;
}

console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car"));         // false
