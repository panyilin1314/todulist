const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request', function (req, res) {
    // 获取地址
    const url = req.url;
    // console.log(url);
    // 请求地址url映射到具体文件路劲 
    const fpath = path.join(__dirname, url);
    console.log(fpath);
    // 读取文件内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // console.log(dataStr);
        if (err) return res.end('404 not found!');
        res.end(dataStr);
    })
});
server.listen('8099', function () {
    console.log('server running at http://127.0.0.1:8099');;

})