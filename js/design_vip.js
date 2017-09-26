$(function(){
	var color=['#12ce5f','#fd8c25','#ff430f'];
	var pos=['0px -372px','0px -406px','0px -476px'];
	var pos_active=['0px -335px','0px -335px','0px -440px'];
 
	$('.select_vip_box li').click(function(){
		$('.select_vip_box li').children('.rec').css('display','block');

		$(this).css('color','#fff').siblings().css('color','#666666');
		var id=$(this).index();
		$(this).css('background-color',color[id]).siblings().css('background-color','#fff');
		$(this).css('border-color',color[id]).siblings().css('border-color','#ccc');
		$(this).children('i').css('background-position',pos_active[id]);
		$(this).children('.checked').show();
		$(this).siblings().children('.checked').hide();
		for(var i=0;i<3;i++){
			if(i==id){
				continue;
			}
			$('.select_vip_box li').eq(i).children('i').css('background-position',pos[i]);
		}
		if(id==2){
			$(this).children('.rec').css('display','none');
		}

		/*显示对应的会员价格*/
		$('.vip_item').eq(id).addClass('active').siblings().removeClass('active');

	});

	$('.select_viptype .item_1 li').click(function(){
		$(this).css({
			'border-color':color[0],
			'color':color[0]
		}).siblings().css({
			'border-color':'#ccc',
			'color':'#666666'
		});
		$(this).children('.checked').show();
		$(this).siblings().children('.checked').hide();
	})

	$('.select_viptype .item_2 li').click(function(){
		var x=$(this).index();
		$(this).css({
			'border-color':color[1],
			'color':color[1]
		}).siblings().css({
			'border-color':'#ccc',
			'color':'#666666'
		});
		$(this).children('.checked').show();
		$(this).siblings().children('.checked').hide();
	})

	$('.select_viptype .item_3 li').click(function(){
		var x=$(this).index();
		$(this).css({
			'border-color':color[2],
			'color':color[2]
		}).siblings().css({
			'border-color':'#ccc',
			'color':'#666666'
		});
		$(this).children('.checked').show();
		$(this).siblings().children('.checked').hide();
	});


	/*会员详情*/
	$('.select_vip_box li').click(function(){
		var id=$(this).index();
		//alert(id);
		$('.vip_introduce').removeClass('current');
		$('.introduce').eq(id).find('.vip_introduce').eq(0).addClass('current');
		var pay=$('.vip_item').eq(id).children('li').eq(0).find('b').text();
		$('.pay .money').text(pay);
	});
	$('.vip_item li').click(function(){
		$('.vip_introduce').removeClass('current');
		var id=$(this).index();
		$(this).parent().next().children('.vip_introduce').eq(id).addClass('current');
	
		/*获取价格*/
		$('.pay .money').text($(this).children('b').text());
	});


	/*点击登录*/
	$('.pay_center .wx_pay a').eq(0).click(function(){
		$('.shade_input').show();
	})
	$('.pay_center .z_pay a').eq(0).click(function(){
		$('.shade_input').show();
	});
	$('.con_wrap .tig a').click(function(){
		$('.shade_input').show();
	})
	$('.input_box .close').on('click',function(){
		$(this).parent().parent().hide();
	});

	$('.pay_nav').toggle(function(){
		$(this).children('.pay_nav_des').show();
	},function(){
		$(this).children('.pay_nav_des').hide();
	})
})
