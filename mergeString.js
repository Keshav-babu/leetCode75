// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the end
// of the merged string.

// Return the merged string.

 

// Example

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r


var mergeAlternately = function(word1, word2) {
    let res = ''
    let i = 0
    let j = 0
    while(i < word1.length || j < word2.length){
        if(i < word1.length){
            res += word1[i]
            i++
        }
        if(j < word2.length){
            res += word2[j]
            j++
        }
    }
    return res
}

function mergeAlternateWords(word1, word2) {
    let res = ''
    let isWord2MaxLength = word1.length < word2.length

    if(word1.length==0||word2.length==0){
        return word1+word2
    }

    if(isWord2MaxLength){
        for(let i=0;i<word2.length;i++){
            if(i<word1.length){
                res+=word1[i]
                res+=word2[i]
            }
            else{
                res+=word2[i]
            }
        }

    }else{
        for(let i=0;i<word1.length;i++){
            if(i<word2.length){
                res+=word1[i]
                res+=word2[i]
            }
            else{
                res+=word1[i]
            }
        }

    }
return res;
}

function mergeAlternateSecondSoln(word1, word2) {
    let res = '';
    const maxLengthOFWords = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLengthOFWords; i++) {
        if (i < word1.length) {
            res += word1[i];
        }
        if (i < word2.length) {
            res += word2[i];
        }
    }
    
    return res;
}


let result = mergeAlternateWords('ab', 'pqrs')

console.log(result)