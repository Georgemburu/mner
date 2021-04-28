const path = require('path');
const fs = require('fs');

module.exports = function (req,res){
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    fs.createReadStream(path.join(__dirname,'miner.html')).pipe(res)
}