function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }
    for (let k = 1; k <= (n - i) * 2 + 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n - i - 1; j++) {
      str += " ";
    }
    for (let k = 1; k <= i * 2 + 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
