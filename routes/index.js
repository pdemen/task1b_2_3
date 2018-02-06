const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  let jsonbuf = [];
  
  if (req.query.dirpath) {
    fs.readdir(req.query.dirpath, function (err, files) {
      if (err) {
        throw new Error(err);
      }
      
      files.forEach((name) => {
        let filePath = path.join(req.query.dirpath, name);
        let stat = fs.statSync(filePath);
        if (stat.isFile()) {
          jsonbuf.push({
            name: filePath,
            size: (stat.size / 1024).toFixed(2) + 'Kb'
          });
        }
      });
      console.log(jsonbuf);
      
      // Задание 1б
      // res.send(JSON.stringify(jsonbuf));
      
      // Задание 2
      res.render("filelist", {
        title: "File list view",
        response: jsonbuf
      })
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});


module.exports = router;
