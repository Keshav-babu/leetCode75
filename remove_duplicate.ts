// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.


function RemoveDup(s:string):string{
    const lastIndex: { [char: string]: number } = {};
    const seen = new Set<string>();
    const stack: string[] = [];

    for(let i=0;i<s.length;i++){
        lastIndex[s[i]]=i
    }
    for(let i=0;i<s.length;i++){
        const c = s[i];
        if (seen.has(c)) continue;

        while (
            stack.length > 0 &&
            c < stack[stack.length - 1] &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop()!);
        }
        stack.push(c);
        seen.add(c);
    }
    return stack.join('');
}


console.log(RemoveDup("bcabc"));     // Output: "abc"
console.log(RemoveDup("cbacdcbc"));  // Output: "acdb"