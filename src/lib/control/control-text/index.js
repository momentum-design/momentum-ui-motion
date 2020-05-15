class ControlText extends HTMLElement {

    static register () {
        window.customElements.define('mm-control-text', this);
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<slot></slot>`;
        this.init();
    }

    init() {
        if(this.parentNode.tagName.toLowerCase()==='mm-control') {
            this.parentNode.ControlText = this;
            if(this.parentNode.Events) {  
                this.parentNode.Events.emit('initChange');
            }
        }
    }

}

export default ControlText;