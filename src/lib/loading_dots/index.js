import mframe from 'mframe';
const style = `<style type="text/css">
svg {transform-origin:50% 50% -814px;}
</style>`;
const template =`<svg width="200px" height="200px" viewBox="0 0 200 200">
<circle cx="60" cy="100" r="12" fill="#7F4FD7"/>
<circle cx="100" cy="100" r="12" fill="#7F4FD7"/>
<circle cx="140" cy="100" r="12" fill="#7F4FD7"/>
</svg>`;

class LoadingDots extends HTMLElement {

    static register () {
        window.customElements.define('mm-loading-dots', LoadingDots);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = style + template;
        this.init();
    }


    attributeChangedCallback(name, oldVal, newVal) {
        switch(name) {
            case 'width':
            case 'heigth':
                this.setAttr(name);
                break;
            default:
                break;
        }
    }

    setAttr(name) {
        this.Svg.setAttribute(name, this['_'+name]);
    }

    buildDotsArgs (x0, t0, dom) {
        return [{
            dom: dom,
            frames: [
                { attr: { fill: '#875AE0' }, time: t0 },
                { attr: { fill: '#C7A5FA' }, time: t0 + 15, tween:'easeInOut' },
                { attr: { fill: '#875AE0' }, time: t0 + 30, tween:'easeInOut'},
                { attr: { r:'12.0', cx: x0 }, time: t0 },
                { attr: { r:'28.8', cx: x0 + 17 }, time: t0 + 15, tween:'easeInOut'},
                { attr: { r:'12.0', cx: x0 }, time: t0 + 65, tween:'easeOut'}
            ]
        }];
    }

    init() {
        this.Svg =this.shadowRoot.querySelector('svg');
        this.Circle = this.shadowRoot.querySelectorAll('circle');

        let arg = [{
            dom: this.Svg,
            frames: [
                { css: {transform: 'rotateY(0deg)' },  time: 10 },
                { css: {transform: 'rotateY(1.0deg)' },  time: 40 },
                { css: {transform: 'rotateY(-1.0deg)' },  time: 70 },
                { css: {transform: 'rotateY(0.0deg)' },  time: 100 }
            ]
        }].concat(this.buildDotsArgs(60, 0, this.Circle[0]))
        .concat(this.buildDotsArgs(100, 15, this.Circle[1]))
        .concat(this.buildDotsArgs(140, 30, this.Circle[2]));

        this.M = mframe(arg);

        if(this.hasAttribute('autoplay')) {
            this.M.repeat(Infinity);
        }

        this.export();
    }

    export () {
        this.play = this.M.play;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }
    
}

export default LoadingDots;
