// JavaScript Scripts

// Define elements
const inputEl = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const listEl = document.getElementById('list');

// 2) Build list item
function buildListItem(text) {
const li = document.createElement('li');

const span = document.createElement('span');
span.className = 'item-text';
span.textContent = text;

const editBtn = document.createElement('button');
editBtn.className = 'edit-btn';
editBtn.textContent = 'Edit';

const removeBtn = document.createElement('button');
removeBtn.className = 'remove-btn';
removeBtn.textContent = 'Remove';

li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(removeBtn);

return li;
}

// 3) Adds new item
function addItem() {
const text = inputEl.value.trim();
if (text === '') return; 

const li = buildListItem(text);
listEl.appendChild(li);

inputEl.value = '';
inputEl.focus();
}

addBtn.addEventListener('click', addItem);

// 4) Handle clicks on Edit and Remove 
listEl.addEventListener('click', function (event) {
const target = event.target;

// Remove button
if (target.classList.contains('remove-btn')) {
const li = target.parentElement;
li.remove();
return;
}

// Edit or Save
if (target.classList.contains('edit-btn')) {
const li = target.parentElement;

if (target.textContent === 'Edit') {
const span = li.querySelector('.item-text');

const input = document.createElement('input');
input.type = 'text';
input.value = span.textContent;
input.className = 'edit-input';

li.replaceChild(input, span);
target.textContent = 'Save';
input.focus();
} else {
const input = li.querySelector('.edit-input');
const newText = input.value.trim();

const span = document.createElement('span');
span.className = 'item-text';
span.textContent = newText || '(empty)';

li.replaceChild(span, input);
target.textContent = 'Edit';
}
}
});
