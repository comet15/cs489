// $(document).ready(function () {
//     $("button.goto").click( function () {
//         window.location.href = $(this).parent().attr("data-link")
//     });
//
//     $("button.copy").click(function () {
//         $(this).parent().children(".save-link:nth-child(1)").select();
//         document.execCommand("copy");
//         alert("Copy completed.");
//     });
//
//     $("button.close").click(function (t) {
//         $(this).parent().parent().remove();
//     });
// });
//
//
document.getElementsByClassName("goto").onclick = function () {
    console.log("aaaaa")
    window.location.href = this.parent.getAttribute("data-link")
}

document.getElementsByClassName("copy").onclick = function () {
    this.parent.getElementsByClassName("save-link").select();
    document.execCommand("copy");
    alert("Copy completed.");
}

document.getElementsByClassName("close").onclick = function () {
    this.parent.parent.remove();
}