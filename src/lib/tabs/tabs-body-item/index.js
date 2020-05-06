import Core from '../../utility/core';
class TabsBodyItem extends HTMLElement {

    static register () {
        window.customElements.define('mm-tabs-body-item', this);
    }

    get Index() {
        return this._Index;
    }

    set Index(index) {
        this._Index = index;
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<slot></slot>`;
        this.init();
    }

    init() {
        this.IsSelected = false;
        this.initEvent();

    }

    initEvent() {
        this.TabBody = Core.findParentByTagName(this, 'mm-tabs-body');
        if(this.Index===this.TabBody.Tab.Current) {
            if(this.TabBody.Motion) {
                this.TabBody.showItem(this);
            } else {
                this.show();
            }
        } else {
            if(this.TabBody.Motion) {
                this.TabBody.hideItem(this);
            } else {
                this.hide();
            }
        }
    }

    show() {
        this.style.opacity = 1;
        this.style.display = '';
    }

    hide() {
        this.style.display = 'none';
    }


}

export default TabsBodyItem;