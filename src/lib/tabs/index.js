import css from '!!raw-loader!sass-loader!./index.scss';
import TabsHeader from './tabs-header';
import TabsHeaderItem from './tabs-header-item';
import TabsBody from './tabs-body';
import TabsBodyItem from './tabs-body-item';
import Events from '../utility/events';

class Tabs extends HTMLElement {

    static register() {
        window.customElements.define('mm-tabs', this);
    }

    static get observedAttributes() {
        return ['current'];
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style><slot></slot>`;
        this.init();
    }

    init() {
        this.Events = new Events();
        this.Events.bind('select', (index) => {
            this._select(index);
        });
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'current':
                this.select(newVal);
                break;
            default:
                break;
        }
    }

    _select(index) {
        var _val = parseInt(index) || 0,
            i = _val > 0 ? _val : -_val;
        if (this.Current != i) {
            this.Last = this.Current;
            this.Current = i;
            this.setAttribute('current', i);
            this.Events.emit('select_header', [index]);
            this.Events.emit('select_body', [index]);
            this.Events.emit('onSelect', [index]);
        }
    }

    select(index) {
        this.Events.emit('select', [index]);
    }

}

export default [
    Tabs,
    TabsHeader,
    TabsHeaderItem,
    TabsBody,
    TabsBodyItem
];
