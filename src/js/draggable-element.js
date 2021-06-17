const element = document.querySelector('.draggable-btn');
const slider = document.querySelector('.slider');
const elementStyle = getComputedStyle(element);
const sliderStyle = getComputedStyle(slider);

element.addEventListener('mousedown', dragElement);

function dragElement(e) {
  console.log('a');
  element.classList.add('being-dragged');

  window.addEventListener('mouseup', leaveElement);
  window.addEventListener('mousemove', moveElement);

  let currentPos = e.clientX;

  function moveElement(e) {
    let newPos = currentPos - e.clientX;
    let value = elementStyle.getPropertyValue('left');
    let newLeftValue = parseFloat(value.substr(0, value.length - 2)) - newPos;
    let sliderWidth = sliderStyle.getPropertyValue('width');
    let rightLimit = parseFloat(sliderWidth.substr(0, sliderWidth.length - 2));

    if(true) {
      if(newLeftValue >= 0 && newLeftValue <= rightLimit) {
        element.style.left = newLeftValue + "px";
      }
    }

    currentPos = e.clientX;
  }

  function leaveElement() {
    window.removeEventListener('mouseup', leaveElement);
    window.removeEventListener('mousemove', moveElement);
    element.classList.remove('being-dragged');
  }
}