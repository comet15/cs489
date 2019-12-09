let urls = [];
let myStorage = window.localStorage;
let urlCount = 0;
let bkg = chrome.extension.getBackgroundPage();

let button1 = document.getElementById('button1');
button1.onclick = function(element) {
	chrome.tabs.query({'active':true, 'lastFocusedWindow':true}, function(tabs) {
		var url = tabs[0].url;
		myStorage.setItem(urlCount, url);
	});
	bkg.console.log("here1");
	window.location.href="popup_ref.html";
}

let button2 = document.getElementById('button2');
button2.onclick = function(element) {
	var newURL = 'file:///C:/Users/KunTae%20Park/Desktop/ce/cs489/src/web/list.html';
	chrome.tabs.create({'url': newURL});
}