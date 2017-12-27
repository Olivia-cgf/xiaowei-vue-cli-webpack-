function ZoomPic ()
{
    this.initialize.apply(this, arguments)  
}
ZoomPic.prototype = 
{
    initialize : function (id)
    {
        var _this = this;
        this.wrap = typeof id === "string" ? document.getElementById(id) : id; // 简化id代码
        this.oUl = this.wrap.getElementsByTagName("ul")[0]; // 获取到轮播图片的div
        this.aLi = this.wrap.getElementsByTagName("li"); // 获取到轮播图片的div
        this.prev = this.wrap.getElementsByTagName("pre")[0]; // 获取到左点击图片的div
        this.next = this.wrap.getElementsByTagName("pre")[1]; // 获取到右点击图片的div
        this.timer = null; //定时器
        this.aSort = []; //定义数组
        this.iCenter = 2; //定义中间显示的图片索引值
        this._doPrev = function () {return _this.doPrev.apply(_this)}; // 定义向上一个切换的函数
        this._doNext = function () {return _this.doNext.apply(_this)}; // 定义向下一个切换的函数
        this.options = [ //定义数组的坐标及样式
            {width:288, height:380,top:60, left:230, zIndex:1},
            {width:335, height:440,top:30, left:0, zIndex:2},
            {width:380, height:500,top:0, left:200, zIndex:3},
            {width:335, height:440,top:30, left:460, zIndex:2},
            {width:288, height:380,top:60, left:230, zIndex:1}
        ];
/*        this.options = [ //定义数组的坐标及样式
            {"transform": "scale(0.6)", top:60, left:230, zIndex:1},
            {"transform":'scale(0.8)', top:30, left:0, zIndex:2},
            {"transform":'scale(0.9)', top:0, left:200, zIndex:3},
            {"transform":'scale(0.8)', top:30, left:400, zIndex:2},
            {"transform":'scale(0.6)', top:60, left:230, zIndex:1}
        ];*/
        for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i]; // 循环定义，存放要轮播的li
        this.aSort.unshift(this.aSort.pop()); // 方法可向数组的开头添加一个或更多元素,并返回新的长度
        this.setUp(); // 启动函数
        this.addEvent(this.prev, "click", this._doPrev); //添加事件
        this.addEvent(this.next, "click", this._doNext); //添加事件
        this.doImgClick(); //图片点击调用函数
        this.timer = setInterval(function ()
        {
            _this.doNext() // 定时切换向下一个图片进行切换
        }, 5000);
        this.wrap.onmouseover = function ()
        {
            clearInterval(_this.timer) // 当鼠标滑过这个盒子的时候，清除定时器
        };
        this.wrap.onmouseout = function ()
        {
            _this.timer = setInterval(function ()
            {
                _this.doNext()  // 当鼠标滑过这个盒子的时候，开启定时器
            }, 3000);
        }
    },
    doPrev : function () // 方法可以删除数组末尾的元素.向数组的开头添加一个或更多元素,并返回新的长度
    {
        this.aSort.unshift(this.aSort.pop());
        this.setUp()
    },
    doNext : function () // 方法可向数组删除第一个元素,和数组的末尾添加一个或更多元素并返回新的长度
    {
        this.aSort.push(this.aSort.shift());
        this.setUp()
    },
    doImgClick : function () // 点击图片跳转到正中间
    {
        var _this = this; //_定义私有方法
        for (var i = 0; i < this.aSort.length; i++)
        { // 循环遍历
            this.aSort[i].onclick = function ()
            {
                if (this.index > _this.iCenter) 
                { // 图片的索引值判断进行调整图片顺序
                    for (var i = 0; i < this.index - _this.iCenter; i++) _this.aSort.push(_this.aSort.shift());
                    _this.setUp()
                }
                else if(this.index < _this.iCenter)
                {
                    for (var i = 0; i < _this.iCenter - this.index; i++) _this.aSort.unshift(_this.aSort.pop());
                    _this.setUp()
                }
            }
        }
    },
    setUp : function ()
    { // 重新启动函数
        var _this = this;
        var i = 0;
        for (i = 0; i < this.aSort.length; i++) this.oUl.appendChild(this.aSort[i]);
        for (i = 0; i < this.aSort.length; i++)
        {
            this.aSort[i].index = i;
            if (i < 7)
            {
                this.css(this.aSort[i], "display", "block");
                this.doMove(this.aSort[i], this.options[i], function ()
                {
                    _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
                    {
                        _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
                        {
                            _this.aSort[_this.iCenter].onmouseover = function ()
                            {
                                _this.doMove(this.getElementsByTagName("div")[0], {bottom:0})
                            };
                            _this.aSort[_this.iCenter].onmouseout = function ()
                            {
                                _this.doMove(this.getElementsByTagName("div")[0], {bottom:-100})
                            }
                        })
                    })
                });
            }
            else
            {
                this.css(this.aSort[i], "display", "none");
                this.css(this.aSort[i], "width", 0);
                this.css(this.aSort[i], "height", 0);
                this.css(this.aSort[i], "top", 37);
                this.css(this.aSort[i], "left", this.oUl.offsetWidth / 2)
            }
            if (i < this.iCenter || i > this.iCenter)
            {
                this.css(this.aSort[i].getElementsByTagName("img")[0], "opacity", 60)
                this.aSort[i].onmouseover = function ()
                {
                    _this.doMove(this.getElementsByTagName("img")[0], {opacity:100})
                };
                this.aSort[i].onmouseout = function ()
                {
                    _this.doMove(this.getElementsByTagName("img")[0], {opacity:65})
                };
                this.aSort[i].onmouseout();
            }
            else
            {
                this.aSort[i].onmouseover = this.aSort[i].onmouseout = null
            }
        }
    },
    addEvent : function (oElement, sEventType, fnHandler)
    {
        return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
    },
    css : function (oElement, attr, value)
    {
        if (arguments.length == 2)
        {
            return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
        }
        else if (arguments.length == 3)
        {
            switch (attr)
            {
                case "width":
                case "height":
                case "top":
                case "left":
                case "bottom":
                    oElement.style[attr] = value + "px";
                    break;
                case "opacity" :
                    oElement.style.filter = "alpha(opacity=" + value + ")";
                    oElement.style.opacity = value / 100;
                    break;
                default :
                    oElement.style[attr] = value;
                    break
            }   
        }
    },
    doMove : function (oElement, oAttr, fnCallBack)
    {
        var _this = this;
        clearInterval(oElement.timer);
        oElement.timer = setInterval(function ()
        {
            var bStop = true;
            for (var property in oAttr)
            {
                var iCur = parseFloat(_this.css(oElement, property));
                property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100)); // 透明图
                var iSpeed = (oAttr[property] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                
                if (iCur != oAttr[property])
                {
                    bStop = false;
                    _this.css(oElement, property, iCur + iSpeed)
                }
            }
            if (bStop)
            {
                clearInterval(oElement.timer);
                fnCallBack && fnCallBack.apply(_this, arguments)    
            }
        }, 30)
    }
};
window.onload = function ()
{
    new ZoomPic("box");
    console.log(12312);
};