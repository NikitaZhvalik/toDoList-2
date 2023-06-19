import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

//! слушаем нажатие на 'enter' для добавления задачи
view.elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    //! добавляем в задачу текст из инпута
    const newTask = model.aadTask(view.elements.input.value);
    view.renderTasks(newTask);
    //! чистим инпут
    view.clearInput();
})

// model.aadTask('сделать завтрак');
// model.aadTask('сделать обед');
// model.aadTask('сделать ужин');

// model.doneTask(model.tasks[1]);

// console.log(model);