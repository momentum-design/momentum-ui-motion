import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../../utility/core';
import Fade from './motion/fade';
import Scroll from './motion/scroll';
import Swipe from './motion/swipe';

class TabsBody extends HTMLElement {

    static register () {
        window.customElements.define('mm-tabs-body', this);
    }

    static get observedAttributes() {
        return ['motion'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'motion':
                this._swithMotion(newVal);
                break;
            default:
                break;
        }
    }

    _swithMotion(val) {
        switch(val) {
            case 'scroll-a':
                this.Motion = new Scroll(this, this.Shim, this.Items, { direction: 'a'});
                break;
            case 'scroll-v':
                this.Motion = new Scroll(this, this.Shim, this.Items, { direction: 'v'});
                break;
            case 'swipe-a':
                this.Motion = new Swipe(this, this.Shim, this.Items, { direction: 'a'});
                break;
            case 'swipe-v':
                this.Motion = new Swipe(this, this.Shim, this.Items, { direction: 'v'});
                break;
            case 'fade':
            default:
                this.Motion = new Fade(this, this.Shim, this.Items);
        }
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }

    init() {
        this.Tab = Core.findParentByTagName(this, 'mm-tabs');
        this.Shim = this.shadowRoot.querySelector('.shim');
        this.Events = this.Tab.Events;
        this.initChildren();
        this.initMotion();
    }

    initChildren() {
        var children = this.children,
            index = 0,
            items=[];
        for (var i = 0, l = children.length; i < l; i++) {
            if(children[i].tagName.toLowerCase()==='mm-tabs-body-item'){
                children[i].Index = index;
                index++;
                items.push(children[i]);
            }
        }
        this.Items = items;
    }

    initMotion() {
        this.Events.bind('select_body', (i) => {
            this.show(i);
        });
    }

    show(index) {
        var _from = this.Tab.Last;
        if(this.Motion){
            this._showMotion(_from, index);
        } else {
            this._show(_from, index);
        }
    }

    _showMotion(from, to) {
        if(this.CurrentMotion) {
            this.CurrentMotion.M.stop();
            this.hideItem(this.CurrentMotion.From);
        }
        this.CurrentMotion = this.Motion.getMotion(from, to);
        this.CurrentMotion.M.stop().play();
    }

    _show(from, to) {
        this.Items[from].hide();
        this.Items[to].show();
    }

    hideItem(dom) {
        this.Motion.hideItem(dom);
    }

    showItem(dom) {
        this.Motion.showItem(dom);
    }


}

export default TabsBody;
