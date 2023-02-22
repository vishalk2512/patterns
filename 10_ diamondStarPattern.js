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
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n * 2 - (i + 1); j++) {
      if (j <= i) {
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
