import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import mframe from 'mframe';

class LoadingDots extends HTMLElement {

    static register () {
        window.customElements.define('mm-loading-dots', this);
    }

    static get observedAttributes() {
        return ['size', 'colors', 'autoplay'];
    }

    constructor () {
        super();
        this.Colors = [['#875AE0', '#C7A5FA']];
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }


    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'size':
                this.setSize(newVal);
                break;
            case 'colors':
                this.setColors(newVal);
                break;
            case 'autoplay':
                break;
            default:
                break;
        }
    }

    setColors(val) {
        if (typeof val === 'string') {
            var groups = val.split('@'),
                arr = [];
            for (var i = 0, l = groups.length; i < l; i++) {
                var item = groups[i].split('|');
                if (item.length > 1) {
                    arr.push(item);
                }
            }
            this.Colors = arr;
            this.initMotion();
        }
    }

    setSize(val) {
        this.Svg.setAttribute('width', val + 'px');
        this.Svg.setAttribute('height', val + 'px');
    }

    buildDotsFrame(x0, t0, colorIndex) {
        return [
            { attr: { fill: this.Colors[colorIndex][0] }, time: t0 },
            { attr: { fill: this.Colors[colorIndex][1] }, time: t0 + 15, tween: 'easeInOut' },
            { attr: { fill: this.Colors[colorIndex][0] }, time: t0 + 30, tween: 'easeInOut' },
            { attr: { r: '12.0', cx: x0 }, time: t0 },
            { attr: { r: '28.8', cx: x0 + 17 }, time: t0 + 15, tween: 'easeInOut' },
            { attr: { r: '12.0', cx: x0 }, time: t0 + 65, tween: 'easeOut' }
        ]
    }

    init() {
        this.Svg = this.shadowRoot.querySelector('svg');
        this.Circle = this.shadowRoot.querySelectorAll('circle');

        if (!this.hasAttribute('colors')) {
            this.initMotion();
        }
    }

    initMotion() {
        if (this.M && this.M.stop) {
            this.M.stop();
        }

        var i = 0,
            l = this.Colors.length,
            svgFrame = [],
            circleFrame0 = [],
            circleFrame1 = [],
            circleFrame2 = [],
            base,
            step = 100;

        for (; i < l; i++) {
            base = step * i;
            svgFrame = svgFrame.concat([
                { css: { transform: 'rotateY(0deg)' }, time: 10 + base },
                { css: { transform: 'rotateY(1.0deg)' }, time: 40 + base },
                { css: { transform: 'rotateY(-1.0deg)' }, time: 70 + base },
                { css: { transform: 'rotateY(0.0deg)' }, time: 100 + base }
            ]);
            circleFrame0 = circleFrame0.concat(this.buildDotsFrame(60, base + 0, i));
            circleFrame1 = circleFrame1.concat(this.buildDotsFrame(100, base + 15, i));
            circleFrame2 = circleFrame2.concat(this.buildDotsFrame(140, base + 30, i));
        }

        this.M = mframe([
            { dom: this.Svg, frames: svgFrame },
            { dom: this.Circle[0], frames: circleFrame0 },
            { dom: this.Circle[1], frames: circleFrame1 },
            { dom: this.Circle[2], frames: circleFrame2 }
        ]);

        if (this.hasAttribute('autoplay')) {
            this.M && this.M.repeat(Infinity);
        }

        this.export();
    }

    export() {
        this.play = this.M.play;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }

}

export default LoadingDots;
