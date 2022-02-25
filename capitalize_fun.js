export default function capitalize(s) {
  if (typeof s === "string") {
    if (s !== "") {
      const sArr = s.split("");
      sArr[0] = sArr[0].toUpperCase();
      return sArr.join("");
    }
  }
  return "";
}
