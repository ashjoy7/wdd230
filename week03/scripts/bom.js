document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');
    const button = document.querySelector('button');
    const list = document.getElementById('list');

    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value.trim() === '') {
            input.focus();
            return;
        }

        displayList(input.value.trim());
        chaptersArray.push(input.value.trim());
        setChapterList();
        input.value = '';
        input.focus();
    });

    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', () => {
            li.remove();
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
});
