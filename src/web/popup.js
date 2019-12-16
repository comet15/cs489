var urls = [];
var myStorage = window.localStorage;
var urlCount = 0;
var bkg = chrome.extension.getBackgroundPage();

var button1 = document.getElementById('button1');
button1.onclick = function(element) {
	chrome.tabs.query({'active':true, 'lastFocusedWindow':true}, function(tabs) {
		var url = tabs[0].url;
		myStorage.setItem(urlCount, url);
	});
	bkg.console.log("here1");
	window.location.href="popup_ref.html";
}

var button2 = document.getElementById('button2');
button2.onclick = function(element) {
	var newURL = 'file:///C:/Users/KunTae%20Park/Desktop/ce/cs489/src/web/list.html';
	chrome.tabs.create({'url': newURL});
}

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