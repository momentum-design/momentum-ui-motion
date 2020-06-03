import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import mframe from 'mframe';

class LoadingDots extends HTMLElement {

    static register () {
        window.customElements.define('mm-loading-dots', this);
    }

    static get observedAttributes() {
        return ['size', 'colors', 'autoplay','speed'];
    }

    constructor () {
        super();
        this.Colors = [['#00A0D1', '#07C1F5']];
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
            case 'speed':
                this.setSpeed(newVal);
                break;
            default:
                break;
        }
    }

    setSpeed(val) {
        let _v = parseFloat(val) || 1;
        if(this.M) {
            this.M.speed(_v);
        }
    }

    setColors(val) {
        if (typeof val === 'string') {
            this.Colors = Core.propArray(val, this.Colors, 2);
            this.initMotion();
        }
    }

    setSize(val) {
        this.Svg.setAttribute('width', val + 'px');
        this.Svg.setAttribute('height', val + 'px');
    }

    buildDotsFrame(t0, colorIndex) {
        return [
            { attr: { fill: this.Colors[colorIndex][0] }, time: t0 + 35},
            { attr: { fill: this.Colors[colorIndex][1] }, time: t0 + 55, tween: 'easeInOut' },
            { attr: { fill: this.Colors[colorIndex][0] }, time: t0 + 80, tween: 'easeInOut' },
            { attr: { r: '13.0', cy: '55.0' }, time: t0 },
            { attr: { r: '14.56', cy: '29.0' }, time: t0 + 25, tween: 'easeInOut' },
            { attr: { r: '13.0', cy: '55.0' }, time: t0 + 55, tween: 'easeInOut' }
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
                { css: { transform: 'translateY(0.0px)' }, time: 0 + base },
                { css: { transform: 'translateY(4.0px)' }, time: 40 + base, tween: 'easeInOut' },
                { css: { transform: 'translateY(0.0px)' }, time: 100 + base, tween: 'easeInOut' }
            ]);
            circleFrame0 = circleFrame0.concat(this.buildDotsFrame(base + 0, i));
            circleFrame1 = circleFrame1.concat(this.buildDotsFrame(base + 10, i));
            circleFrame2 = circleFrame2.concat(this.buildDotsFrame(base + 20, i));
        }

        this.M = mframe.speed([
            { dom: this.Svg, frames: svgFrame },
            { dom: this.Circle[0], frames: circleFrame0 },
            { dom: this.Circle[1], frames: circleFrame1 },
            { dom: this.Circle[2], frames: circleFrame2 }
        ], undefined, [0.5,0.75]);

        if (this.hasAttribute('autoplay')) {
            this.M && this.M.repeat(Infinity);
            var _speed = parseFloat(this.getAttribute('speed')) || 1;
            this.M.speed(_speed);
        }

        this.export();
    }

    export() {
        this.play = this.M.play;
        this.speed = this.M.speed;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }

}

export default LoadingDots;
