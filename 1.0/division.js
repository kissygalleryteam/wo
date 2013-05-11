/**
 * @fileoverview 句子分割器
 * @author 明河<minghe36@126.com>
 * @module division
 **/
KISSY.add(function (S, Node,Base,XTemplate,RULE) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 句子分割器
     * @class Division
     * @constructor
     * @extends Base
     */
    function Division(comConfig) {
        var self = this;
        //调用父类构造函数
        Division.superclass.constructor.call(self, comConfig);
    }
    S.extend(Division, Base, /** @lends Division.prototype*/{
        apply:function(target,rule){
            var self = this;
            var $target = $(target);
            if(!$target.length) return self;
            if(!rule) rule = "default";
            rule = RULE[rule];
            if(!S.isFunction(rule)) return self;

            var text = $target.text();
            if(text == EMPTY) return self;

            var data = rule.call(self,text);

            var tpl = self.get('tpl');
            var html = new XTemplate(tpl).render(data);

            $target.html(html);
        }
    }, {ATTRS : /** @lends Division*/{
        tpl:{
            value:'{{#each letters}}<span class="{{cls}}_{{xindex+1}}">{{this}}</span>{{/each}}'
        }
    }});
    return Division;
}, {requires:['node', 'base','xtemplate','./sub-module/rule']});



