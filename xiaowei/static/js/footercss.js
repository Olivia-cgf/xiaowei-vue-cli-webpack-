 window.onload=function(){
           alert(0);
            var aside=document.querySelector(".aside");
            var container=document.querySelector(".container");
            var footer=document.querySelector(".footer");
            //获取到container的高度
            var containerH=container.offsetHeight;
            var clientH=document.documentElement.clientHeight;
            console.log(containerH);
            console.log(clientH);
            //如果窗口的高度小于内容的高度
            if(clientH<containerH){
               console.log(0);
               footer.style.display="none";
               aside.style.height="100%";
               window.onscroll=function(){
                //鼠标滚动的高度
                var scrollT=document.body.scrollTop;
                console.log(scrollT);
                if((scrollT+clientH)<containerH){
                   footer.style.display="none";
                   aside.style.height="100%";
                }else {
                    footer.style.display="block";
                    aside.style.height="80%";
                }
               }
            }else{//如果窗口的高度大于内容的高度
                console.log(1);
                footer.style="display:block";
                aside.style="height: 100%";
            }
        }