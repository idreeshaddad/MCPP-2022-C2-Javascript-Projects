$(function () {

    $("#addTodoBtn").click(function () {

        addItemToList();
        clearTodoText();
    });

    $("#todoInput").on("keydown", function (event) {

        if (event.which == 13) {
            addItemToList();
            clearTodoText();
        }
    });

    $('body').on('click', '#checkList li', function () {

        setCheckToItem(this);
        removeTodoItem(this);
    });

});

function addItemToList() {

    const todoItem = $("#todoInput").val();
    const item = `
        <li role="button" class="list-group-item">
            <i class="fa-regular fa-circle me-2"></i>
                ${todoItem}
        </li>`;

    $("#checkList").prepend(item);
}

function clearTodoText() {

    $("#todoInput").val('');
}

function removeTodoItem(checkListItem) {

    $(checkListItem).fadeOut("slow", function () {
        $(checkListItem).remove();
    });
}

function setCheckToItem(checkListItem) {

    $(checkListItem).find("i").removeClass("fa-circle");
    $(checkListItem).find("i").addClass("fa-circle-check");
}