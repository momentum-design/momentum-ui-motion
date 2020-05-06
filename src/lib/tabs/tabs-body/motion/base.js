import Core from '../../../utility/core';

const AllClass = ['fade', 'swipe', 'scroll-a', 'scroll-v'];

class Base {

    constructor() { }

    init(con, shim, items, config) {
        this.Con = con;
        this.Shim = shim;
        this.Items = items;
        this.Config = config;
        this.MotionCache= {};
    }

    switchClass(className) {
        AllClass.forEach((val)=>{
            if(val===className) {
                Core.addClass(this.Con, val);
            } else {
                Core.removeClass(this.Con, val);
            }
        });
    }

    hideItem(dom) {
        if(dom) {
            dom.style.display = 'none';
        }
    }

    showItem(dom) {
        if(dom) {
            dom.style.opacity = 1;
            dom.style.display = '';
        }
    }

    end() {
        this.Con.CurrentMotion = null;
    }

}

export default Base;
