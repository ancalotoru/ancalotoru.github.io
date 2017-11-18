(function ($) {
	$.each(['show', 'hide'], function (i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function () {
			console.log('entra aqui');
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});
})(jQuery)

$('.about-dropdown-btn').on('click', function(e){
	var id = e.currentTarget.id;
	$('#' + id.substr(0, id.length-2)).show('fast');
});
$(".trigger").click(function() {
	$(".menu").toggleClass("active"); 
});

window.sr = ScrollReveal({ reset: true});

$('#test').on('show', function(){
	console.log('funciona');
	sr.reveal('#test', {duration: 2000, origin:'right'});
});
