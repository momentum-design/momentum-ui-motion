var Core = {
    guid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    getRegClass(className) {
      return new RegExp('(\\s|\\t|\\n|\\r|^)' + className + '(?=\\s|\\t|\\n|\\r|$)', 'g');
    },
    trim(str) {
      return this.trimStart(this.trimEnd(str));
    },
    trimStart(str) {
      return str.replace(/^\s+/,'');
    },
    trimEnd(str) {
      return str.replace(/\s+$/,'');
    },
    removeClass(dom, className) {
      var _reg = this.getRegClass(className);
      dom.className = this.trim(dom.className.replace(_reg, ""));
    },
    addClass(dom, className) {
        var _reg = this.getRegClass(className),
          _str = dom.className;
        if (!_reg.test(_str)) dom.className = this.trimEnd(_str) + " " + className;
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
    },
    findChildrenByTagName: function(dom, tag, eachFunc) {
      var children = dom.children,
        ret = [];
        for (var i = 0, l = children.length; i < l; i++) {
            if(children[i].tagName.toLowerCase()===tag){
                eachFunc && eachFunc(children[i], i);
                ret.push(children[i]);
            }
        }
        return ret;
    },
    // #666|#333@#666|#444
    getArraySets: function(val, def) {
        var arr = [];
        if (typeof val === 'string') {
            var groups = val.split('@'),
                hasInside = false,
                arr = [];
            if (groups.length<=1) {
              return def;
            }

            for (var i = 0, l = groups.length; i < l; i++) {
                var item = groups[i].split('|');
                if (item.length > 1) {
                  hasInside = true;
                  arr.push(item);
                }
            }
            return hasInside ? arr : groups;
        }
        return def;
    }
  };
  
  export default Core;
  