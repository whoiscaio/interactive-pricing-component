import { billingOption } from './billing.js';
import { priceUpdate } from './prices-mechanism.js';

const element = document.querySelector('.draggable-btn');
const slider = document.querySelector('.slider');
const filledArea = document.querySelector('.filled-area');
export const elementStyle = getComputedStyle(element);
export const sliderStyle = getComputedStyle(slider);
let sliderWidth = sliderStyle.getPropertyValue('width');
let rightLimit = parseFloat(sliderWidth.substr(0, sliderWidth.length - 2));

element.addEventListener('mousedown', dragElementDesktop);
element.addEventListener('touchstart', dragElementMobile);

function dragElementMobile(e) {
  element.classList.add('being-dragged');

  window.addEventListener('touchend', leaveElement);
  window.addEventListener('touchmove', moveElement);

  function moveElement(e) {
    let touchLocation = e.targetTouches[0];
    let newPos = touchLocation.pageX - 60;

    if (newPos >= 0 && newPos <= rightLimit) {
      element.style.left = newPos + 'px';
    }

    priceUpdate(newPos, rightLimit, billingOption);
  }

  function leaveElement() {
    window.removeEventListener('touchstart', dragElementMobile);
    window.removeEventListener('touchmove', moveElement);

    element.classList.remove('being-dragged');
  }
}

function dragElementDesktop(e) {
  element.classList.add('being-dragged');

  window.addEventListener('mouseup', leaveElement);

  window.addEventListener('mousemove', moveElement);

  let currentPos = e.clientX;

  function moveElement(e) {
    let newPos = currentPos - e.clientX;
    let value = elementStyle.getPropertyValue('left');
    let newLeftValue = parseFloat(value.substr(0, value.length - 2)) - newPos;

    if (newLeftValue >= 0 && newLeftValue <= rightLimit) {
      element.style.left = newLeftValue + 'px';
      filledArea.style.width = newLeftValue + 'px';
    }

    currentPos = e.clientX;

    priceUpdate(newLeftValue, rightLimit, billingOption);
  }

  function leaveElement() {
    window.removeEventListener('mouseup', leaveElement);

    window.removeEventListener('mousemove', moveElement);
    element.classList.remove('being-dragged');
  }
}
