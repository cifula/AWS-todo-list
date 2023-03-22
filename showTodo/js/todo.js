class todoEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new todoEvent();
        }
        return this.#instance;
    }
    addEventAddTodoClick() {
        const addItemPlusButton = document.querySelectorAll('.menu-items');
        addItemPlusButton[2].onclick = () => {
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
// 파란색 지우기 실패
    // test() {
    //     const checkmenu = document.querySelectorAll(".check-current-menu");
    //     for(let i = 0 ;  i < checkmenu.length; i++) {
    //         if(i == clickindex) {
    //             checkmenu[i].classList.remove('.check-current-menu-hidden');
    //         }
    //     }
    // }
    
}
   
