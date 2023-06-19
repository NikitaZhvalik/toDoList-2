export default class Model {
    //! массив с объектами(задачами)
    constructor() {
        this.tasks = [];
        this.LoadFromLocalStorage();
    }

    //! функция загрузки задач
    LoadFromLocalStorage() {
        const data = localStorage.getItem('tasks'); 
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }


    //! функция сохранения задач в LocalStorage
    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    //! функция добавления задачи
    aadTask(text) {
        const newTask = {
            status: 'active',
            text: text,
        }
        this.tasks.push(newTask);
        this.saveToLocalStorage();

        return newTask;
    }

    //! функция пометки задачи как выполненной
    doneTask(task) {
        task.status = 'done'; 
        this.saveToLocalStorage();
    }

    //! функция удаления задачи
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }


}