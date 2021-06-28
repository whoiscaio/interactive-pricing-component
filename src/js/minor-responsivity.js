const [monthly, yearly] = document.querySelectorAll('.billing-area p');

window.addEventListener('resize', changeContent);

changeContent();

function changeContent() {
    if (window.matchMedia('(max-width: 400px)').matches) {
      monthly.innerText = 'Monthly';
      yearly.innerText = 'Yearly';
    }else {
      monthly.innerText = 'Monthly billing';
      yearly.innerText = 'Yearly billing';
    }
}
