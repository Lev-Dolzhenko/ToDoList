

/*

let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

addMessage.addEventListener('click', function () {
    let newToDo = {
        todoTitle: title.value,
        todoSubtitle: subtitile.value,
        important: false
    };

    toDoList.push(newToDo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    displayMessage();
})

function displayMessage() {
    let displayMessage = ''
    toDoList.forEach(function (item, i) {
        displayMessage += `
            <li class='main-block__task' data-index="${i}">
            <div class="task__text">
            <h2>${item.todoTitle}</h2>
            <p>${item.todoSubtitle}</p>
        </div>
        <div class="task__button">
            <button class="button button--item button--remove">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z" />
                </svg>
            </button>
        </div>
            </li>
        `;
    });

    todo.innerHTML = displayMessage;

    // Привязка обработчика событий к каждой кнопке удаления
    document.querySelectorAll('.button--remove').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Удаление элемента из массива по индексу
            toDoList.splice(index, 1);
            // Обновление localStorage
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
            // Отображение обновлённого списка
            displayMessage(); // добавить эту строку
        });
    });
}

displayMessage();

*/

let subtitile = document.querySelector('.subtitle')
let title = document.querySelector('.title');
let addMessage = document.querySelector('.button-add');
let todo = document.querySelector('.main-block__tasks');
let noTasks = document.querySelector('.main-block__noTasks');
let removeMessage = document.querySelector('.button--remove');

let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

let displayMessage = () => {
    let displayMessage = '';
  
    toDoList.forEach(function (item, i) {
        displayMessage += `
        <li class='main-block__task' data-index="${i}">
            <div class="task__text">
            <h2>${item.todoTitle}</h2>
            <p>${item.todoSubtitle}</p>
        </div>
        <div class="task__button">
            <button class="button button--item button--remove">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z" />
                </svg>
            </button>
        </div>
            </li>
        `;
    });

    todo.innerHTML = displayMessage;
    setupRemovalButtons();
}

let setupRemovalButtons = () => {
    document.querySelectorAll('.button--remove').forEach((btn) => {
        btn.addEventListener('click', function() {
            let index = Number(btn.parentNode.parentNode.getAttribute('data-index'));
            toDoList.splice(index, 1);
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
            displayMessage();
        });
    });
}

addMessage.addEventListener('click', function () {
    let newToDo = {
        todoTitle: title.value,
        todoSubtitle: subtitile.value,
        important: false
    };

    toDoList.push(newToDo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    displayMessage();
});

displayMessage();
setupRemovalButtons();
/*
let subtitile = document.querySelector('.subtitle')
let title = document.querySelector('.title');
let addMessage = document.querySelector('.button-add');
let todo = document.querySelector('.main-block__tasks');
let noTasks = document.querySelector('.main-block__noTasks');
let removeMessage = document.querySelector('.button--remove');

let displayMessage = () => {
    let displayMessage = '';
  
    toDoList.forEach(function (item, i) {
        displayMessage += `
        <li class='main-block__task' data-index="${i}">
            <div class="task__text">
            <h2>${item.todoTitle}</h2>
            <p>${item.todoSubtitle}</p>
        </div>
        <div class="task__button">
            <button class="button button--item button--remove">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z" />
                </svg>
            </button>
        </div>
            </li>
        `;
    });

    todo.innerHTML = displayMessage;
}

let setupRemovalButtons = () => {
    document.querySelectorAll('.button--remove').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            toDoList.splice(index, 1);
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
            displayMessage();
        });
    });
}

addMessage.addEventListener('click', function () {
    let newToDo = {
        todoTitle: title.value,
        todoSubtitle: subtitile.value,
        important: false
    };

    toDoList.push(newToDo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    displayMessage();
    setupRemovalButtons();
});

displayMessage();
setupRemovalButtons();
*/