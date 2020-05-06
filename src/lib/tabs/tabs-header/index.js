import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../../utility/core';

class TabsHeader extends HTMLElement {

    static register() {
        window.customElements.define('mm-tabs-header', this);
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }

    init() {
        this.Tab = Core.findParentByTagName(this, 'mm-tabs');
        this.Events = this.Tab.Events;
        this.initChildren();
    }

    initChildren() {
        var children = this.children,
            index=0;
        for (var i = 0, l = children.length; i < l; i++) {
            if(children[i].tagName.toLowerCase()==='mm-tabs-header-item'){
                children[i].Index = index;
                index++;
            }
        }
    }

}

export default TabsHeader;
