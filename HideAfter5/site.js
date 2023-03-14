$(function () {

    initHideButton();
});

function initHideButton() {

    $("#hideBoxAter5").on("click", function () {

        $(".box").fadeOut();
    });
}