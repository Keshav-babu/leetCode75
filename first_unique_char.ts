// Given a string s, find the first non-repeating character in it
// and return its index. If it does not exist, return -1.


function firstUniqueChar(s:string):number{
    const freq = new Map();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstUniqueChar("leetcode"));     // 0
console.log(firstUniqueChar("loveleetcode")); // 2
console.log(firstUniqueChar("aabb"));         // -1
