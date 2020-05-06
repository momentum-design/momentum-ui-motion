var Core = {
    guid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    removeClass(dom, className) {
        var _reg = new RegExp('(\\s|\\t|\\n|\\r|^)' + className + '(?=\\s|\\t|\\n|\\r|$)', 'g');
        dom.className = dom.className.replace(_reg, "");
    },
    addClass(dom, className) {
        var _reg = new RegExp('(\\s|\\t|\\n|\\r|^)' + className + '(?=\\s|\\t|\\n|\\r|$)');
        if (!_reg.test(dom.className)) dom.className += " " + className;
    },
    each: function (elem, funcName, args) {
      var length = elem.length;
      // fake bool
      if (typeof length === 'number') {
        for (var i = 0; i < length; i++) {
          elem[i][funcName].apply(elem[i], args);
        }
      } else {
        elem[funcName].apply(elem, args);
      }
    },
    access: function (elem, key, value) {
      var length = elem.length;
      // fake bool
      if (typeof length === 'number') {
        for (var i = 0; i < length; i++) {
          elem[i][key]=value;
        }
      } else {
        elem[key]=value;
      }
    },
    findParentByTagName: function (dom, tagName) {
      var p = dom.parentNode,
        _tag = tagName.toLowerCase();
      while(p) {
        if(p.tagName.toLowerCase()===_tag) {
          return p;
        }
        p = p.parentNode;
      }
      return null;
    }
  };
  
  export default Core;
  