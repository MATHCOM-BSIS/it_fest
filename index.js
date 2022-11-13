const express=require('express');
const app=express();
const port=3000;

var price;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/view', (req, res)=>{
    res.sendFile(__dirname + '/public/price_viewer.html');
});

app.get('/price', (req, res)=> {
    res.send(`${price}`);
});

app.post('/buy', (req, res)=>{
    price=Math.floor(price*(100+Math.random()/2*req.body.num)/100);
    console.log(`Buy : ${req.body.num} -> Price : ${price}`);
    res.redirect('/');
});

app.post('/sell', (req, res)=>{
    price=Math.floor(price*(100-Math.random()/2*req.body.num)/100);
    console.log(`Sell : ${req.body.num} -> Price : ${price}`);
    res.redirect('/');
});

app.listen(port, () => {
    price=25000;
    console.log(`Server running on port ${port}`);
});