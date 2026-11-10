
// let item=[{id:1,price:12},{id:2,price:12},{id:3,price:12},{id:4,price:12}]
// let sum=item.reduce((acc,con)=>acc+con.price,0)
// console.log(sum)

// let playerA={id:8,lvl:89,gold:555};
// let playerB={...structuredClone(playerA),long:true}
// console.log(playerB)
// console.log(playerA)

// let counter=0
// let pussy=setInterval(() => {
//     counter++;
//     console.log('ping',counter)
//     if (counter===3) {
//         clearInterval(pussy)
//     }
// }, 500);

const start=Date.now()
let tick=0
let ticker=setInterval(() => {
    tick++;
    console.log('tick',tick,Date.now()-start)
    if (tick===6) {
        clearInterval(ticker)
    }
}, 100);

setTimeout(() => {
    for (let i = 0; i<2e9; i++) {
    }
}, 350);



