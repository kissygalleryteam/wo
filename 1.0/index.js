/**
 * @fileoverview 用于实现华丽的字幕效果
 * @author 明河<minghe36@126.com>
 * @module wo
 **/
KISSY.add(function (S, Node,Base,Division) {
    var EMPTY = '';
    var $ = Node.all;

    /**
     * 设置css3的样式
     * @param $target
     * @param pro
     * @param value
     */
    function setCss($target,pro,value){
        var newPro = pro.substring(0,1).toUpperCase()+pro.substring(1);
        $target.css(pro,value)
            .css('webkit'+newPro,value)
            .css('moz'+newPro,value);
    }

    /**
     * 用于实现华丽的字幕效果
     * @class Wo
     * @constructor
     * @extends Base
     */
    function Wo(target,comConfig) {
        var self = this;
        //调用父类构造函数
        Wo.superclass.constructor.call(self, comConfig);
        self.set('target',target);
        self._init();
    }
    S.extend(Wo, Base, /** @lends Wo.prototype*/{
        _init:function(){
            var self = this;
            var $target = self.get('target');
            if(!$target.length) return false;
            var div = new Division();

            var duration = self.get('duration');
            $target.each(function($el){
                div.apply($el);
                var $span = $el.children('span');
                //动画延迟配置
                var delay = $el.attr('data-delay');
                if(delay){
                    setCss($span,'animationDelay',delay+'s');
                }
                //动画持续时间配置
                var dur = $el.attr('data-duration');
                if(dur) duration = dur;
                setCss($span,'animationDuration',duration+'s');
                //运行动画
                setCss($span,'animationPlayState','running');
            })
        },
        run:function(){
            var self = this;
            var $target = self.get('target');
            setCss($target.all('span'),'animationPlayState','running');
        },
        paused:function(){
            var self = this;
            var $target = self.get('target');
            setCss($target.all('span'),'animationPlayState','paused');
        }
    }, {ATTRS : /** @lends Wo*/{
        target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        /**
         * 动画持续时间
         * @type Number
         * @default 3
         */
        duration:{
            value:3
        }
    }});
    return Wo;
}, {requires:['node', 'base','./division']});



