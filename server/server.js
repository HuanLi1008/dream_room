
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const dataPath = './data/category.json';
const categories = ['wall', 'floor', 'bed', 'window', 'rug', 'more'];
const theme = ['blue', 'pink'];
const setdata = () =>{
    const data = [];
    let count = 1;
    for (const cate of categories) {
        for (const color of theme) {
            const name = cate + '_' + color;
            const image = {
                name: name, 
                image: `http://localhost:8080/images/${cate}/${name}.png`, 
                id: count++,
                category: cate,
            };
            data.push(image);
        }
    }
    fs.writeFileSync(dataPath, JSON.stringify(data));
}
// call setdata only when we have one more theme images
// setdata();
const getdata = ()=>{
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

app.get('/:category', (req, res)=>{
    const category = req.params.category;
    const data = getdata();
    const targtedata = data.filter((item) => item.category === category);
    return res.json(targtedata);
})

app.listen(8080, ()=>{
    console.log("App is listening on port 8080");
})