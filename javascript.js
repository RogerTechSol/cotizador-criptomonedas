const coin = document.querySelector('#coin');
const crypto = document.querySelector('#crypto'); 
const form = document.querySelector('#coin-form');
const amount = document.querySelector('#amount');
const coinIfo = document.querySelector('#coifn-inf'); 

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cryptoSelected = crypto.value.toUpperCase();
    const coinSelected = coin.value.toUpperCase();
    const amountValue = amount.value;

    console.log(coinSelected, cryptoSelected, amountValue);
   // 1. usamos la api para sacar el precio de las cypto monedas 
    try {
        coinIfo.innerHTML = `<div class="loader"></div>`;

        const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`);
        const response = await res.json();

                 
            const data = response.DISPLAY[cryptoSelected][coinSelected];
            const price = data.PRICE;
            const priceHigh = data.HIGH24HOUR;
            const priceLow = data.LOW24HOUR;
            const variation = data.CHANGEPCT24HOUR;

         if(amountValue != "") {

            const result = Number(amountValue) / response.RAW[cryptoSelected][coinSelected].PRICE;

            coinIfo.innerHTML = `
             <p class="info">El precio es: <span class="price">~${price}</span></p>
             <p class="info">El precio más alto es: <span class="price">${priceHigh}</span></p>
             <p class="info">El precio más bajo es: <span class="price">${priceLow}</span></p>
             <p class="info">Variación 24h es: <span class="price">${variation}%</span></p>
            <p class="info">Cuanto puedes comprar : <span class="price">${result.toFixed(4)}${[cryptoSelected]}</span></p>
             `;
         }else {

         coinIfo.innerHTML = `
             <p class="info">El precio es: <span class="price">~${price}</span></p>
             <p class="info">El precio más alto es: <span class="price">${priceHigh}</span></p>
             <p class="info">El precio más bajo es: <span class="price">${priceLow}</span></p>
             <p class="info">Variación 24h es: <span class="price">${variation}%</span></p>
            
             `;
             
            }       
          

    
            
        } catch (error) {
            console.error("Error en la ejecución:", error);
    
}});