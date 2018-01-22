(function($) {
	$(document).ready(function() {
		$('#slogan').find(":not(.animate)").css("opacity", 0.3);
		$('#slogan').children(".animate")
			.each(function(i, ele) {
				$(ele).css("color", $(ele).attr("data-color"));
			})
			.hover(function() {
				$(this).stop().animate({
					color: $(this).attr("data-hover-color"),
					opacity: 1.0
				}, 500);
				$(this).siblings(".animate").stop().each(function(i, ele) {
					$(ele).animate({
						color: $(ele).attr("data-color"),
						opacity: 0.4
					}, 500);
				});
			}, function() {
				$("#slogan .animate").stop().each(function(i, ele) {
					$(ele).animate({
						color: $(ele).attr("data-color"),
						opacity: 1.0
					}, 500);
				});
			});

		$('#columns').children().css('opacity', 0.8).hover(function() {
			$(this).stop().fadeTo(500, 1);
			$(this).siblings().stop().fadeTo(500,0.4);
		}, function() {
			$(this).siblings().stop().fadeTo(500,0.8);
			$(this).stop().fadeTo(500,0.8);
		});
    $(document).bind("impress:stepleave", function (event) {
      var currentClass = document.body.attributes.getNamedItem('class').value.split(' ').find(e => e.match('impress-on'));
      var currentPage = currentClass.split('-')[currentClass.split('-').length-1];
      $('a[id^="header_item_"]').removeClass('active');
      $('#header_item_' + currentPage).addClass('active');
    });
    $(document).bind("impress:stepenter", function (event) {
      $('a[id^="header_item_"]').removeClass('active');
      $('#header_item_' + event.target.id).addClass('active');
    });
    $('a[id^="header_item_"]').click(function(e){
      $('a[id^="header_item_"]').removeClass('active');
      $(e.target).addClass('active');
    });
	});
})(jQuery);
