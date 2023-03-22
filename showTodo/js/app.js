window.onload = () => {
    boardService.getInstance().loadtodoListAll();
    boardEvent.getInstance().addEventDragItem();
    testClass.getInstance().testEvent();
}