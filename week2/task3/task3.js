const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

fs.readFile(path.relative(__dirname, "./products.json"), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const dataParse = Array.from(JSON.parse(data));

    const newDateUpdated = dataParse.map(e => e.dateUpdated);
    // console.log(newDateUpdated);
    fs.writeFile("dateUpdated.json", JSON.stringify(newDateUpdated), err => {
        if (err) {
            console.error(err);
            return
        }
    })

    const newProducts = dataParse.map(e => {
        return {
            id: e.id,
            name: e.name,
            price: e.price,
            category: e.category
        }
    });

    const worksheet = xlsx.utils.json_to_sheet(newProducts);
    worksheet['!cols'] = [{ width: 20 }, { width: 20 }, { width: 20 }, { width: 20 }];

    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Products');

    const buf = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    fs.writeFile('./products.xlsx', buf, (err) => {
        if (err === null) {
            console.log("Created file roducts.xlsx")
            return 1;
        } else {
            console.log(err)
            return 0;
        }
    })
}) 