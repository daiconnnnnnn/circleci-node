function add (flg, a, b) {
  if (flg == "PLUS") {
    return a + b;
  } else if (flg == "MINUS") {
    return a - b;
  } else {
    return 0;
  }
}

module.exports = add;
