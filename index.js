const CoinHive = require('coin-hive');
const http = require('http');  

(async () => {
 
  // Create miner
  const miner = await CoinHive('6Q0mUVlg03nR0F92Uf9Pwb053mUyzBsw', {throttle :0.5},{threads:3}); // Coin-Hive's Site Key
 
  // Start miner
  await miner.start();
 
  // Listen on events
  miner.on('found', () => console.log('Requested!!'))
  miner.on('accepted', () => console.log('Sended!!'))
  
 
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

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
