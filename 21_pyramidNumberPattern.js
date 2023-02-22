function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      str += k;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
