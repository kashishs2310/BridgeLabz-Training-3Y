// Q6: Real-Time Table Filter Using the input Event

const searchBox = document.getElementById('searchBox');
const rows = document.querySelectorAll('#studentBody tr');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.trim().toLowerCase(); // case-insensitive search
  let visibleCount = 0;

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase(); // Name + Branch + CGPA
    const isMatch = rowText.includes(query);
    row.style.display = isMatch ? '' : 'none';
    if (isMatch) visibleCount++;
  });

  // Show message when nothing matches
  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});