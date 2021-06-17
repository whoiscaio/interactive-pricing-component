const element = document.querySelector('.draggable-btn');

element.addEventListener('mousedown', dragElement);
element.addEventListener('mouseup', leaveElement);

function dragElement() {
  element.classList.add('being-dragged');
}

function leaveElement() {
  element.classList.remove('being-dragged');
}