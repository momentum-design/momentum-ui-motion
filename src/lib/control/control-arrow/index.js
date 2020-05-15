import html from '!!raw-loader!./index.html';
import css from '!!raw-loader!sass-loader!./index.scss';

class ControlArrow extends HTMLElement {

    static register () {
        window.customElements.define('mm-control-arrow', this);
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.Path = this.shadowRoot.querySelector('path');
        this.init();
    }

    init() {
        this.Mode = '';
        if(this.parentNode.tagName.toLowerCase()==='mm-control') {
            this.Control = this.parentNode;
            this.parentNode.ControlArrow = this;
            this.switchMode(this.Control.Mode||'');
        }
    }

    switchMode(val) {
        if(val!==this.Mode) {
            if(this.Mode === 'light') {
                this.Path.setAttribute('fill','#F7F7F7');
            }
            this.Mode = val;
            if(val==='light') {
                this.Path.setAttribute('fill','#121212');
            } 
        }
    }

}

export default ControlArrow;