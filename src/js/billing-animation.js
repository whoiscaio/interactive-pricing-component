const toggle = document.querySelector('div.toggle');

function toggleChanger() {
  toggle.classList.contains('active')
    ? toggle.classList.remove('active')
    : toggle.classList.add('active');
}
