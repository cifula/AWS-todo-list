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
        }
    }
    addEventAddClick() {
        const addItemPlusButton = document.querySelector(".add-button");
        addItemPlusButton.onclick = () => {
            addItemService.getInstance().closeAddItem();
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
}