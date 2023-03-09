$(function () {

    $("#addTodoBtn").click(function () {

        // <i class="fa-solid fa-circle-check me-2"></i>
        const todoItem = $("#todoInput").val();
        const item = `
            <li role="button" class="list-group-item">
            <i class="fa-regular fa-circle me-2"></i>
                ${todoItem}
            </li>`;

        $("#checkList").prepend(item);
    });

    $('body').on('click', '#checkList li', function () {

        $("#checkList li").removeClass("active");
        $(this).addClass("active");
    });

});