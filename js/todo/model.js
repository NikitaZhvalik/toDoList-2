export default class Model {
    //! массив с объектами(задачами)
    constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    //! функция загрузки задач
    loadFromLocalStorage() {
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
        //! добавляем айди для каждой задачи 
        let id = 1;
        if (this.tasks.length > 0) {
            id = this.tasks[this.tasks.length - 1]['id'] + 1;
        }

        const newTask = {
            id: id,
            status: 'active',
            text: text,
        }
        this.tasks.push(newTask);
        this.saveToLocalStorage();

        return newTask;
    }

    //! функция поиска задачи по id
    findTask(id) {
        const task = this.tasks.find((task) => {
            if (task.id === parseInt(id)) {
                return true;
            }
        })
        return task;
    }


    //! функция пометки задачи как выполненной/активной
    changeStatus(task) {
        if (task.status === 'active') {
            task.status = 'done';
        }   else {
            task.status = 'active';
        }
        this.saveToLocalStorage();
    }

    //! функция удаления задачи
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }


}