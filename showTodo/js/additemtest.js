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
            boardLists[0].innerHTML += `
            <li class="board-items" draggable="true">
            <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
            <div class="content-header">
                <h1 class="content-title">TITLE</h1>
                </div>
                <div class="content-main">
                main content
                </div>
                <div class="content-footer">
                <div class="content-date">2023-03-20</div>
                </div>
                </li>
            `
            boardEvent.getInstance().addEventDragItem();
        }
    }

}
