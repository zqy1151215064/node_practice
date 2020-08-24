const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        // 暗号：二分查找
        readStream.on("open", (data) => {
            console.log('打开了', data)
        })
        readStream.on("data", chunk => {
            console.log("读取文件数据：", chunk.toString());
            var data = chunk.toString()
            data = JSON.parse(data);
            reqData.push(data);
            size += data.length;
            console.log(reqData)
            resolve(data)
        });
        readStream.on("end", () => {
            console.log('文件读取完成');
        });
        readStream.on("close", () => {
            console.log("文件已关闭！");
        });
    })
}
