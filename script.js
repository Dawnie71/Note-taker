const textarea = document.getElementById('note-textarea');
const saveButton = document.getElementById('save-button');
const noteList = document.getElementById('note-list');

saveButton.addEventListener('click', () => {
    const noteText   
 = textarea.value.trim();
    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        noteList.appendChild(li);
        textarea.value = '';
    }
});