var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
 const puppeteer = require('puppeteer');
  (async() => {

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://google.com', {waitUntil: 'networkidle'});
    // Type our query into the search bar
    await page.type('test');

    await page.click('input[type="submit"]');

    // Wait for the results to show up
    await page.waitForSelector('h3 a');

    // Extract the results from the page
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('h3 a'));
      return anchors.map(anchor => anchor.textContent);
    });
    browser.close();
    res.send(links.join('\n'));
  })();
})
 res.send("Heroku Demo!");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);


