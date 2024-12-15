// Get references to the block and button
const block = document.getElementById('block');
const button = document.getElementById('changeButton');

// Predefined array of colors
const colors = ['blue', 'red', 'green', 'black', 'brown', 'orange', 'purple', 'pink', 'yellow', 'gray'];

// Add an event listener to the button
button.addEventListener('click', () => {
  // Randomly select a color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  block.style.backgroundColor = randomColor;

  // Toggle shape (square to circle and back)
  if (block.style.borderRadius === '50%') {
    block.style.borderRadius = '0'; // Make it square
  } else {
    block.style.borderRadius = '50%'; // Make it a circle
  }
});
