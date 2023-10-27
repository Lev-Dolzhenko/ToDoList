/*
<div>

const subtitile = document.querySelector('.subtitle');
const title = document.querySelector('.title');
const addMessage = document.querySelector('.button-add');
const todo = document.querySelector('.main-block__tasks');
const noTasks = document.querySelector('.main-block__noTasks');
const removeMessage = document.querySelector('.button--remove');
const task = document.querySelector('.main-block__task');
const addButons = document.querySelector('.main-block__buttons-additional');
const tss = document.querySelector('.main-block__task-main');
const buttonShare = document.querySelector('.button--share');
const footerShare = document.querySelector('.phone__footer');

const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

const displayMessage = () => {
  let displayMessage = '';

  toDoList.forEach((item, i) => {
    displayMessage += `
        <li>
    <div class="main-block__tasks-main">
        <div class='main-block__task' data-index="${i}">
            <div class="task__text">
                <h2>${item.todoTitle}</h2>
                <p>${item.todoSubtitle}</p>
            </div>
            <div class="task__button">
                <button class="button button--item button--remove">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="main-block__buttons-additional none">
        <button class="button button--additional">
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667L0 9.5ZM11.8067 2.69334C12.0667 2.43334 12.0667 2.01334 11.8067 1.75334L10.2467 0.193337C9.98667 -0.0666632 9.56667 -0.0666632 9.30667 0.193337L8.08667 1.41334L10.5867 3.91334L11.8067 2.69334Z" />
            </svg>
        </button>
        <button class="button button--additional">
            <svg width="3" height="12" viewBox="0 0 3 12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.63281 3.54688V12H0.375V3.54688H2.63281ZM0.234375 1.34375C0.234375 1.01562 0.348958 0.744792 0.578125 0.53125C0.807292 0.317708 1.11458 0.210938 1.5 0.210938C1.88021 0.210938 2.1849 0.317708 2.41406 0.53125C2.64844 0.744792 2.76562 1.01562 2.76562 1.34375C2.76562 1.67188 2.64844 1.94271 2.41406 2.15625C2.1849 2.36979 1.88021 2.47656 1.5 2.47656C1.11458 2.47656 0.807292 2.36979 0.578125 2.15625C0.348958 1.94271 0.234375 1.67188 0.234375 1.34375Z" />
            </svg>
        </button>
        <button class="button button--additional button--share">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.5556 10.9511C11.9645 10.9511 11.4356 11.1844 11.0311 11.55L5.48558 8.32222C5.52447 8.14333 5.55558 7.96444 5.55558 7.77778C5.55558 7.59111 5.52447 7.41222 5.48558 7.23333L10.9689 4.03667C11.3889 4.42556 11.9411 4.66667 12.5556 4.66667C13.8467 4.66667 14.8889 3.62444 14.8889 2.33333C14.8889 1.04222 13.8467 0 12.5556 0C11.2645 0 10.2222 1.04222 10.2222 2.33333C10.2222 2.52 10.2534 2.69889 10.2922 2.87778L4.80892 6.07444C4.38892 5.68556 3.83669 5.44444 3.22225 5.44444C1.93114 5.44444 0.888916 6.48667 0.888916 7.77778C0.888916 9.06889 1.93114 10.1111 3.22225 10.1111C3.83669 10.1111 4.38892 9.87 4.80892 9.48111L10.3467 12.7167C10.3078 12.88 10.2845 13.0511 10.2845 13.2222C10.2845 14.4744 11.3034 15.4933 12.5556 15.4933C13.8078 15.4933 14.8267 14.4744 14.8267 13.2222C14.8267 11.97 13.8078 10.9511 12.5556 10.9511Z" />
            </svg>
        </button>
    </div>
</li>
`;
  });
  todo.innerHTML = displayMessage;
  setupRemovalButtons();

  document.querySelectorAll('.main-block__tasks-main').forEach((task) => {
    task.addEventListener('click', function () {
      const additionalButtons = this.parentNode.querySelector('.main-block__buttons-additional');
      additionalButtons.classList.toggle('none');
    });
  });

  if (toDoList.length > 0) { Сделать через тернарник
    noTasks.classList.add('none');
  } else {
    noTasks.classList.remove('none');
  }
};

let setupRemovalButtons = () => {
  document.querySelectorAll('.button--remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = Number(btn.parentNode.parentNode.getAttribute('data-index'));
      toDoList.splice(index, 1);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      displayMessage();
    });
  });
};

addMessage.addEventListener('click', () => {
  const newToDo = {
    todoTitle: title.value,
    todoSubtitle: subtitile.value,
    important: false,
  };

  toDoList.push(newToDo);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  displayMessage();
  title.value = '';
  subtitile.value = '';
});

let setupShareButtons = () => {
    document.querySelectorAll('.button--share').forEach((buttonShare) => {
      buttonShare.addEventListener('click', function() {
        footerShare.classList.toggle('none');
      });
    });
  };

  displayMessage();
  setupRemovalButtons();
  setupShareButtons();

  </div>
*/

/*---------Переменные для добавления задач-----------*/
const taskInputTitle = document.querySelector('.title');
const taskInputSubtitle = document.querySelector('.subtitle');
const buttonAddTask = document.querySelector('.button-add');
const listTasks = document.querySelector('.main-block__tasks');
/*---------/Переменные для добавления задач-----------*/
/*---------Переменные для удаления плашки "No tasks"-----------*/
const noTasks = document.querySelector('.main-block__noTasks');
/*---------/Переменные для удаления плашки "No tasks"-----------*/

buttonAddTask.addEventListener('click', addTask)
listTasks.addEventListener('click', deleteTask)

let tasks = [];

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

if (tasks.length > 0) {
  noTasks.classList.add('none')
}

tasks.forEach(function (task) {
  renderTask(task)
});

function addTask() {
  const taskInputTitleValue = taskInputTitle.value; //В этой переменной хранится значение input c классов "title"
  const taskInputSubtitleValue = taskInputSubtitle.value;//В этой переменной хранится значение input c классов "subtitle"

  const newTask = {
    id: Date.now(),
    title: taskInputTitleValue,
    subtitle: taskInputSubtitleValue
  };

  tasks.push(newTask);
  showTasks();

  renderTask(newTask)

  taskInputTitle.value = ''; //Очищаем наш input
  taskInputSubtitle.value = ''; //Очищаем наш input
  taskInputTitle.focus(); //После добавления задачи, фокус будет оставаться на taskInputTitle

  if (listTasks.children.length > 0) { //Если кол-во 'li'-тэгов больше 0, то добавляем класс 'none' плашке 'noTasks'
    noTasks.classList.add('none');
  }
}

function deleteTask(event) {
  if (event.target.dataset.action === 'delete') { //Проверяем имеет ли наша кнопка значение "data-action" = "delete"
    const parentNode = event.target.closest('li'); //Заносим в переменную "parentNode" родителя с тэгом li, отностительно нашей кнопки
    parentNode.remove(); //Удаляем элемент

    const id = Number(parentNode.id); //Определяем id нашего тэга li

    const index = tasks.findIndex(task => task.id === id); //Находим индекс нашего тэга li

    tasks.splice(index, 1); //Удаляем из массива наш тэг li
    showTasks();
  }

  if (listTasks.children.length < 1) { //Если кол-во 'li'-тэгов меньше 1, то удаляем класс 'none' плашке 'noTasks'
    noTasks.classList.remove('none')
  }
}

function showTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {
  const taskHTML = //Переменная в которой хранится разметка задачи
    `
  <li id="${task.id}">
    <div class="main-block__tasks-main">
        <div class='main-block__task'>
            <div class="task__text">
                <h2>${task.title}</h2>
                <p>${task.subtitle}</p>
            </div>
            <div class="task__button">
                <button data-action = 'delete' class="button button--item button--remove">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="main-block__buttons-additional none">
        <button class="button button--additional">
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667L0 9.5ZM11.8067 2.69334C12.0667 2.43334 12.0667 2.01334 11.8067 1.75334L10.2467 0.193337C9.98667 -0.0666632 9.56667 -0.0666632 9.30667 0.193337L8.08667 1.41334L10.5867 3.91334L11.8067 2.69334Z" />
            </svg>
        </button>
        <button class="button button--additional">
            <svg width="3" height="12" viewBox="0 0 3 12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.63281 3.54688V12H0.375V3.54688H2.63281ZM0.234375 1.34375C0.234375 1.01562 0.348958 0.744792 0.578125 0.53125C0.807292 0.317708 1.11458 0.210938 1.5 0.210938C1.88021 0.210938 2.1849 0.317708 2.41406 0.53125C2.64844 0.744792 2.76562 1.01562 2.76562 1.34375C2.76562 1.67188 2.64844 1.94271 2.41406 2.15625C2.1849 2.36979 1.88021 2.47656 1.5 2.47656C1.11458 2.47656 0.807292 2.36979 0.578125 2.15625C0.348958 1.94271 0.234375 1.67188 0.234375 1.34375Z" />
            </svg>
        </button>
        <button class="button button--additional button--share">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.5556 10.9511C11.9645 10.9511 11.4356 11.1844 11.0311 11.55L5.48558 8.32222C5.52447 8.14333 5.55558 7.96444 5.55558 7.77778C5.55558 7.59111 5.52447 7.41222 5.48558 7.23333L10.9689 4.03667C11.3889 4.42556 11.9411 4.66667 12.5556 4.66667C13.8467 4.66667 14.8889 3.62444 14.8889 2.33333C14.8889 1.04222 13.8467 0 12.5556 0C11.2645 0 10.2222 1.04222 10.2222 2.33333C10.2222 2.52 10.2534 2.69889 10.2922 2.87778L4.80892 6.07444C4.38892 5.68556 3.83669 5.44444 3.22225 5.44444C1.93114 5.44444 0.888916 6.48667 0.888916 7.77778C0.888916 9.06889 1.93114 10.1111 3.22225 10.1111C3.83669 10.1111 4.38892 9.87 4.80892 9.48111L10.3467 12.7167C10.3078 12.88 10.2845 13.0511 10.2845 13.2222C10.2845 14.4744 11.3034 15.4933 12.5556 15.4933C13.8078 15.4933 14.8267 14.4744 14.8267 13.2222C14.8267 11.97 13.8078 10.9511 12.5556 10.9511Z" />
            </svg>
        </button>
    </div>
</li>
  `
  listTasks.insertAdjacentHTML('beforeend', taskHTML); //С помощью метода "insertAdjacentHTML", добавляем новую задачу в конец списка
}