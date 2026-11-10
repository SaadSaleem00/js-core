// Primitive values vs Reference types
let playerA = 100;
let playerB = playerA;
console.log("Primitive Copy:", playerB);

let playerA1 = { hp: 10, ammo: 60 };
let playerB1 = playerA1;
playerB1.hp = 89;
playerB1.ammo = 0;
console.log("Mutated Reference:", playerA1);

// Shallow copy using Spread Operator vs Deep Copy using structuredClone
let playerAObj = { ammo: 50, stat: { hp: 10 } };
let playerBObj = { ...playerAObj, lvl: 5 };
playerBObj.stat.hp = 4; // Shallow copy mutates nested properties

const deepPlayer = structuredClone(playerAObj);
deepPlayer.stat.hp = 89;
deepPlayer.ammo = 0;

console.log("Deep Copy:", deepPlayer);
console.log("Original Object:", playerAObj);