const puppeteer = require('puppeteer');
const http = require('http');
 
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://e-get.000webhostapp.com/ss.php');
  await page.waitFor(90000);

  await browser.close();
 
 const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Screenshot taking website /n Under Construction')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
})();


