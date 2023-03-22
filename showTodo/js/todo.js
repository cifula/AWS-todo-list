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

            todoService.getInstance().setaddItem();
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
        boardService.getInstance().todoArray[0].push(todoObj);
        localStorage.setItem("todoList",JSON.stringify(todoObj));

    }
    setaddItem() {
        const section = document.querySelector(".additem-section");
        const nowDate = new Date();


        section.innerHTML ='';
        section.innerHTML += `
            <main class="additem-header">
                <h1 class="additem-header-title">TODO 추가</h1>
                <input type="text" class="title-input" placeholder="제목을 입력해주세요">
            </main>
            <main class="additem-main-content">
                <input type="text" class="content-input" placeholder="내용을 입력해주세요">
            </main>
            <main class="additem-footer">
                <div class="write-box">
                    <h3 class="write-text">작성날짜</h2>
                    <h1 class="write-day">${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}<h1>
                </div>
                <div class="end-box">
                    <h3 class="end-text" >마감날짜</h2>
                    <input type="date" class="end-day" >
                </div>
                <button class="add-button"><i class="fa-solid fa-plus"></i></button>
                <button class="cancel-button"><i class="fa-solid fa-xmark"></i></button>
            </main>
        `;
        addItemEvent.getInstance().addEventAddClick();
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
   
