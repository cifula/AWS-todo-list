class boardEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new boardEvent();
        }
        return this.#instance;
    }

    addEventDragItem() {
        const boardItems = document.querySelectorAll(".board-items");
        
        boardItems.forEach(boardItem => {
            boardItem.addEventListener("dragstart", () => {
                boardItem.classList.add("dragflag");
            })

            boardItem.addEventListener("dragend", () => {
                boardItem.classList.remove("dragflag");
            })
        })

        const boardLists = document.querySelectorAll(".board-list");

        boardLists.forEach(boardList => {
            boardList.addEventListener("dragover", (e) => {
                e.preventDefault();
                const dragItem = document.querySelector(".dragflag");
                boardList.appendChild(dragItem);
            })

            boardList.addEventListener("drop", (e) => {
                e.preventDefault();
                const dragItem = document.querySelector(".dragflag");
                // boardList.appendChild(dragItem);
            })
        })

    }
}



class boardService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new boardService();
        }
        return this.#instance;
    }
}