// Index
var nameOpen = '';
var isOpen = false;
var x = null;

// Subpage
slideIndex = [];

// Index
function getIndex(txt, collection)
{
	for (var i = 0; i < collection.length; i++)
	{
		var id = collection[i].id;
		if (id != undefined && id.indexOf(txt) != -1)
			return collection[i];	
	}
	for (var i = 0; i < collection.length; i++)
	{
		var result = getIndex(txt, collection[i].childNodes);
		if (result)
			return result;
	}
	
	return undefined;
}

function view(name) {
	if (x === null)
	{
		x = document.getElementsByClassName("project-slideshow");
	}
	var container = getIndex(name, x);
	
	if (isOpen && name != nameOpen) {
		//Do a transition and close/open with new page
		container.parentNode.className = 'project-slideshow empty';
		setTimeout(function() {
			container.parentNode.className = 'project-slideshow occupied';
			for (var i = 0; i < x.length; i++)
			{
				if (x[i] == container.parentNode)
					continue;
				
				x[i].className = 'project-slideshow empty';
			}
			showdiv(name + "-slide");
		}, 1000);
		isOpen = true;
	}
	else if (isOpen) {
		container.parentNode.className = 'project-slideshow empty';
		isOpen = false;
	}
	else if (!isOpen) {
		container.parentNode.className = 'project-slideshow occupied';
		isOpen = true;
		showdiv(name + "-slide");
	}
	if (isOpen)
		nameOpen = name;
	
	for (var i = 0; i < x.length; i++)
	{
		if (x[i] == container.parentNode)
			continue;
		
		x[i].className = 'project-slideshow empty';
	}
}

function init() {
	$('body').on('click', 'a[data-href]', function() { view($(this).data('href')); });
}

// Subpagevar
function plusdiv(classname, amount) {
	if (slideIndex[classname] == undefined)
	{
		slideIndex[classname] = 1;
	}
	slideIndex[classname] += amount;
	
	showdiv(classname);
}

function showdiv(classname) {
	console.log(classname);
	var divs = document.getElementsByClassName(classname);
	if (slideIndex[classname] == undefined)
	{
		slideIndex[classname] = 1;
	}
	var idx = slideIndex[classname];
	
	if (idx > divs.length) { idx = 1; }
	if (idx < 1) { idx = divs.length; }
	for (var i = 0; i < divs.length; i++)
	{
		divs[i].style.display = "none";
	}
	divs[idx - 1].style.display = "block";
	slideIndex[classname] = idx;
}
/*
function init() {
	showdiv('subpage_slide', slideIndex);
}
*/