
window.onload = function() {
	let websiteTitle = document.querySelector('.website-title');
	let websiteNote = document.querySelector('.website-note');
	
	chrome.tabs.getSelected(null, function(tab) {
		let url = new URL(tab.url);
		let clearUrl = url.hostname + url.pathname;

		websiteTitle.innerText = clearUrl;

		websiteNote.value = localStorage.getItem(clearUrl);
	});

	websiteNote.addEventListener('keydown', function() {
		chrome.tabs.getSelected(null, function(tab) {
			let url = new URL(tab.url);
			let clearUrl = url.hostname + url.pathname;
			localStorage.setItem(clearUrl, websiteNote.value);
		});
	});
}