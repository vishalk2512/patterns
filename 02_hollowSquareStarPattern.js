function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n) {
        str += "*";
      } else {
        if (j === 1 || j === n) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));
