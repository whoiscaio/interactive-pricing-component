import { sliderStyle } from "./draggable-element.js";
import { elementStyle } from "./draggable-element.js";
import { priceUpdate } from "./prices-mechanism.js";

const toggle = document.querySelector('div.toggle');
export let billingOption = false;

toggle.addEventListener('click', toggleChanger);

function toggleChanger() {
  let sliderWidth = parseFloat(sliderStyle.getPropertyValue('width').substr(0, sliderStyle.getPropertyValue('width').length - 2));
  let elementLeft = parseFloat(elementStyle.getPropertyValue('left').substr(0, elementStyle.getPropertyValue('left').length - 2));

  if(toggle.classList.contains('active')) {
    toggle.classList.remove('active')
    billingOption = false;
  }else{
    toggle.classList.add('active');
    billingOption = true;
  }
  
  console.log(elementLeft, sliderWidth);

  priceUpdate(elementLeft, sliderWidth, billingOption);
}
