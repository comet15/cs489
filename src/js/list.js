$(document).ready(function () {
    $("button.goto").click( function () {
        window.location.href = $(this).parent().attr("data-link")
    });

    $("button.copy").click(function () {
        $(this).parent().attr("data-link").select();
        document.execCommand("copy");
        alert("Copy completed.");
    });

    $("button.close").click(function (t) {
        $(this).parent().parent().remove();
    });
});