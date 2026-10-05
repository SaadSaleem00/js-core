const players = [
  { id: 1, username: "saad", score: 150 },
  { id: 2, username: "ghost", score: 300 },
  { id: 3, username: "viper", score: 450 }
];

let modify=players.map((num)=>{
    if(num.score>200){
        return{...num,isVIP:true}
    }else{
        return {...num,isVIP:false}
    }
})
console.log(modify)
console.log(players)