let coinsData = $('#coinData');
let nomicsData = $('#nomicsData');

   

fetch('https://api.coinpaprika.com/v1/coins')
.then( response => response.json() )
.then( coins => {
    for (let i = 0; i < 100; i++ ) {
        const coin = coins[i];
          
        coinsData.append(
            `<tr>
                <td>  ${coin.rank}  </td>
                <td>  ${coin.name}  </td>
                <td>  ${coin.symbol} </td>
            </tr>`)  
    }
});

fetch(process.env.PUBLIC_URL +  "https://api.nomics.com/v1/currencies/ticker?key=badc8cea9218d36fd1a3cc2461ce52e13ade6686&ids&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
.then(response => response.json())
.then(data => {
    for(let i = 0; i < 100; i++ ) {
        const Data = data[i];
        
    nomicsData.append(
        `<tr>
            <td>  ${Data.rank}    </td>
            <td>  ${Data.name}   </td>
            <td>  ${Data.symbol} </td>
            <td> $ ${parseFloat(Data.price).toFixed(2)}    </td>
            <td> ${parseFloat(Data['1d'].price_change_pct).toFixed(2)}%    </td>
            <td> $ ${parseFloat(Data.circulating_supply).toFixed(2)}</td>
            <td> $ ${parseFloat(Data.max_supply).toFixed(2)}</td>
            <td> $ ${parseFloat(Data.market_cap).toFixed(2)}</td>
            <td><img src='${Data.logo_url}' alt='' style="width: 5vh"> </td>
        </tr>`) 
       }
  });



fetch(process.env.PUBLIC_URL + "https://api.nomics.com/v1/market-cap/history?key=badc8cea9218d36fd1a3cc2461ce52e13ade6686&ids&start=2021-09-01T00%3A00%3A00Z")
.then(response => response.json())
.then(data => {
       let Eata = data.length - (data.length - 1);
    
        totalCap.append(
         `
           $ ${parseFloat(data[Eata].market_cap).toFixed(2)}
         `)
       
});




    
    
 