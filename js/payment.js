const stripeButton = document.getElementById('stripe-button');

if (stripeButton) {

  stripeButton.href = PRODUCT.stripe;

  stripeButton.addEventListener('click', () => {

    trackEvent('InitiateCheckout');

  });

}

const usdtButton = document.getElementById('usdt-button');

if (usdtButton) {

  usdtButton.href = PRODUCT.usdtBot;

  usdtButton.target = '_blank';
  usdtButton.rel = 'noopener noreferrer';

  usdtButton.addEventListener('click', () => {

    trackEvent('InitiateCheckout');

  });

}