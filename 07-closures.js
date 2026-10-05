function playervault() {
  let gold = 40;
  return {
    addgold: function name(addgold) {
      return (gold = gold + addgold);
    },
    spendgold: function (spendgold) {
      if (spendgold <= gold) {
        return (gold = gold - spendgold);
      } else {
        return "not enough poor";
      }
    },
  };
}

const result = playervault();
console.log(result.addgold(50));
console.log(result.spendgold(67));
