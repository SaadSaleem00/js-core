// // // // let playerA=100
// // // // let playerB=playerA
// // // // // playerB=50
// // // // console.log(playerB);

// // // let playerA1={hp:10,ammo:60}
// // // // let playerB1={hp:50,ammo:20}

// // // let playerB1=playerA1
// // // playerB1.hp=89
// // // playerB1.ammo=0
// // // console.log(playerB1.hp,playerB1.ammo,playerA1)

// // // how to use spread operator
// // let playerA ={ammo:50,stat:{hp:10}}
// // let playerB={...playerA,lvl:5}
// // playerB.stat.hp=4
// // // console.log(playerA.stat.hp,playerB.lvl)
// // // console.log(playerB)

// // const deepconstplayer=structuredClone(playerA)
// // deepconstplayer.stat.hp=89
// // deepconstplayer.ammo=0
// // console.log(deepconstplayer)
// // console.log(playerA)

// // let filter=memoryAddresses.filter(entry=>entry.address==='0x003')
// // console.log(filter)

// // for(let i in memoryAddresses){
//     //     if(memoryAddresses[i].value===12){
//         //         console.log(memoryAddresses[i])
//         //     }
//         // }
//         const memoryAddresses = [
//           { address: "0x001", value: 100 },
//           { address: "0x002", value: 45 },
//           { address: "0x003", value: 100 },
//           { address: "0x004", value: 12 }
//         ];

// for(let i=0;i<=memoryAddresses.length-1;i++){
//     if(memoryAddresses[i].value===12){
//         memoryAddresses[i].value=9999
//         console.log(memoryAddresses[i].value)
//     }
// }
const memoryAddresses = [
  { address: "0x001", value: 100 },
  { address: "0x002", value: 50 },
  { address: "0x003", value: 100 },
  { address: "0x004", value: 25 },
];
frozenmemory = [];

for (let i = 0; i < memoryAddresses.length; i++) {
  if (memoryAddresses[i].value === 100) {
    frozenmemory.push({ ...memoryAddresses[i], value: 9999, frozen: true });
  } else {
    frozenmemory.push({ ...memoryAddresses[i] }); // Keeps 50 and 25 in the new array
  }
}
console.log(frozenmemory);
