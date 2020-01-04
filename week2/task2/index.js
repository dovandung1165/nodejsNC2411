const fs = require('fs');
const path = require('path');


fs.readFile(path.relative(__dirname, "./products.json"), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let products = Array.from(JSON.parse(data));

    return fs.readFile(path.relative(__dirname, "./productsRealTime.json"), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }
        let productsRealTime = Array.from(JSON.parse(data));

        for (let i = 0; i < products.length - 1; i++) {
            for (let j = 0; i < productsRealTime.length - 1; i++) {
                if (products[i].id == productsRealTime[i].id) {
                    // Thời gian thực
                    let hoursRealTime = Date.parse(productsRealTime[i].dateUpdated) / (1000 * 60 * 60) / 24;

                    // Thời gian mẫu
                    let hours = Date.parse(products[i].dateUpdated) / (1000 * 60 * 60) / 24;
                    // Số ngày cách nhau
                    let day = Math.trunc(hoursRealTime - hours);

                    // console.log(day);
                    let id = productsRealTime[i].id;
                    // console.log(`${id}`);
                    let name = productsRealTime[i].name;
                    // console.log(`${name}`);
                    let price = productsRealTime[i].price;

                    if (day < 32) {
                        let fromNow = day;
                        console.log(`${id} - ${name} - ${price}VND - Cập nhật cách đây: ${fromNow}`);
                    } else
                        if (day < 365) {
                            fromNow = Math.trunc(day / 30);
                            console.log(`${id} - ${name} - ${price}VND - Cập nhật cách đây: ${fromNow} tháng`);
                        } else
                            if (day > 365) {
                                fromNow = Math.trunc(day / 365);
                                console.log(`${id} - ${name} - ${price}VND - Cập nhật cách đây: ${fromNow} năm`);
                            } else console.log(day);
                    //Code này em viết rất chán, em chỉ viết theo suy nghĩ nên không tối tưu để tái sử dụng được =))
                }
            }
        }
    })
});