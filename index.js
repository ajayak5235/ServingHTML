
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Require the body-parser middleware
const app = express();

const staticPath = path.join(__dirname, "APP");
app.use(express.static(staticPath));

// Parse incoming request bodies as JSON
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Project");
});
app.get('/contactus' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'APP','contactus.html'))
})
app.post('/submitcontact',(req, res)=>{
   res.send('<h1>Submitted Successfully<h1>')
})


app.get('/add-product',(req, res)=>{
        res.sendFile(path.join(__dirname, 'APP', 'add-product.html'));
        
     });


app.post('/add-product', (req, res) => {

  res.redirect('/shop.html'); 
});

app.listen(8000, () => {
  console.log("server running");
});
