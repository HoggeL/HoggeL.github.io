var slideIndex = 1;
function plusdiv(classname, amount) {
	showdiv(classname, slideIndex + amount);
}

function showdiv(classname, index) {
	var x = document.getElementsByClassName(classname);
	slideIndex = index;
	if (slideIndex > x.length) { slideIndex = 1; }
	if (slideIndex < 1) { slideIndex = x.length; }
	for (var i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}

function init() {
	showdiv('subpage_slide', slideIndex);
}