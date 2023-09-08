const path = require('path') 
const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
   
    res.sendFile(path.join(_dirname,'../','views','contactus.html'));
});

module.exports = router;