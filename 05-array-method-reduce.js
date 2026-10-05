const players = [
  { id: 1, username: "saad", score: 150 },
  { id: 2, username: "ghost", score: 300 },
  { id: 3, username: "viper", score: 450 }
];

const total=players.filter(num=>num.score>200)
.map(num=>num.score)
.reduce((acc,standing)=>acc+standing,0);
console.log(total)