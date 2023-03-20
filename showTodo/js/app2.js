window.onload = () => {
    addItemEvent.getInstance().addEventAddClick();
    addItemEvent.getInstance().addEventCancelClick();
    todoService.getInstance().setDate();
}