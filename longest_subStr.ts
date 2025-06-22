function longestSubStr(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const map = new Map();
  let left = 0,
    maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, i);
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}


console.log(longestSubStr("pwwkew"))



function longestSubStrwithstr(s: string): string {
    if (s.length === 0) {
      return "";
    }
    const map = new Map<string, number>();
    let left = 0;
    let maxLen = 0;
    let start = 0; // To track start index of longest substring
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (map.has(char) && map.get(char)! >= left) {
        left = map.get(char)! + 1;
      }
  
      map.set(char, i);
  
      if (i - left + 1 > maxLen) {
        maxLen = i - left + 1;
        start = left;
      }
    }
  
    return s.substring(start, start + maxLen);
  }
  
  console.log(longestSubStrwithstr("pwwkew"))

  