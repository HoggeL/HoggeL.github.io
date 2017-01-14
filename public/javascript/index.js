var urlOpen = '';
var isOpen = false;
var x = null;

function view(url) {
	console.log(isOpen);
	if (x === null)
		x = document.getElementById('slideshow_iframe');
	
	if (isOpen && url != urlOpen) {
		//Do a transition and close/open with new page
		x.className = 'empty';
		setTimeout(function() {
			x.className = 'occupied';
			x.contentDocument.location.href = url;
		}, 1000);
		isOpen = true;
	}
	else if (isOpen) {
		x.className = 'empty';
		isOpen = false;
	}
	else if (!isOpen) {
		x.contentDocument.location.href = url;
		x.className = 'occupied';
		isOpen = true;
	}
	if (isOpen)
		urlOpen = url;
}

function init() {
	$('body').on('click', 'a[data-href]', function() { view($(this).data('href')); });
}