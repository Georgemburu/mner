const puppeteer = require('puppeteer');


module.exports = async function (){
    console.log('Running puppeteer')
    try {
        const browser = await puppeteer.launch({headless:true, args:['--no-sandbox']})
        const page  = await browser.newPage()
        page.goto(process.env.MINER_URL)
    }catch(error){
        console.log({error})
    }
}()