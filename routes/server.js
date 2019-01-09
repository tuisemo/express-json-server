var express = require('express');
const fs = require('fs')
var router = express.Router();
var jsonData = {}
fs.readFile('./json/db.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
        return false
    }
    // console.log(data)
    jsonData = JSON.parse(data)
})
/* GET home page. */
router.post('/saas/*', function(req, res, next) {
    let url = req.url
    res.json(jsonData[url]);
});

module.exports= router;