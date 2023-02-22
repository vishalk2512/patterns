function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n + i - 1; j++) {
      if (j <= n - i) {
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
