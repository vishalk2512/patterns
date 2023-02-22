function pattern(n) {
  let str = "";
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      count++;
      str += count + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(4));
