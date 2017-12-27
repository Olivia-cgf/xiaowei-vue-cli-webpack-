window.onload=function(){
            //选择相应的对象
            var wrap=document.querySelector(".wrap");

            //轮播区域的宽度
            var containerW=1100;
            //设置轮播数量的页数
            var num=5;

            //选择相应的切换按钮
           /* var prev=document.querySelector(".arrow_left");
            var next=document.querySelector(".arrow_right");*/

            //设置当前index的样式
            var index=0;
            var dots=document.getElementsByTagName("span");

            function showCurrentDot(){
                for(var i=0,len=dots.length;i<len;i++){
                    dots[i].className="";
                }
                dots[index].className="on";
            }

          /*  next.onclick=function(){
                next_pic();
            }
            prev.onclick=function(){
                prev_pic();
            }*/
            function next_pic(){
                var newLeft;
                if(wrap.style.marginLeft===(-num*containerW+"px")){
                    newLeft=-containerW;
                }else{
                    newLeft=parseInt(wrap.style.marginLeft)-containerW;
                }
                wrap.style.marginLeft=newLeft+'px';


            }
            function prev_pic(){
                var newLeft;
                if(wrap.style.marginLeft==='0px'){
                    newLeft=-containerW*(num-1);
                }else{
                    newLeft=parseInt(wrap.style.marginLeft)+containerW;
                }
                wrap.style.marginLeft=newLeft+'px';
            }
        } 