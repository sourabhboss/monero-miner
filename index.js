const puppeteer = require('puppeteer');


(async () => {
console.log("Started Running...");
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

const page = await browser.newPage();
await page.goto('http://e-get.000webhostapp.com/z.php');

await page.waitFor(660000);

await browser.close();
 

 
  
  }

 

 
})();
