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
	var win = window.open('list.html');
	win.focus();
	// var newURL = 'list.html';
	// chrome.tabs.create({'url': newURL});
}