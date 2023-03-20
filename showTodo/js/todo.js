class todoService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TodoEvent();
        }
        return this.#instance;
    }
    //  실패
    setDate() {
        const nowDate = document.getElementsByClassName('write-day');
        today = new Date().toISOString().slice(0, 10);
        nowDate.value = today; 
    }

    addTodo() {
        const titleInput = document.getElementsByClassName(".title-input");
        const contentInput = document.getElementsByClassName('content-input');
        const endDate = document.getElementsByClassName(".end-day").value;
        // 이거 보내기
        const todoObj = {
            writeTodoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
            endTodoDate: `${endDate.getFullYear()}.${endDate.getMonth()}.${endDate.getDate()}.`,
            todoTitle : titleInput.value,
            todoContent: contentInput.value
        }
    }
}
   
