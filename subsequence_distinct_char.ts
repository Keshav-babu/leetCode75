


function SubsequenceDistinct(s:string):string{
    const set=new Set<string>();
    let res:string=""
    for(let i=0;i<s.length;i++){
        const c:string=s[i]
        if(!set.has(c)){
            res+=c
            set.add(c)
        }
    }
    return res
}


console.log(SubsequenceDistinct("bcabc"));     // Output: "bca"
console.log(SubsequenceDistinct("cbacdcbc"));  // Output: "cbad"
