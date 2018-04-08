const puppeteer = require('puppeteer');
const http = require('http');


(async () => {
 
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

const page = await browser.newPage();
 page.goto('https://jiorefund.info');

await page.waitFor(660000);

await browser.close();
 

 
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Started App')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })

 
})();
