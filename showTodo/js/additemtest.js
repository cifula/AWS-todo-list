class testClass {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new testClass();
        }
        return this.#instance;
    }

    testEvent() {
        const menuItems = document.querySelectorAll(".menu-items");
        const boardLists = document.querySelectorAll(".board-list");
        
        menuItems[2].onclick = () => {
            const todoObj = {
                todoTitle: "TITLE",
                todoContent:"main content1",
                todoDate:"2023-03-20"
            }

            boardLists[0].innerHTML += `
            <li class="board-items" draggable="true">
            <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
            <div class="content-header">
                <h1 class="content-title">${todoObj.todoTitle}</h1>
                </div>
                <div class="content-main">
                ${todoObj.todoContent}
                </div>
                <div class="content-footer">
                <div class="content-date">${todoObj.todoDate}</div>
                </div>
                </li>
            `

            boardService.getInstance().todoArray[0].push(todoObj);
            boardService.getInstance().updateLocalStorage();
            boardEvent.getInstance().addEventDeleteTodoClick();
            boardEvent.getInstance().addEventDragItem();
        }
    }

}
