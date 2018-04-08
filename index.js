var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
 const puppeteer = require('puppeteer');
  (async() => {
   res.send("Heroku Demo! async working! ");
   console.log("starting");
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://cnhv.co/22q8v', {waitUntil: 'networkidle'});
    // Type our query into the search bar
    

    // Wait for the results to show up
    await page.waitFor(216000);

    // Extract the results from the page
    
    res.send('working\n');
  
})
 res.send("Heroku Demo!");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);


