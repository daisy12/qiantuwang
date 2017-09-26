$(function(){
	$('.vip_center').on('mouseover',function(){
		$('.message_box').css('display','block');
	});
	$('.vip_center').on('mouseout',function(){
		$('.message_box').css('display','none');
	});


	/*子菜单*/
	$('.nav-list:nth-of-type(2)').on('mouseover',function(){
		$(this).find('.down_box_1').css('display','block');
	});
	$('.nav-list:nth-of-type(2)').on('mouseout',function(){
		$(this).find('.down_box_1').css('display','none');
	})
	
	/*子分菜单*/
	$('.list').on('mouseover',function(){
		$(this).find('.list_sec').css('display','block');
		$(this).find('.list_item').css('color','#10c55b');
		var i=$(this).index()-1;
		var y=-145-i*30;
		//更改背景
		$(this).find('i').css('background',"url('images/common.png') no-repeat -186px "+y+"px");
	});
	$('.list').on('mouseout',function(){
		$(this).find('.list_sec').css('display','none');
		$(this).find('.list_item').css('color','#000');
		var i=$(this).index()-1;
		console.log(i);
		var y=-145-i*30;
		console.log(y);
		$(this).find('i').css('background',"url('images/common.png') no-repeat -217px "+y+"px");
	})


	$('.list_sec').on('mouseover',function(){
		$(this).css('display','block');
	});

	/*设计创意*/
	$('.nav-list:nth-of-type(3)').on('mouseover',function(){
		$(this).find('.list_box_1').css('display','block');

	});
	$('.nav-list:nth-of-type(3)').on('mouseout',function(){
		$(this).find('.list_box_1').css('display','none');
	});

	$('.down_box_2 a').on('mouseover',function(){
		var i=$(this).index();
		var y=-145-i*30;
		$(this).find('i').css('background',"url('images/common.png') no-repeat -186px "+y+"px");
	});
	$('.down_box_2 a').on('mouseout',function(){
		var i=$(this).index();
		var y=-145-i*30;
		$(this).find('i').css('background',"url('images/common.png') no-repeat -217px "+y+"px");
	});

	/*办公创意*/
	$('.nav-list:nth-of-type(4)').on('mouseover',function(){
		$(this).find('.list_box_2').css('display','block');
	});
	$('.nav-list:nth-of-type(4)').on('mouseout',function(){
		$(this).find('.list_box_2').css('display','none');
	})
	
	$('.nav-list:nth-of-type(5)').on('mouseover',function(){
		$(this).find('.down_box_3').css('display','block');
	});
	$('.nav-list:nth-of-type(5)').on('mouseout',function(){
		$(this).find('.down_box_3').css('display','none');
	});


	//选择搜索类型
	$('.search_type span').on('click',function(){
		$(this).parent().prev('.type_box').find('span').text($(this).text());
		$(this).parent().children().css('display','block');
		$(this).css('display','none');
	});

	$('.type_box').toggle(function(){
		$('.search_type').css('display','block');
	},function(){
		$('.search_type').css('display','none');
	});

	$('.search_input input').on('focus',function(){
		$('.search_tig').css('display','block');
		$('.search').css('border','1px solid #10c55b');
		$('.search_type').css('display','none');

		/*对于VIP页面*/
		if($('.vip_search_box')){
			$('.vip_search_box').find('.nav-list').eq(1).siblings('.nav-list').css('display','none');
			$('.vip_search_box .vip_search').animate({'width':'600px'});
			$('.vip_search_box .search_input input').animate({'width':'470px'});
		}

	});

	var flag=1;//鼠标在消息提示框上面，此时flag=1,失去焦点不隐藏
	$('.search_input input').on('blur',function(){
		if(flag==1){
			$('.search_tig').css('display','block');
			//$('.vip_search_box .vip_search').css('width','600px');
			//$('.vip_search_box .search_input input').css('width','470px');
			
		}else{
			$('.search_tig').css('display','none');
			/*对于VIP页面*/
			if($('.vip_search_box')){
				$('.vip_search_box .vip_search').animate({'width':'280px'});
				$('.vip_search_box .search_input input').animate({'width':'150px'});
				setTimeout(function(){
					$('.vip_search_box').find('.nav-list').fadeIn(400);//当没有搜索时，才会缩小
				},500)
			}
		}
		$('.search').css('border','1px solid #ccc');

		
	});

	/*----------------实现获取提示信息-------------*/
	//这里实现的原理：当鼠标在信息提示框上面时，将标志赋值为1，此时失去焦点是不会信息提示框是不会消失的，
	//当鼠标点击信息框相应的信息之后，再将其隐藏。
	$('.search_tig').hover(function(event) {
		$(this).css('display','block');
		flag=1;
	},function(){
		flag=0;
		//$('.vip_search_box .vip_search').css('width','600px');
		//$('.vip_search_box .search_input input').css('width','470px');
	});
	$('.search_tig .tig_item').click(function(){
		//$('.vip_search_box .vip_search').css('width','600px');
		//$('.vip_search_box .search_input input').css('width','470px');
		$('.search_input input').val($(this).children('span').eq(1).text());
		$('.search_input input').css('color','#555555');
		$('.search_tig').css('display','none');

		// var ele=document.createElement('a');
		// ele.text($(this).children('span').eq(1).text());
		var ele='<a style="cursor:pointer;">'+$(this).children('span').eq(1).text()+'</a>';
		$('.search_tig .recent').append(ele);
	})


	//轮播图
	$('.banner').hover(function(){
		$('.btn_l').css('display','block');
		$('.btn_r').css('display','block');
	},function(){
		$('.btn_l').css('display','none');
		$('.btn_r').css('display','none');
	});

	var time=0;
	var id=1;
	function change(){
		time=setInterval(function(){
			id++;
			if(id>8){
				id=1;
			}
			$('.banner_dotted li').removeClass('active');
			$('.banner_box img').attr('src','images/banner'+id+'.jpg');
			$('.banner_dotted li:nth-of-type('+id+')').addClass('active');

			$('.banner_dotted li').on('click',function(){
				clearInterval(time);
				id=$(this).index()+1;
				console.log(id);

				$('.banner_dotted li').removeClass('active');
				$('.banner_box img').attr('src','images/banner'+id+'.jpg');
				$(this).addClass('active');

				change();
			})
		},5000);
	}
	change();

	$('.btn_r').on('click',function(){
		clearInterval(time);
		id++;
		if(id>8){
			id=1;
		}
		$('.banner_dotted li').removeClass('active');
		$('.banner_box img').attr('src','images/banner'+id+'.jpg');
		$('.banner_dotted li:nth-of-type('+id+')').addClass('active');
		change();
	});
	$('.btn_l').on('click',function(){
		clearInterval(time);
		id--;
		if(id<1){
			id=8;
		}
		$('.banner_dotted li').removeClass('active');
		$('.banner_box img').attr('src','images/banner'+id+'.jpg');
		$('.banner_dotted li:nth-of-type('+id+')').addClass('active');
		change();
	});

	$('.classify').on('mouseover',function(){
		$(this).find('.down_box_1').css('display','block');
	});
	$('.classify').on('mouseout',function(){
		$(this).find('.down_box_1').css('display','none');
	});

	/*固定导航的控制*/
	var scroll_time=setInterval(function(){
		var sh=$(document).scrollTop();
		if(sh>100){
			$('.classify_box').css('display','block');
		}
		if(sh<50){
			$('.classify_box').css('display','none');
		}
	},50);


	/*精选专题*/
	$('.topics_item').hover(function(){
		$(this).find('.topics_des').stop().fadeIn(500);
		$(this).find('p').stop().animate({'top':'24%'});
	},function(){
		$(this).find('.topics_des').stop().fadeOut(500);
		$(this).find('p').stop().animate({'top':'100%'});
	})


	/*商业海报*/
	$('.template_item').hover(function(){
		$(this).children('.template_des').stop().fadeIn(500);
		$(this).find('.des_box').stop().animate({'top':'0'},200);
	},function(){
		$(this).children('.template_des').stop().fadeOut(500);
		$(this).find('.des_box').stop().animate({'top':'-80px'},200);
	});

	/*电商海报*/
	$('.business_item').hover(function(){
		$(this).children('.template_des').stop().fadeIn(500);
		$(this).find('.des_box').stop().animate({'top':'0'},200);
	},function(){
		$(this).children('.template_des').stop().fadeOut(500);
		$(this).find('.des_box').stop().animate({'top':'-80px'},200);
	});


	// $('.template_box').on('mouseenter',function(){
	// 	if($(this).css('left').substr(0,1)==0){
	// 		$('.template_btn_r').removeClass('current');
	// 	}else{
	// 		$('.template_btn_l').removeClass('current');
	// 	}
	// })
	

	// $('.template_btn_r').on('mouseenter',function(){
	// 	$(this).removeClass('current');
	// })
	// $('.template_btn_l').on('mouseenter',function(){
	// 	$(this).removeClass('current');
	// })

	
	// $('.template_btn_r').on('click',function(){
	// 	$(this).addClass('current')
	// 	$('.template_btn_l').toggleClass('current');
	// 	if($(this).parent().find('.business_box')){
			
	// 		$(this).parent().find('.template_box').animate({'left':'-1210px'},500);
	// 	}else{
	// 		// $(this).css('display','none!important');
	// 		$(this).parent().find('.template_box').animate({'left':'-900px'},500);
	// 	}
	// 	return false;
	// });
	// $('.template_btn_l').on('click',function(){
	// 	$(this).toggleClass('current')
	// 	$('.template_btn_r').removeClass('current');
	// 	console.log('haha')
	// 	$(this).parent().find('.template_box').animate({'left':'0px'},500);
	// 	return false;
	// });
	// $('.template_box').on('mouseleave',function(){
	// 	console.log('111')
	// 	$('.template_btn_r').addClass('current')
	// 	$('.template_btn_l').addClass('current')
	// });
	
	$('.wrap1').on('mouseenter',function(){
		//console.log('111')
		if($(this).children().children('.template_box').css('left').substr(0,1)==0){
			$(this).children('.template_btn_r').show();
		}else{
			$(this).children('.template_btn_l').show();
		}
	})
	

	// $('.template_btn_r').on('mouseenter',function(){
	// 	$(this).show();
	// })
	// $('.template_btn_l').on('mouseenter',function(){
	// 	$(this).show();
	// })

	
	$('.template_btn_r').on('click',function(){
		console.log(1);
		$(this).hide()
		$(this).siblings('.template_btn_l').show();
		if($(this).parent().find('.business_box')){
			
			$(this).parent().find('.template_box').animate({'left':'-1210px'},500);
		}else{
			// $(this).css('display','none!important');
			$(this).parent().find('.template_box').animate({'left':'-900px'},500);
		}
		
	});
	$('.template_btn_l').on('click',function(){
		console.log(2);
		$(this).hide()
		$(this).siblings('.template_btn_r').show();
		// console.log('haha')
		$(this).parent().find('.template_box').animate({'left':'0px'},500);
		
	});
	$('.wrap1').on('mouseleave',function(){
		console.log('111')
		$('.template_btn_r').hide()
		$('.template_btn_l').hide()
	});



	/*底部轮播图*/
	$('.personnel_wrap').mouseover(function(){
		$('.personnel_l').css('display','block');
		$('.personnel_r').css('display','block');
	})
	$('.personnel_box').mouseout(function(){
		$('.personnel_l').css('display','none');
		$('.personnel_r').css('display','none');
	})
	$('.personnel_l').click(function(){
		$('.personnel').animate({'left':'0px'});
	})
	$('.personnel_r').click(function(){
		$('.personnel').animate({'left':'-1186px'});
	});


	/*商标轮播*/
	$('.footer_brand').hover(function(){
		$('.brand_l').css('display','block');
		$('.brand_r').css('display','block');
	},function(){
		$('.brand_l').css('display','none');
		$('.brand_r').css('display','none');
	});
	$('.brand_r').on('click',function(){
		$('.brand_box ul').animate({'left':'-1190px'});
	})
	$('.brand_l').on('click',function(){
		$('.brand_box ul').animate({'left':'0px'});
	})
	/*注意：这里直接在brand_box设置绝对定位，由于overflow:hidden，
	所以是无法见到超出的部分
	解决方法：外加一样大的包围圈footer_wrap,在该div是可以显示超出的部分*/

	/*新闻（实现无缝轮播）*/
	var newsNum=0;
	var timer;
	function news_change(){
		timer=setInterval(function(){
			newsNum++;
			if(newsNum>6){
				newsNum=0;
				$('.news_box ul').css('top','0px');
				newsNum=1;
			}
			$('.news_box ul').animate({'top':-40*newsNum+'px'});
		},3000);
	}
	news_change();


	$('.news_box').hover(function(){
		clearInterval(timer);
	},function(){
		news_change();
	});
	$('.news_top').on('click',function(){
		clearInterval(timer);
		newsNum--;
		if(newsNum<0){
			newsNum=6;
			$('.news_box ul').css('top',-40*newsNum+'px');
			newsNum=5;
		}
		$('.news_box ul').animate({'top':-40*newsNum+'px'});
		news_change();
	})
	$('.news_bottom').on('click',function(){
		clearInterval(timer);
		newsNum++;
		if(newsNum>6){
			newsNum=0;
			$('.news_box ul').css('top','0px');
			newsNum=1;
		}
		$('.news_box ul').animate({'top':-40*newsNum+'px'});
		news_change();
	});


	/*为你推荐*/
	$('.recommend_link').toggle(function() {
		$('.recommend_icon').css('background','url(images/common.png) -221px -30px');
		$('.recommend_nav').css('display','block');
	}, function() {
		 $('.recommend_icon').css('background','url(images/common.png) -126px -28px');
		 $('.recommend_nav').css('display','none');
		 $('.recommend_subnav').css('display','none');
	});

	$('.recommend_item').mouseenter(function(){
		$(this).find('a').css('color','#000');
		$(this).siblings().find('a').css('color','#999');
		var id=$(this).index();
		$('.recommend_subnav').eq(id).css('display','block').siblings().css('display','none');
	});
	// $('.recommend_subnav').hover
	

	/*底部版权*/
	$('.weixin_icon').hover(function(){
		$('.wx_des').stop().fadeIn(500);
	},function(){
		$('.wx_des').stop().fadeOut(500);
	})
	$('.xina_icon').hover(function(){
		$('.xn_des').stop().fadeIn(500);
	},function(){
		$('.xn_des').stop().fadeOut(500);
	})

	$('.nav_item').hover(function(){
		$(this).find('.nav_item_des').css('display','block');
		if($(this).find('.person')){
			$(this).find('.person').css('display','block');
		}
	},function(){
		$(this).find('.nav_item_des').css('display','none');
		if($(this).find('.person')){
			$(this).find('.person').css('display','none');
		}
	});
	$('.left_nav_wx').hover(function(){
		$(this).find('div').css('display','block');
	},function(){
		$(this).find('div').css('display','none');
	})
	$('.return').hover(function(){
		$(this).find('div').css('display','block');
	},function(){
		$(this).find('div').css('display','none');
	});

	$('.return').on('click',function(){
		$(document).scrollTop(0);
	})

	var scroll_time1=setInterval(function(){
		var sh1=$(document).scrollTop();
		if(sh1>150){
			$('.left_nav').css('display','block');
		}
		else{
			$('.left_nav').css('display','none');
		}
	},50);




	/*---------------商品页面------------------*/
	//思路：首先获取祖辈元素所在的索引值，然后将整个数据存储在对应的数组中，最后根据父元素所在
	//的位置，以及当前元素li所在的索引值，取出对应的数据。
	var arr=new Array();
	for(var k=0;k<4;k++){
		arr[k]=new Array();
	}
	
	var maxwidth=5;
	$('.product_item .item_msg').each(function(){
		//console.log($(this).parent('li').parent('ul').attr(id));
		var i=$(this).parent().parent().attr('id'); 

		arr[i].push($(this).text());
		if($(this).text().length>maxwidth){
			var str=$(this).text().substr(0,maxwidth)+'...';
			$(this).text(str);
		}
	});
	//console.log(arr);

	$('.product_item .item').hover(function(){
		// var maxwidth=5;
		// $(this).siblings('item').each(function(){
		// 	arr.push($(this).text());
		// 	if($(this).text().length>maxwidth){
		// 		var str=$(this).text().substr(0,maxwidth)+'...';
		// 		$(this).text(str);
		// 	}
		// });
		var i=$(this).parent().index();

		var id=$(this).index();
		//console.log(id);
		$(this).children('.template_des').stop().fadeIn(500);
		$(this).find('.des_box').stop().animate({'top':'0'},200);
		$(this).find('.shade').css('display','none');
		$(this).children('.item_msg').text(arr[i][id]);

	},function(){
		$(this).children('.template_des').stop().fadeOut(500);
		$(this).find('.des_box').stop().animate({'top':'-80px'},200);
		$(this).find('.shade').css('display','block');
		var maxwidth=5;
		if($(this).children('.item_msg').text().length>maxwidth){
			var str=$(this).children('.item_msg').text().substr(0,maxwidth)+'...';
			$(this).children('.item_msg').text(str);
		}
		
	});

	$('.current_position a').click(function(){
		$(this).parent().text('全部');
	});



	/*登录*/
	$('.header .login').click(function(){
		$('.shade_input').css('display','block');
	})
	$('.classify_box .login').click(function(){
		$('.shade_input').css('display','block');
	})
})