const players = [
  { id: 1, username: "saad", score: 150 },
  { id: 2, username: "ghost", score: 300 },
  { id: 3, username: "viper", score: 450 }
];

let topscorrer=players.filter(function(num) {
    return num.score>200
})
console.log(topscorrer)