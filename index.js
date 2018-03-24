const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://cnhv.co/1zxvo');
  await page.waitFor(1660000);

  await browser.close();
})();
 
