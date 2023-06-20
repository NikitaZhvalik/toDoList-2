export default class View{

    //! рендерим все задачи при открытии сайта
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTasks(task);
        });
    }

    //! объект с элементами
    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        tasksList: document.getElementById('tasksList'),
    }

    //! функция рендера задач
    renderTasks(taskObject) {
        //! в зависимости от done/active убираем/добавляем класс выполненной задачи
        const completeClass = taskObject.status === 'done' ? 'completed' : '';
        const checked = taskObject.status === 'done' ? 'checked' : '';

        const taskHTML = `
        <li class="todo-item" data-id='${taskObject.id}'>
        <label class="todo-item-label">
            <input class="checkbox" type="checkbox" ${checked}/>
            <span class=${completeClass} >${taskObject.text}</span>
            <button class="btn btn-secondary btn-sm">Удалить</button>
        </label>
        </li>`
        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML);
    }

    //! функция очистки инпута
    clearInput() {
        this.elements.input.value = '';
    }


}