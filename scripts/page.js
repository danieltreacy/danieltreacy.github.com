// (c) Daniel Treacy, whatever

// jquery listeners

$(document).ready(function() { 

	$('.top').click(function() { 
		goTopOfPage();
	});
	
});


// functions
function goTopOfPage() {
	$('html,body').animate({scrollTop: $("#top").offset().top});
}