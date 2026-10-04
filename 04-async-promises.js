async function fetchplayerstats(playerID){
    if(playerID===1){
        let data={id:1,name:'googler'};
        let testing=45
        let testing2=[1,5,8,{id:15,lvl:85}]
        let testing3={home:false,dick:true}
        return {data,testing,testing2,testing3}
    }else{
        throw new Error("no data found");
        
    }
}
async function main() {
    try {
        let data= await fetchplayerstats(1)
        console.log('plater stats',data.data)
        console.log(data.testing,data.testing2,data.testing3)
    } catch (error) {
        console.log('fuck it')
    }
}
main()