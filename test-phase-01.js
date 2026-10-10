// function createinventoryvault(stocknumber){
//     let stock=stocknumber
//         return {addstock(plusstock) {
//             return stock=stock+plusstock
//         },removestock(minusstock) {
//             if(minusstock<=stock){
//                 return stock=stock-minusstock
//             }else{
//                 return ('not enough stock')
//             }
//         },getstock() {
//             return stock
//         }}
//     }
// let check=createinventoryvault(10)
// console.log('total after adding',check.addstock(20))
// console.log('total after subtract',check.removestock(10))
// console.log('final',check.getstock())

// // another
// const orders = [
//   { id: 101, category: "electronics", price: 300, delivered: true },
//   { id: 102, category: "clothing", price: 50, delivered: true },
//   { id: 103, category: "electronics", price: 150, delivered: false },
//   { id: 104, category: "electronics", price: 500, delivered: true },
//   { id: 105, category: "clothing", price: 120, delivered: true },
// ];

// let test = orders
//   .filter(num => num.category === "electronics" && num.delivered)
//   .map(user => ({...user,price:user.price*0.9}))
//   .reduce((acc, current) => acc +current.price ,0);
// console.log(test);

// //another

// async function userposts(userID) {
//   try {
//     let response= await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data= await response.json()
//     let cleardata=data.filter(post=>post.userId===userID).map(post=>({id: post.id, title: post.title}))
//     console.log(cleardata)
//   } catch (error) {
//     return ('error')
//   }
// }
// userposts(1)
let text='';
for (let i = 5; i>=0; i--) {
  text=text+'*';
  console.log(text);
}