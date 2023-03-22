class addItemEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new addItemEvent();
        }
        return this.#instance;
    }
    addEventAddTodoClick() {
        const addItemPlusButton = document.querySelectorAll('.menu-items');
        addItemPlusButton[2].onclick = () => {
            addItemService.getInstance().openAddItem();
            addItemService.getInstance().eraserAddItem();
        }
    }
    addEventAddClick() {
        const addItemPlusButton = document.querySelector(".add-button");
        addItemPlusButton.onclick = () => {
            todoService.getInstance().addTodo();
            addItemService.getInstance().closeAddItem();
            addItemService.getInstance().eraserAddItem();
            

            
        }
    }    

    addEventCancelClick() {
        const addItemCancelButton = document.querySelector(".cancel-button");
        addItemCancelButton.onclick = () => {
            addItemService.getInstance().closeAddItem();
        }
    }
}

class addItemService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new addItemService();
        }
        return this.#instance;
    }

    closeAddItem() {
        const addItemContainer = document.querySelector(".additem-container");
        addItemContainer.classList.add("additem-hidden");
    }
    openAddItem() {
        const addItemContainer = document.querySelector(".additem-container");
        addItemContainer.classList.remove("additem-hidden");
        
    }
    eraserAddItem() {
        const titleInput = document.querySelector(".title-input");
        const contentInput = document.querySelector(".content-input");
        const endday = document.querySelector(".end-day");
        titleInput.value = "";
        contentInput.value="";
        endday.value= "";
    }
}