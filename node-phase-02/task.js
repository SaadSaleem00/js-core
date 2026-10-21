const fs = require("fs/promises");
const path = require("path");
const { constrainedMemory } = require("process");

async function addPlayer(name, scores) {
    const file = path.join(__dirname, "loro.json");
    let mall;
    let ids;
  try {
    const data = await fs.readFile(file, "utf-8");
    const convert = JSON.parse(data);
    ids= convert.length;
    ids++;
    convert.push({ id: ids, name: name, score: scores });
    const revert = JSON.stringify(convert, null, 2);
    await fs.writeFile(file, revert);
  } catch (error) {
    if (error.code == "ENOENT") {
      mall=[]
    } else {
      throw error;
    }
  }
  mall.push('loro,546')
  await fs.writeFile(file,JSON.stringify(mall,null,2))
}
addPlayer("notgonnalie", 400);











// async function grocerrycheck(grocerry) {
//     const file= await path.join(__dirname,'list.json')
//     let list;
//     try {
//         const read= await fs.readFile(file,'utf-8')
//         const intoarray=JSON.parse(read)
//     } catch (error) {
//         if (error.code==='ENOENT') {
//             list=[]
//         }else{throw error}
//     }
//     list.push(grocerry)
// await fs.writeFile(file,JSON.stringify(list,null,2))
// }
// grocerrycheck('milk')