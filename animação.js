const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.cursor = 'pointer';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'white';
  button.style.color = '#4CAF50';
  button.style.cursor = 'default';
});

button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#3e8e41';
});

button.addEventListener('mouseup', () => {
  button.style.backgroundColor = '#4CAF50';
});