$(function(){
	$('.topic_item .storage').toggle(function(){
		$(this).find('i').css('background-position','0px -1073px');
		$(this).css('color','#ff6c00');
	},function(){
		$(this).find('i').css('background-position','0px -336px');
		$(this).css('color','#888888');
	})
	
	
	$('.topic_item .download').toggle(function(){
		$(this).find('i').css('background-position','0px -1106px');
		$(this).css('color','#ff6c00');
		$(this).children('span').html(1+parseInt($(this).children('span').html()));
	},function(){
		$(this).find('i').css('background-position','0px -528px');
		$(this).css('color','#888888');
	});

})