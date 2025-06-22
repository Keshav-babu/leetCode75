

const isValidString: (char: string) => boolean = (char: string) => /^[a-zA-Z]$/.test(char);

function Palindrome(s: string): boolean {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        if (!isValidString(s[left])) {
            left++;
            continue;
        }
        if (!isValidString(s[right])) {
            right--;
            continue;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const isValid: boolean = Palindrome("kjb kjghhj ");
console.log(":->",Palindrome("A man, a plan, a canal: Panama"))
console.log(":->",Palindrome("race a car 123343435"))
console.log(":->",Palindrome(" 278364387&*&*"))

console.log("isValid", { isValid });


// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// Palindrome  2
