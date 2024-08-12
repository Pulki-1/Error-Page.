const fetchCryptoPrices = async () => {
    const cryptoList = document.getElementById('cryptoList');
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1';

    try {
        const response = await fetch(apiUrl);
        const cryptos = await response.json();

        cryptos.forEach(crypto => {
            const cryptoItem = document.createElement('div');
            cryptoItem.classList.add('crypto-item');

            const cryptoLogo = document.createElement('img');
            cryptoLogo.classList.add('crypto-logo');
            cryptoLogo.src = crypto.image;
            cryptoLogo.alt = `${crypto.name} Logo`;

            const cryptoInfo = document.createElement('div');
            cryptoInfo.classList.add('crypto-info');

            const cryptoName = document.createElement('span');
            cryptoName.classList.add('crypto-name');
            cryptoName.textContent = crypto.name;

            const cryptoPrice = document.createElement('span');
            cryptoPrice.classList.add('crypto-price');
            cryptoPrice.textContent = `$${crypto.current_price}`;

            cryptoInfo.appendChild(cryptoName);
            cryptoInfo.appendChild(cryptoPrice);

            cryptoItem.appendChild(cryptoLogo);
            cryptoItem.appendChild(cryptoInfo);
            cryptoList.appendChild(cryptoItem);
        });
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
    }
};

document.addEventListener('DOMContentLoaded', fetchCryptoPrices);
