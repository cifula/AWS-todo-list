window.onload = () => {
    boardService.getInstance();
    boardService.getInstance().loadtodoListAll();
    boardEvent.getInstance().addEventDragItem();

    addItemEvent.getInstance().addEventAddTodoClick();
    addItemEvent.getInstance().addEventAddClick();
    addItemEvent.getInstance().addEventCancelClick();
    todoEvent.getInstance().addEventBoardClick();
    todoEvent.getInstance().addEventCalendarClick() ;
    todoService.getInstance().setaddItem();
}