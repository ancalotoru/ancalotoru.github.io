$('.about-dropdown-btn').on('click', function(e){
	var id = e.currentTarget.id;
	$('#' + id.substr(0, id.length-2)).show('fast');
});
$(".trigger").click(function() {
	$(".menu").toggleClass("active"); 
});

window.sr = ScrollReveal();
var elementContainer = this.document.getElementById('contact-block');
sr.reveal('.contact-item', {reset: true, container: elementContainer, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', origin:'right'}, 200);
