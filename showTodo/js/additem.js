class addItemEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new addItemEvent();
        }
        return this.#instance;
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
        const addItemContainer = document.querySelector(".addItem-container");
        addItemContainer.classList.add("additem-hidden");
    }
}