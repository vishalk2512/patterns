function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += j;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
