export function stringLength(s) {
  if (s !== "") {
    const sLength = s.split("").length;
    if (sLength <= 10) {
      return sLength;
    }
  }

  return -1;
}

export function reverseString(s) {
  const reversedStr = s.split("").reverse().join("");
  return reversedStr;
}
