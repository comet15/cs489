var button_submit = document.getElementById("submit");

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

var database = firebase.database();
var reference = database.ref("references");

function writeData(name, url) {
	database.ref('references/' + name).set({
		link: url,
		name: name
	})
}

button_submit.onclick = function(element) {
	writeData($("#description_input").val(), window.location.href);
	window.close();
};