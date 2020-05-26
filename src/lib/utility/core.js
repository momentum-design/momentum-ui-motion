var Core = {
  isArray: function (pObj) {
    return Object.prototype.toString.call(pObj) === '[object Array]';
  },
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
    return str.replace(/^\s+/, '');
  },
  trimEnd(str) {
    return str.replace(/\s+$/, '');
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
        elem[i][key] = value;
      }
    } else {
      elem[key] = value;
    }
  },
  findParentByTagName: function (dom, tagName) {
    var p = dom.parentNode,
      _tag = tagName.toLowerCase();
    while (p) {
      if (p.tagName.toLowerCase() === _tag) {
        return p;
      }
      p = p.parentNode;
    }
    return null;
  },
  findChildrenByTagName: function (dom, tag, eachFunc) {
    var children = dom.children,
      ret = [];
    for (var i = 0, l = children.length; i < l; i++) {
      if (children[i].tagName.toLowerCase() === tag) {
        eachFunc && eachFunc(children[i], i);
        ret.push(children[i]);
      }
    }
    return ret;
  },
  split : function(signal, val, def, min) {
    var arr = [],
      min = min || 1;
    if(typeof val === 'string') {
      var groups = val.split(signal);
      return groups.length < min ? def : groups;
    }
    return def;
  },
  // #666|#333@#666|#444
  propArray: function(val, def, min) {
    if(this.isArray(def)) {
      if(this.isArray(def[0])) {
        var groups = val.split('@'),
          ret=[],
          idx=0,
          i,l=groups.length;
        for(i=0;i<l;i++) {
          idx = l % def.length;
          ret.push(this.split('|', groups[i], def[idx], min));
        }
        return ret;
      } else {
        return this.split('|', val, def, min);
      }
    }
    return def;
  }
};

export default Core;
