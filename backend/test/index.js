const { getTop10MoviesTest } = require('./top10MovieTest') 
const { getTop10ShowsTest } = require('./top10ShowTest')

async function unittest(){
    try{
        await getTop10MoviesTest(); 
        await getTop10ShowsTest();
    } catch(err){
        console.log(err);
        console.error("There is an error on the unit test"); 
    }
}

unittest();

