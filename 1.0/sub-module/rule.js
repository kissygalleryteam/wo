/**
 * @fileoverview �ָ�Ĺ�����
 * @author ����<minghe36@126.com>
 * @module division
 **/
KISSY.add(function (S) {

    return {
        "default" : function(text) {
             var letters = text.split('');
             return {
                 letters:letters,
                 cls:'char'
             }

        }
    };
}, {requires:['node']});



