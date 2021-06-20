/*

0 - 14.3
14.3 - 28.6
28.6 - 42.9
42.9 - 57.2
57.2 - 71.5
71.5 - 85.8
85.8 - 100 

*/

const priceElement = document.querySelector('.dragger p');
const pageviewsElement = document.querySelector('.dragger > span');

export function priceUpdate(pos, totalWidth, billingOption) {
  const interval = pos * 100 / totalWidth;
  let price, pageviews;

  if(billingOption) {

    if(interval <= 14.3) {
      price = '$6.00';
      pageviews = 10;
    }else if(interval > 14.3 && interval <= 28.6) {
      price = '$10.50';
      pageviews = 20;
    }else if(interval > 28.6 && interval <= 42.9) {
      price = '$18.75';
      pageviews = 50;
    }else if(interval > 42.9 && interval <= 57.2) {
      price = '$30.00';
      pageviews = 100;
    }else if(interval > 57.2 && interval <= 71.5) {
      price = '$56.25';
      pageviews = 200;
    }else if(interval > 71.5 && interval <= 85.8) {
      price = '$93.75';
      pageviews = 500;
    }else {
      price = '$150.00';
      pageviews = '1K'
    }

  }else{

    if(interval <= 14.3) {
      price = '$8.00';
      pageviews = 10
    }else if(interval > 14.3 && interval <= 28.6) {
      price = '$14.00';
      pageviews = 20;
    }else if(interval > 28.6 && interval <= 42.9) {
      price = '$25.00';
      pageviews = 50;
    }else if(interval > 42.9 && interval <= 57.2) {
      price = '$40.00';
      pageviews = 100;
    }else if(interval > 57.2 && interval <= 71.5) {
      price = '$75.00';
      pageviews = 200;
    }else if(interval > 71.5 && interval <= 85.8) {
      price = '$125.00';
      pageviews = 500
    }else {
      price = '$200.00';
      pageviews = '1K';
    }

  }

  setPrice(price, pageviews);
}

function setPrice(price, pageviews) {
  let priceContent = price + '<span>/ month</span>';
  let pageviewsContent = pageviews + 'K PAGEVIEWS';

  priceElement.innerHTML = priceContent;
  pageviewsElement.innerHTML = pageviewsContent;
}