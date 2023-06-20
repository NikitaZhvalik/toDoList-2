export default class View{

    //! рендерим все задачи при открытии сайта
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTask(task);
        });
    }

    //! объект с элементами
    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        tasksList: document.getElementById('tasksList'),
    }

    //! функция рендера задач
    renderTask(taskObject) {
        //! в зависимости от done/active убираем/добавляем класс выполненной задачи
        const completeClass = taskObject.status === 'done' ? 'completed' : '';
        const checked = taskObject.status === 'done' ? 'checked' : '';

        const taskHTML = `
        <li class="todo-item" data-id="${taskObject.id}">
        <label class="todo-item-label">
            <input class="checkbox" type="checkbox" ${checked}/>
            <span class=${completeClass} >${taskObject.text}</span>
            <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
        </label>
        </li>`
        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML);
    }

    //! функция очистки инпута
    clearInput() {
        this.elements.input.value = '';
    }

    //! функция изменения статуса на done/active
    changeStatus(taskObject) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
        const taskTextElement = taskElement.querySelector('span');

        if (taskObject.status === 'done') {
            taskTextElement.classList.add('completed');
        } else {
            taskTextElement.classList.remove('completed');
        }
    }

    //! функция удаления задачи
    removeTask(taskObject) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`);
        taskElement.remove();
	}
}