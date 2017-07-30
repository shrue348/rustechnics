

//Рейтинги-звезды
$(function(){
	$('input.rating_star').rating({readOnly: true});
	$('input.input_rating_star').rating({required: true});
	$('input.item_rating_star').rating({readOnly: true, split: 2});
});


$(function(){
	$('.carouseller').each(function(){
		$(this).carouseller();
	})
	$('#index_slider').carousel();
})

$(function(){
	$("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 850);
        return false;
    });
});

$(function(){
	$('.slideshow.vertical').cycle()

})