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

export function priceUpdate(pos, totalWidth, billingOption) {
  const interval = pos * 100 / totalWidth;
  let price;

  if(billingOption) {

    if(interval <= 14.3) {
      price = '$5.00';
    }else if(interval > 14.3 && interval <= 28.6) {
      price = '$8.00';
    }else if(interval > 28.6 && interval <= 42.9) {
      price = '$14.00';
    }else if(interval > 42.9 && interval <= 57.2) {
      price = '$25.00';
    }else if(interval > 57.2 && interval <= 71.5) {
      price = '$40.00';
    }else if(interval > 71.5 && interval <= 85.8) {
      price = '$75.00';
    }else {
      price = '$140.00';
    }

  }else{

    if(interval <= 14.3) {
      price = '$8.00';
    }else if(interval > 14.3 && interval <= 28.6) {
      price = '$14.00';
    }else if(interval > 28.6 && interval <= 42.9) {
      price = '$25.00';
    }else if(interval > 42.9 && interval <= 57.2) {
      price = '$40.00';
    }else if(interval > 57.2 && interval <= 71.5) {
      price = '$75.00';
    }else if(interval > 71.5 && interval <= 85.8) {
      price = '$125.00';
    }else {
      price = '$200.00';
    }

  }

  setPrice(price);
}

function setPrice(price) {
  let base = price + '<span>/ month</span>'
  priceElement.innerHTML = base;
}