var express = require('express');
const fs = require('fs')
var router = express.Router();

/* GET home page. */
router.post('/saas/*', function(req, res, next) {
    let url = req.url
    fs.readFile('./json/db.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err)
            return false
        }
        let jsonData = JSON.parse(data)
        res.json(jsonData[url]);
    })
});

module.exports = router;