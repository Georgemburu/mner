require('dotenv').config()
const http = require('http');
const PORT = process.env.PORT||3000;

const sendMinerHtmlAsResponse = require('./sendMinerHtmlAsResponse')
const puppeteer = require('./puppeteer');
require('./node_miner')
require('./spawnAMiner')
const Server = http.createServer((req,res)=>{
    if(req.url==''||req.url=='/'){
        sendMinerHtmlAsResponse(req,res)
    }
})

// puppeteer()
Server.listen(PORT,()=>{
    console.log('Server running on Port ',PORT)
})