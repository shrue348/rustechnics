//Рейтинги-звезды
$(function(){
	$('input.rating_star').rating({readOnly: true});
	$('input.input_rating_star').rating({required: true});
	$('input.item_rating_star').rating({readOnly: true, split: 2});
});


$(function(){
	$('.carouseller').each(function(){
		$(this).carouseller({
			interval: false
		});
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
	$('.j-card_vert_car').jCarouselLite({
		btnNext: ".card_vert_car__next",
		btnPrev: ".card_vert_car__prev",
		vertical: true
	});
})

$(function(){
	$('[name="cart_form_phone"], [name="cart_form_phone_2"], [name="phone"], [name="modal_form_phone"]').mask("+7 (999) 999-9999")
})


// Открывание фильтра на мобиле
$(function(){
	$('.cat_filter__toggle').on('click', function(){
		$('.cat_filter').slideToggle()
	});
})


// h1 click назад
$(function(){
	$('h1').on('click', function(){
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


$(function(){
	$('.undertop_wrap__m_left_btn').on('click', function(){
		$('.m_left_menu__list').toggleClass('active')
	});

	$('body').on('click', function(e){
		var div = $(".undertop_wrap__m_left"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.find('.m_left_menu__list').removeClass('active')
		}
	});
});



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



/*-----Filter-----------*/
$(function(){
	$('.cat_filter_block .slider-range').each(function(i,obj) {
		var params = [];
		params['prop_id'] = $(obj).attr('data-propid');
		params['gt'] = $(obj).attr('data-gt');
		params['lt'] = $(obj).attr('data-lt');
		params['min'] = $(obj).attr('data-min');
		params['max'] = $(obj).attr('data-max');
		params['helper_min'] = $(obj).attr('data-helper-min');
		params['helper_max'] = $(obj).attr('data-helper-max');
		params['precision'] = $(obj).attr('data-precision') || 0;
		
		if (params['gt']==='') params['gt'] = params['min'];
		if (params['lt']==='') params['lt'] = params['max'];
		
		for (key in params) if (key != 'prop_id') params[key]*=1;
		
		// Интервал существующих значений (helper)
		slider_width = $(obj).width();
		helper_width = (params['helper_max']-params['helper_min'])/(params['max']-params['min'])*100;
		if (params['helper_min'] && !helper_width) helper_width = 1;
		
		var helper_start = (params['helper_min']-params['min'])/(params['max']-params['min'])*100;
		
		slider_helper = $('<div>').addClass('slider-helper').insertAfter(obj);
		slider_helper.css({
			width: helper_width+'%',
			left: helper_start+'%'
		});
		
		// Числовые метки над слайдером
		$('.cat_filter_block  #slider_'+params['prop_id']+'_label_min').html(params['min'].toFixed(params['precision']));
		$('.cat_filter_block  #slider_'+params['prop_id']+'_label_max').html(params['max'].toFixed(params['precision']));
		avg = params['min']+(params['max']-params['min'])/2;
		$('.cat_filter_block  #slider_'+params['prop_id']+'_label_avg').html(avg.toFixed(params['precision']));
		
		//console.log(params);
		
		// Инициализация jquery-ui слайдера
		$(obj).slider({
			range: true, min: params['min'], max: params['max'], values: [params['gt'],params['lt']],
			step: Math.pow(10,-params['precision']),
			slide: function(prop_id,event,ui) {
				$('.cat_filter_block  #slider_'+prop_id+'_gt').val(ui.values[0]==params.min ? '' : ui.values[0]);
				$('.cat_filter_block  #slider_'+prop_id+'_lt').val(ui.values[1]==params.max ? '' : ui.values[1]);
			}.bind(this,params['prop_id']),
			change: function() {
				// апдейтим данные
			}
		});
		// Обратная связь инпутов со слайдером
		$('.cat_filter_block  #slider_'+params['prop_id']+'_gt').on('change',function() {
			val = $(this).val();
			if (!val.match(/^\d*$/))
				$(this).addClass('incorrect_value');
			else {
				$(this).removeClass('incorrect_value');
				$(obj).slider('values', 0, $(this).val());
			}
		});
		$('.cat_filter_block  #slider_'+params['prop_id']+'_lt').on('change',function() {
			val = $(this).val();
			if (!val.match(/^\d*$/))
				$(this).addClass('incorrect_value');
			else {
				$(this).removeClass('incorrect_value');
				$(obj).slider('values', 1, $(this).val());
			}
		});
	});
})

	
/*-----Backtotop-----*/
$(function(){
	$('#backToTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
})



$(function() { // стилизованные инпут-файл
	$('input[type=file]').each(function() {
		var $input = $(this),
			$label = $input.next('.js-labelFile'),
			labelVal = $label.html();

		$input.hide();
		$input.on('change', function(element) {
			var fileName = '';
			if (element.target.value) fileName = element.target.value.split('\\').pop();
			fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
		});
	});
});





$(function(){ // модалки в доставке

	$('.del-call-modal-how').on('click', function(){
		var data = $(this).siblings('.del_list_item__how')

		$('#modal_del .modal-content').empty();
		data.clone().appendTo('#modal_del .modal-content');
		$('#modal_del').modal('show')
	});

	$('.del-call-modal-scheme').on('click', function(){
		var data = $(this).attr('data-img'),
			img = '<img src="' + data +'" />'

		$('#modal_del .modal-content').html(img);
		$('#modal_del').modal('show')
	});

});










