// Q5: Image Gallery with Modal Preview

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalContent = document.querySelector('.modal-content');

// Event delegation: one listener on the grid handles clicks on every image
gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    modalImg.src = event.target.dataset.full; // bigger version of the clicked image
    modalImg.alt = event.target.alt;
    modal.classList.add('open');
  }
});

// Clicking the dark background (outside the modal box) closes the modal
modal.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Clicking inside the modal content must NOT close it
modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
});