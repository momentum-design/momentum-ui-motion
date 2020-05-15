import css from '!!raw-loader!sass-loader!./index.scss';

class ControlIcon extends HTMLElement {

    static register () {
        window.customElements.define('mm-control-icon', this);
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style><slot></slot>`;
        this.init();
    }

    init() {

    }

}

export default ControlIcon;