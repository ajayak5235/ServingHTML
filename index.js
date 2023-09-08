
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found </h1>')
})


app.listen(3000);



