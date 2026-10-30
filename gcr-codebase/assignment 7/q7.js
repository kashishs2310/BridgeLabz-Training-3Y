// Q7: Detect Mouse Path & Coordinates Logger

const box = document.getElementById('box');
const coords = document.getElementById('coords');

// Live clientX / clientY while the mouse moves inside the box
box.addEventListener('mousemove', (event) => {
  coords.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

// Reset text when the mouse leaves the box
box.addEventListener('mouseleave', () => {
  coords.textContent = 'Move the mouse inside the box';
});

// Double-click drops a red dot at the click position
box.addEventListener('dblclick', (event) => {
  const rect = box.getBoundingClientRect();

  // Convert viewport coordinates to coordinates inside the box (border excluded)
  const x = event.clientX - rect.left - box.clientLeft;
  const y = event.clientY - rect.top - box.clientTop;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  box.appendChild(dot);
});