import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../../utility/core';
import mframe from 'mframe';

class TabsHeaderItem extends HTMLElement {

    static register() {
        window.customElements.define('mm-tabs-header-item', this);
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
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.ClickDot = this.shadowRoot.querySelector('.click_dot');
        this.init();
    }

    getDotSize() {
        var w = parseInt(this.clientWidth) + 10,
            h = parseInt(this.clientHeight) + 10;
        return Math.ceil(Math.sqrt(w * w + h + h));
    }

    initMotion() {
        this.M = mframe([{
            dom: this.ClickDot,
            frames: [
                { time: 0, css: { display: 'block', opacity: '0.6', width: '0px', height: '0px' } },
                {
                    time: 20,
                    css: {
                        opacity: '0.0',
                        backgroundColor: '#DEDEDE',
                        width: () => { return this.getDotSize() + '.0px'; },
                        height: () => { return this.getDotSize() + '.0px'; }
                    }
                }
            ]
        }]);
    }

    init() {
        this.IsSelected = false;
        this.initMotion();
        this.addEventListener('mousedown', (e) => {
            if (!this.IsSelected) {
                Core.addClass(this, 'pressed');
                this.M.stop();
                this.M.play();
            }
        });
        this.addEventListener('mouseup', (e) => {
            Core.removeClass(this, 'pressed');
            e.stopPropagation();
        });
        this.addEventListener('mouseleave', (e) => {
            Core.removeClass(this, 'pressed');
            e.stopPropagation();
        });
        this.initEvent();
    }

    initEvent () {
        this.TabHeader = Core.findParentByTagName(this, 'mm-tabs-header');
        if(this.TabHeader) {
            this.TabHeader.Events.bind('select_header', (index)=> {
                if(index === this.Index) {
                    this.select();
                } else {
                    this.unselect();
                }
            });
            this.addEventListener('click', (e) => {
                this.TabHeader.Events.emit('select', [this.Index]);
                e.stopPropagation();
            });
            if(this.TabHeader.Tab.Current ===  this.Index) {
                this.select();
            }
        }
    }

    select() {
        if (!this.IsSelected) {
            Core.addClass(this, 'current');
            this.IsSelected = true;
        }
    }

    unselect() {
        if (this.IsSelected) {
            Core.removeClass(this, 'current');
            this.IsSelected = false;
        }
    }

}

export default TabsHeaderItem;