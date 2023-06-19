import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

//! добавление задачи
view.elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    //! добавляем в задачу текст из инпута
    const newTask = model.aadTask(view.elements.input.value);
    view.renderTasks(newTask);
    //! чистим инпут
    view.clearInput();
})

//! нажали на чек
view.elements.addEventListener('click', (e) => {
    //! проверяем клик по чекбоксу
    if (e.target.getAttribute('type') === 'checkbox') {
        
    }
})

