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

$(function(){
	$('[name="cart_form_phone"], [name="cart_form_phone_2"], [name="phone"]').mask("+7 (999) 999-9999")
})


// h1 click назад
$(function(){
	$('h1, .h1').on('click', function(){
		var href = './',
			width = $(window).width();

		if(width <= 480) location.href = href;
	});
});


//Переключалка кол-ва товаров в корзину
$(function(){
	$('.quantity').on('click','button', function(e){
		var self = $(this),
			input = self.siblings('input')[0],
			currentValue = +input.value;

		if (self.is('.quantity_plus')  ){
			input.value = currentValue + 1;
		} else if (currentValue == 1) {
			return false;
		} else {
			input.value = currentValue - 1;
		}
		return false;
	});
})




/*---Mobile Layout-----*/
$(function(){
	$('.m_menu-toggle').on('click', function(){
		$('.m_header').toggleClass('menu-opened')
	});

	$('.m_overlay').on('click', function(){
		$('.m_header').removeClass('menu-opened')
	});
});

window.onscroll = function(){
	$('.m_header').removeClass('menu-opened')
};


/*----CatMenu------*/
$(function(){
	var href = location.pathname;

	$('.big_cat_btn').on('click', function(){
		$(this).toggleClass('active');
	});

	$('body').on('click', function(e){
		var div = $(".cat_menu_wrap"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.find('.big_cat_btn').removeClass('active')
		}
	});

	if(href == '/') $('.big_cat_btn').addClass('main_active')
	
})
