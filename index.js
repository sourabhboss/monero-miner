const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cnhv.co/1zxvo');
  await page.waitFor(1660000);

  await browser.close();
})();
 
