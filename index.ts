function lengthOfLongestSubstring(s: string): number {
  let charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    const diff = right - left + 1;
    maxLength = Math.max(maxLength, diff);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("dvdf"));
