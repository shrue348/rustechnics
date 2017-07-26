

//Рейтинги-звезды
$(function(){
	$('input.rating_star').rating({readOnly: true});
	$('input.input_rating_star').rating({required: true});
	$('input.item_rating_star').rating({readOnly: true, split: 2});
});


$(function(){
	$('.carouseller').carouseller()
})