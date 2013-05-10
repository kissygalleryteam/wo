/**
 * @fileoverview 请修改组件描述
 * @author 明河<minghe36@126.com>
 * @module wo
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class Wo
     * @constructor
     * @extends Base
     */
    function Wo(comConfig) {
        var self = this;
        //调用父类构造函数
        Wo.superclass.constructor.call(self, comConfig);
    }
    S.extend(Wo, Base, /** @lends Wo.prototype*/{

    }, {ATTRS : /** @lends Wo*/{

    }});
    return Wo;
}, {requires:['node', 'base']});



