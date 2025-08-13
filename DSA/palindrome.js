// Check if a String is a Palindrome

// const isValidChar = (char) => /^[a-zA-Z0-9]$/.test(char); with number also

const isValidChar = (char) => /^[a-zA-Z]$/.test(char);

// Two-pointer loop
function isValidPalindrome(s = "") {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
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

// Replaced continue with if-else blocks so each condition is clear.

// The flow is linear, and you only advance pointers when conditions are met.

// This avoids jumps (continue) and improves readability.


console.log(":->", isValidPalindrome(" 278364387&*&*"));

// Recursive (with index)

function isValidPalindromeRecursion(s = "") {
  function check(start, end) {
    if (start >= end) return true;

    if (!isValidChar(s[start])) return check(start + 1, end);
    if (!isValidChar(s[end])) return check(start, end - 1);
    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    return check(start + 1, end - 1);
  }
  return check(0, s.length - 1);
}


// JavaScript engines have a limited call stack size.

// Deep recursion (e.g., very long strings) may cause "Maximum call stack size exceeded" errors.


function isValidPalindromewithwnstack(s = "") {
  const stack = [];
  stack.push({ start: 0, end: s.length - 1 });

  while (stack.length > 0) {
    const { start, end } = stack.pop();

    if (start >= end) continue;

    if (!isValidChar(s[start])) {
      stack.push({ start: start + 1, end });
      continue;
    }
    if (!isValidChar(s[end])) {
      stack.push({ start, end: end - 1 });
      continue;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    stack.push({ start: start + 1, end: end - 1 });
  }

  return true;
}


