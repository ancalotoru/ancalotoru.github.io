$('.about-dropdown-btn').on('click', function(e){
	var id = e.currentTarget.id;
	$('#' + id.substr(0, id.length-2)).show('fast');
});
$(".trigger").click(function() {
	$(".menu").toggleClass("active"); 
});