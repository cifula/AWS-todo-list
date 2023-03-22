class todoEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new todoEvent();
        }
        return this.#instance;
    }
    addEventBoardClick() {
        const addItemPlusButton = document.querySelectorAll('.menu-items');
        addItemPlusButton[0].onclick = () => {
            todoService.getInstance().removeCheckCurrentMenuHidden(0);
            todoService.getInstance().addCheckCurrentMenuHidden(1);
        }
    }
    addEventCalendarClick() {
        const addItemPlusButton = document.querySelectorAll('.menu-items');
        addItemPlusButton[1].onclick = () => {
            todoService.getInstance().removeCheckCurrentMenuHidden(1);
            todoService.getInstance().addCheckCurrentMenuHidden(0);
        }
    }
    addEventAddTodoClick() {
        const addItemPlusButton = document.querySelectorAll('.menu-items');
        addItemPlusButton[2].onclick = () => {

            addItemService.getInstance().setDate();
            addItemService.getInstance().openAddItem();

            
            

        }
    }
    
}

class todoService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new todoService();
        }
        return this.#instance;
    }
    todolist = null;
    constructor() {
        if(localStorage.getItem("todoList") == null) {
            this.todoList = new Array();
        } else {
            this.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
    }


    // 데이터 넘겨주는거
    addTodo() {
        const titleInput = document.querySelector(".title-input");
        const contentInput = document.querySelector(".content-input");
        const nowDate = new Date();
        const endDate = document.querySelector(".end-day");


        // 이거 보내기
        const todoObj = {
            writeTodoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}`,
            endTodoDate: endDate.value,
            todoTitle : titleInput.value,
            todoContent: contentInput.value
        }
        this.todoList.push(todoObj);
        localStorage.setItem("todoList",JSON.stringify(todoObj));

    }
    setDate() {
        const today = document.querySelector(".write-box");
        const nowDate = new Date();
        today.innerHTML ='';
        today.innerHTML += `
        <h3 class="write-text">작성날짜</h2>
        <h1 class="write-day">${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}<h1>
        `;
    }

    removeCheckCurrentMenuHidden(clickindex) {
        const checkmenu = document.querySelectorAll(".check-current-menu");
        checkmenu[clickindex].classList.remove('check-current-menu-hidden');
    }
    
    
    addCheckCurrentMenuHidden(clickindex) {
        const checkmenu = document.querySelectorAll(".check-current-menu");
        checkmenu[clickindex].classList.add('check-current-menu-hidden');
    }
    
    
}
   
