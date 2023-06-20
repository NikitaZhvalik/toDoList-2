import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

//! добавление задачи
view.elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    //! добавляем в задачу текст из инпута
    const newTask = model.aadTask(view.elements.input.value);
    view.renderTask(newTask);
    //! чистим инпут
    view.clearInput();
})

//! нажали на чекбокс или кнопку 'удалить'
view.elements.tasksList.addEventListener('click', (e) => {
    //! проверяем клик по чекбоксу
    if (e.target.getAttribute('type') === 'checkbox') {
        const id = e.target.closest('.todo-item').dataset.id;
        const task = model.findTask(id);
        model.changeStatus(task);
        view.changeStatus(task);
    }

    //! проверяем клик по кнопке 'удалить'
    if (e.target.hasAttribute('data-delete')) {
        const id = e.target.closest('.todo-item').dataset.id;
        const task = model.findTask(id);
        model.removeTask(task);
        view.removeTask(task);

    }
})
