function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += n - j + 1;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
