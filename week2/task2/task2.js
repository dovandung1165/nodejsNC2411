const fs = require('fs');
const path = require('path');

fs.readFile(path.relative(__dirname, "./products.json"), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let products = JSON.parse(data);

    const date = new Date();

    let dateRealTime = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds(), date.getTimezoneOffset()));
    //Ghi file thay thế, bằng thời gian thực.
    Array.from(products).forEach(ele => {
        ele.dateUpdated = dateRealTime.toString();
        const productsR = JSON.stringify(products);
        return fs.writeFile("productsRealTime.json", productsR, err => {
            if (err) {
                console.error(err);
                return
            }
        })
    });
});
