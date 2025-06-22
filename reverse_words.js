// Reverse Words in a String
// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
// while(i<s.length && s[i] !== ' '){
//     tempString += s[i]
//     i++
// }
// res = tempString + ' ' + res

var reverseWords = function (s) {
  let res = "";
  let tempWord = "";
  s = s.trim() + " ";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      tempWord += s[i];
    } else if (tempWord.length > 0) {
      res = tempWord + (res.length ? " " + res : "");
      tempWord = "";
    }
  }

  return res;
};

const revereWordsinString = (s) => {
  let reversedWords = [];
  let wordStart = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && wordStart === -1) {
      wordStart = i;
    } else if ((s[i] === " " || i === s.length - 1) && wordStart !== -1) {
      let word = "";
      if (i === s.length - 1 && s[i] !== " ") {
        word = s.substring(wordStart, i + 1);
      } else {
        word = s.substring(wordStart, i);
      }
      reversedWords.unshift(word);
      wordStart = -1;
    }
  }
  let reversedString = "";
  for (let i = 0; i < reversedWords.length; i++) {
    reversedString += reversedWords[i];
    if (i !== reversedWords.length - 1) {
      reversedString += " ";
    }
  }

  return reversedString;
};

let result = revereWordsinString("the sky is blue");

console.log({ result });
