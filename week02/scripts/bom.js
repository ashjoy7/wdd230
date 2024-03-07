document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');
    const button = document.querySelector('button');
    const list = document.getElementById('list');

    button.addEventListener('click', () => {
        if (input.value.trim() === '') {
            input.focus();
            return;
        }

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value.trim();
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
            listItem.remove();
            input.focus();
        });

        input.value = '';
        input.focus();
    });
});
