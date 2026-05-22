const form = document.querySelector('#coin-form');
const coin = document.querySelector('#coin');
const cryto = document.querySelector('#cryto');
const amount = document.querySelector('#amount');

form.addEventListener('submit', Event => {
    Event.preventDefault();
    const crytoSelected = [...cryto.children].find(option => option.selected).value;
    const coinSelected = [...coin.children].find(option => option.selected).value;
    const amountValue = amount.value;
    console.log(coinSelected, crytoSelected, amountValue);
});