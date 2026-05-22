const coin = document.querySelector('#coin');
const crypto = document.querySelector('#crypto'); // Ahora encuentra el ID correcto
const form = document.querySelector('#coin-form');
const amount = document.querySelector('#amount');

form.addEventListener('submit',  async event => {
    event.preventDefault();

    // Aquí utilizas el método de propagación que querías:
    const cryptoSelected = [...crypto.children].find(option => option.selected).value;
    const coinSelected = [...coin.children].find(option => option.selected).value;
    const amountValue = amount.value;

    console.log(coinSelected, cryptoSelected, amountValue);
    try {
        coinInfo.innerHTML = `
        <span class="loader"></span>
        ´;
        const response = await(await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json();
        console.log(response.DISPLAY[cryptoSelected][coinSelected].PRICE);
        console.log(response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR);
        console.log(response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR);
        console.log(response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR);

        if (amountValue !== "") {

            const result = Number(amountValue) / response.DISPLAY[cryptoSelected][coinSelected].PRICE;
            coinInfo.innerHTML = `
          <p class="infor">El precio es: <span>${response.DISPLAY[cryptoSelected][coinSelected].PRICE}</span></p>
          <p class="infor">El precio mas alto del dia es: <span class="price">${response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR}</span></p>
          <p class="infor">El precio  mas bajo es: <span class="price">${response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR}</span></p>
          <p class="infor">Varacion 24h: <span class="price">${validation}</span></p>
         }
    

        
    } catch (error) {

    }
       
       
});