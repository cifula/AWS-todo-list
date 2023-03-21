class boardEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new boardEvent();
        }
        return this.#instance;
    }

    addEventDragItem() {
        const $ = (select) => document.querySelectorAll(select);
        const boardItems = $('.board-items');
        const boardLists = $('.board-list');
        
        boardItems.forEach(boardItem => {
            boardItem.addEventListener("dragstart", () => {
                boardItem.classList.add("dragflag");
            })

            boardItem.addEventListener("dragend", () => {
                boardItem.classList.remove("dragflag");
            })
        })


        boardLists.forEach(boardList => {
            boardList.addEventListener("dragover", e => {
                e.preventDefault();
            })

            boardList.addEventListener("drop", e => {
                const dragItem = document.querySelector(".dragflag");
                if(dragItem.parentElement != boardList) {
                    boardList.appendChild(dragItem);
                }
            })
        })
    }

    addEventClickItem() {
        const boardItems = document.querySelectorAll(".board-items");

        boardItems.forEach((boardItem, index) => {
            boardItem.onclick = () => {
                
            }
        });
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

    todoList = null;

    constructor() {
        if(localStorage.getItem("todoList") == null) {
            this.todoList = new Array();
        } else {
            this.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
    }

    showItemModal(index) {
        
    }
}