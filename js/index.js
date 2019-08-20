/*  用户添加 */
$(function()
{
	$(".lb-icon-zengjia-on").on("click",function()
	{
		$(this).hide(0);
		$(".lb-icon-zengjia-off").show(0);
		$(".lb-icon-zengjia-yonghu").show(300);
	});
	$(".lb-icon-zengjia-off").on("click",function()
	{
		$(this).hide(0);
		$(".lb-icon-zengjia-yonghu").hide(300);
		$(".lb-icon-zengjia-on").show(0);
	});
});
/*  用户展开 */
$(function()
{
	$(".lb-right-yonghu-xiugai").on("click",function()
	{
		$(this).hide(0);
		$(this).siblings(".lb-right-yonghu-xiugai-off").show(0);
		$(this).parent(".lb-right-yonghu-td").siblings(".yonghu-xiugai-none").slideDown(300);
	});
	$(".lb-right-yonghu-xiugai-off").on("click",function()
	{
		$(this).hide(0);
		$(this).siblings(".lb-right-yonghu-xiugai").show(0);
		$(this).parent(".lb-right-yonghu-td").siblings(".yonghu-xiugai-none").slideUp(300);
	});
});
/* 设备管理 */
$(function()
{
	$(".lb-shebei-top-left-a").on("click",function()
	{
		$(this).addClass("lb-shebei-a");
		$(this).siblings(".lb-shebei-top-left-a").removeClass("lb-shebei-a");
	});
});
//动画监听事件

function showTips(content) {
                $('.error-remind').css('display', 'block').html(content).addClass('twink');
                $('.error-remind').on("webkitAnimationEnd", function() { //动画结束时事件
                    $('.error-remind').removeClass('twink').css('display', 'none');
                }, false);
            }
/* 执行CSS  .error-remind{
        display: none;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;

        background: #fff;
        opacity: .7;
        filter: alpha(opacity=70);

        color: #000;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
    };
    .twink{
        -webkit-animation:twinkling 2s linear forwards;
    };
    @-webkit-keyframes twinkling {
        0%{
            opacity: .7;
        }
        100%{
            opacity: 0;
        }
    }
 */
 // 为A标签赋值	
$(function()
{  
    $(".lb-list-group a").each(function(){  

        $this = $(this);  

        if($this[0].href==String(window.location)){  

            $this.addClass("lb-list-group-no");  

        }  

    });  
});
$(function() 
{
	/*展开和关闭*/
	$(".developer_left_con_li").on("click",function()
	{
		if($(this).siblings(".developer_left_none").css("display")=='none')
		{
			
			$(this).siblings(".developer_left_none").slideDown(300);
			$(this).removeClass("developer_left_con_li_a");
			$(this).addClass("developer_left_con_li_b");
		}else
		{
			$(this).siblings(".developer_left_none").slideUp(300);
			$(this).removeClass("developer_left_con_li_b");
			$(this).addClass("developer_left_con_li_a");
		}
	})
});
//为A标签赋值	
$(function()
{  
	$(".developer_left_none a").each(function(){  

		$this = $(this);  
		
		if($this[0].href==String(window.location)){  

			$(this).parents(".developer_left_none").removeClass("developer_left_none_off");
		}  

	});  
}); 
//设备型号
$(function()
{
	$(".buttom_x1").on("click",function()
	{
		var xinghao1 = $(".cpbh1").val();
		var xinghao2 = $(".cpbh2").val();
		var xinghao3 = $(".cpbh3").val();
		if (xinghao1 == "")
		{
			$(".xinghao1").append("<div class='cp_jg'>产品编号不能为空！<div class='cp_jg_s'></div></div>");
			setTimeout("$('.cp_jg').remove()",2000);
			return false;
		}else if(xinghao2 == "")
		{
			$(".xinghao2").append("<div class='cp_jg'>产品型号不能为空！<div class='cp_jg_s'></div></div>");
			setTimeout("$('.cp_jg').remove()",2000);
		}else if(xinghao3 == "")
		{
			$(".xinghao3").append("<div class='cp_jg'>产品说明不能为空！<div class='cp_jg_s'></div></div>");
			setTimeout("$('.cp_jg').remove()",2000);
		}else
		{
			$(this).parents(".lb_xinghao_x1").hide();
			$(".lb_xinghao_x2").show();
		}
	})
	//自定义时间
	$(".danxuan1").on("click", function()
	{
		if($(this).is(':checked'))
		{
			$(".zdy1").show();
			$(".zdy2").hide();
		}
	});
	$(".danxuan2").on("click", function()
	{
		if($(this).is(':checked'))
		{
			$(".zdy2").show();
			$(".zdy1").hide();
		}
	});
	
	//添加传感器
	$(".lb_zengjia_button").on("click",function()
	{    	
		
		if($(".lb_zengjia_ay").length > 0)
		{
			if($(".lb_zengjia_ay").find(".lb_xuan").css("display") !="none")
			{
				$(".lb_xh_bj_2").hide();
				$(".lb_xh_bj_1").show();
				$(".lb_xuanze").hide();
				$(".lb_zengjia_ay").find(".lb_xuan").each(function()
				{
					if($(this).hasClass("lb_xuanze-zengjia"))
					{
						$(this).removeClass("lb_xuanze-zengjia");
					}
				})
			}
		}
		var shuliang = $(".shuliang").val();
		var geshu    = $(".lb_zengjia_ay").length;
		var name     = $(".s_name").val();
		if((/^(\+|-)?\d+$/.test( shuliang))&&shuliang>0)
		{  
			
			for(var i=1; i<=shuliang; i++)
			{
				var ab = $(".lb_zengjia_cy").clone().appendTo(".lb_zengjia_c");
				ab.addClass("lb_zengjia_ay");
				ab.removeClass("lb_zengjia_cy");
				var z_di = geshu + i;
				ab.find(".z_id").text(z_di);
				ab.find(".lb_xuan").addClass("lb_xuanze")
				if(name == "")
				{
					ab.find(".chuanganqi_name").val("传感器"+"-" + z_di);
				}else
				{
					ab.find(".chuanganqi_name").val(name +"-" + z_di);
				}
				caozuo();
				avast();
			}
		}else
		{  
			alert("数量中请输入正整数！");  
			$(".shuliang").val("1");   
			return false;  
		}
	})
	//编辑传感器
	$(".lb_xh_bj_1").on("click",function()
	{
		var geshu = $(".lb_zengjia_ay").length;
		if(geshu >= 1)
		{
			$(this).hide();
			$(".lb_xh_bj_2").show();
			$(".lb_xuanze").show(); 
		}else
		{
			alert("您还没有添加传感器!");
		}
	})
	//编辑完成
	$(".lb_xh_bj_2_w").on("click",function()
	{
		$(".lb_xh_bj_2").hide();
		$(".lb_xh_bj_1").show();
		$(".lb_xuanze").hide();
	})
	//全选
	$(".lb_xh_bj_2_q").on("click",function()
	{
		$(".lb_zengjia_c").find(".lb_xuanze").each(function()
		{
			if($(this).hasClass("lb_xuanze-zengjia"))
			{
				
			}else
			{
				$(this).addClass("lb_xuanze-zengjia");
			}
		})
	});
	//全不选
	$(".lb_xh_bj_2_b").on("click",function()
	{
		$(".lb_zengjia_c").find(".lb_xuanze").each(function()
		{
			if($(this).hasClass("lb_xuanze-zengjia"))
			{
				$(this).removeClass("lb_xuanze-zengjia");
				
			}else
			{
				
			}
		})
	});
	//反选
	$(".lb_xh_bj_2_f").on("click",function()
	{
		$(".lb_zengjia_c").find(".lb_xuanze").each(function()
		{
			if($(this).hasClass("lb_xuanze-zengjia"))
			{
				$(this).removeClass("lb_xuanze-zengjia");
			}else
			{
				$(this).addClass("lb_xuanze-zengjia");
			}
		})
	});
	//删除
	$(".lb_xh_bj_2_s").on("click",function()
	{
		var bh = $(".lb_zengjia_ay").find(".lb_xuanze");
		if(bh.hasClass("lb_xuanze-zengjia"))
		{
			var sensorIds =  $(".lb_xuanze-zengjia").parents(".lb_zengjia_ay").find("input[name='sensorId']");
			if(null!= sensorIds && sensorIds.length > 0){
			   var ids = "";
			   for(var i = 0;i<sensorIds.length;i++){
			     ids += $(sensorIds[i]).val()+",";
			   }
			   if("" != ids){
			      ids = $("#sensorIds").val() + ids;
			      $("#sensorIds").val(ids);
			   }
			}
			$(".lb_xuanze-zengjia").parents(".lb_zengjia_ay").remove();
			var delete_c =$(".lb_zengjia_ay").find(".lb_xuanze:not([class='lb_xuanze-zengjia'])").siblings(".z_id");
			delete_c.each(function(i)
			{
				$(this).text(i+1);
			})
			if(delete_c.length == 0)
			{
				$(".lb_xh_bj_2").hide();
				$(".lb_xh_bj_1").show();
				$(".lb_xuanze").hide();
			}
		}else
		{
			alert("未选中任何传感器！");
		}
	});
	
})
function caozuo()
{
	$(".lb_xuanze").unbind("click").click(function()
	{
		if($(this).hasClass("lb_xuanze-zengjia"))
		{
			$(this).removeClass("lb_xuanze-zengjia");
			
		}else
		{
			$(this).addClass("lb_xuanze-zengjia");
		}
	})
}
		