// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCggAvRjPps2mjPK2eqWjTpCoidwIZFSIg",
    authDomain: "cs489-417f7.firebaseapp.com",
    databaseURL: "https://cs489-417f7.firebaseio.com",
    projectId: "cs489-417f7",
    storageBucket: "cs489-417f7.appspot.com",
    messagingSenderId: "388831884619",
    appId: "1:388831884619:web:97fb2bba46306ac5e364ce",
    measurementId: "G-3S9JJFSFY1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var reference = firebase.database().ref("references");


$(document).ready(function () {
    $("button.goto").click( function () {
        window.location.href = $(this).parent().attr("data-link")
    });

    $("button.copy").click(function () {
        $(this).parent().children(".save-link:nth-child(1)").select();
        document.execCommand("copy");
        alert("Copy completed.");
    });

    $("button.close").click(function (t) {
        $(this).parent().parent().remove();
    });
});