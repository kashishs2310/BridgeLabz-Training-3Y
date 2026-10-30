// Q1: Dynamic Product List Manager using Event Delegation

const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

// Create a list item with Edit and Delete buttons
function createProductItem(text) {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = text;

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  li.append(nameSpan, editBtn, deleteBtn);
  return li;
}

// Add a new product from the input box
function addProduct() {
  const text = productInput.value.trim();
  if (text === '') return; // ignore empty input
  productList.appendChild(createProductItem(text));
  productInput.value = '';
  productInput.focus();
}

// Switch an item into inline edit mode
function startEdit(li) {
  const nameSpan = li.querySelector('.name');
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'edit-input';
  input.value = nameSpan.textContent;
  li.dataset.original = nameSpan.textContent; // keep old value in case new one is empty
  nameSpan.replaceWith(input);
  li.querySelector('.edit-btn').textContent = 'Save';
  li.classList.add('editing');
  input.focus();
}

// Save the edited text and return to normal view
function saveEdit(li) {
  const input = li.querySelector('.edit-input');
  if (!input) return;
  const newText = input.value.trim() || li.dataset.original;
  const nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = newText;
  input.replaceWith(nameSpan);
  li.querySelector('.edit-btn').textContent = 'Edit';
  li.classList.remove('editing');
}

// EVENT DELEGATION: one listener on the parent <ul> handles all Edit/Delete clicks
productList.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  if (!li) return;

  if (event.target.classList.contains('delete-btn')) {
    li.remove();
  } else if (event.target.classList.contains('edit-btn')) {
    li.classList.contains('editing') ? saveEdit(li) : startEdit(li);
  }
});

// Pressing Enter while editing also saves
productList.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.target.classList.contains('edit-input')) {
    saveEdit(event.target.closest('li'));
  }
});

// Click outside the item being edited -> auto-save
document.addEventListener('click', (event) => {
  const editingItem = productList.querySelector('li.editing');
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});

addBtn.addEventListener('click', addProduct);
productInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addProduct(); });