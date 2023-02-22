function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - i; j++) {
      if (j < i) {
        str += " ";
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
