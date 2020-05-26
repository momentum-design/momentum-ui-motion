import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import mframe from 'mframe';

class LoadingBreakout extends HTMLElement {

    static register() {
        window.customElements.define('mm-loading-breakout', this);
    }

    static get observedAttributes() {
        return ['size', 'colors', 'autoplay'];
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
            this.Colors = Core.propArray(val, this.Colors, 1);
            for (var i = 0; i < 4; i++) {
                var _idx = i % this.Colors.length;
                this.Rect[i*2].setAttribute('stroke', this.Colors[_idx]);
                this.Rect[i*2 + 1].setAttribute('fill', this.Colors[_idx]);
            }
        }
    }

    setSize(val) {
        this.Svg.setAttribute('width', val + 'px');
        this.Svg.setAttribute('height', val + 'px');
    }

    constructor () {
        super();
        this.Colors = ['#FC9D03'];
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `${html}`;
        this.init();
    }

    init() {
        this.Svg = this.shadowRoot.querySelector('svg');
        this.Rect = this.shadowRoot.querySelectorAll('rect');
        this.initMotion();
    }

    _initRect(index, timeIndex) {
        var rectIn = this.Rect[index * 2 + 1],
            rectOut = this.Rect[index * 2],
            out0 = 0.5,
            in0 = 2,
            plus_Inout = in0 - out0,
            sizeOut1 = 12,
            sizeOut0 = 9,
            sizeIn1 = 9,
            sizeIn0 = 0,
            plus_position = 15,
            plus_out = sizeOut1 - sizeOut0,
            isRow0 = index < 2,
            isCol0 = index % 2 === 0,
            outX0, outX1, outY0, outY1;

        if (isRow0) {
            outY1 = out0;
            outY0 = outY1 + plus_out;
        } else {
            outY1 = out0 + plus_position;
            outY0 = outY1;
        }

        if (isCol0) {
            outX1 = out0;
            outX0 = outX1 + plus_out;
        } else {
            outX1 = out0 + plus_position;
            outX0 = outX1;
        }

        var inX1 = outX1 + plus_Inout,
            inY1 = outY1 + plus_Inout,
            inX0 = outX0 + sizeOut0 / 2,
            inY0 = outY0 + sizeOut0 / 2;

        var step = 2,
            t = 30,
            t0 = timeIndex * (t + step * 2),
            _2f = this._2f,
            framesIn,
            framesOut;
        
        framesIn = [{
            time: t0,
            attr: { x: _2f(inX0), y: _2f(inY0), width: _2f(sizeIn0), height: _2f(sizeIn0) },
            css: { opacity: '0.0' },
            tween: 'easeInOut'
        }, {
            time: t0 + t - step,
            attr: { x: _2f(inX1), y: _2f(inY1), width: _2f(sizeIn1), height: _2f(sizeIn1) },
            css: { opacity: '1.0' },
            tween: 'easeInOut'
        }, {
            time: t0 + t + step,
            attr: { x: _2f(inX1), y: _2f(inY1), width: _2f(sizeIn1), height: _2f(sizeIn1) },
            css: { opacity: '1.0' },
            tween: 'easeInOut'
        }, {
            time: t0 + t * 2,
            attr: { x: _2f(inX0), y: _2f(inY0), width: _2f(sizeIn0), height: _2f(sizeIn0) },
            css: { opacity: '0.0' },
            tween: 'easeInOut'
        }];
        framesOut = [{
            time: t0,
            attr: { x: _2f(outX0), y: _2f(outY0), width: _2f(sizeOut0), height: _2f(sizeOut0) },
            tween: 'easeInOut'
        }, {
            time: t0 + t - step,
            attr: { x: _2f(outX1), y: _2f(outY1), width: _2f(sizeOut1), height: _2f(sizeOut1) },
            tween: 'easeInOut'
        }, {
            time: t0 + t + step,
            attr: { x: _2f(outX1), y: _2f(outY1), width: _2f(sizeOut1), height: _2f(sizeOut1) },
            tween: 'easeInOut'
        }, {
            time: t0 + t * 2,
            attr: { x: _2f(outX0), y: _2f(outY0), width: _2f(sizeOut0), height: _2f(sizeOut0) },
            tween: 'easeInOut'
        }];

        return [{
            dom: rectIn,
            frames: framesIn
        }, {
            dom: rectOut,
            frames: framesOut
        }];
    }

    _2f(val) {
        return val + (val === parseInt(val) ? '.0' : '');
    }

    initMotion() {
        if (this.M && this.M.stop) {
            this.M.stop();
        }

        var configs = [],
            m0 = this._initRect(0, 0),
            m1 = this._initRect(1, 0),
            m2 = this._initRect(2, 2),
            m3 = this._initRect(3, 1);

        var _tStart = 3 * 34,
            _tEnd = _tStart + 30 - 2 ;

        configs = configs.concat(m1).concat(m2).concat(m3)
            .concat([{
                dom: this.Rect[4],
                frames: [{
                    time: _tEnd,
                    css: { display: '' }
                }]
            }]);

        this.M3 = mframe(m0);

        this.M = mframe(configs);
        this.M.bind(_tStart, (i)=> {
            this.M3.stop();
            this.M3.play();
        });

        this.M.bind('stop', ()=> {
            m3.stop();
        });

        this.M.bind('pause', ()=> {
            m3.pause();
        });

        this.M.Repeat = Infinity;

        if (this.hasAttribute('autoplay')) {
           this.M && this.M.play();
        }

        this.export();
    }

    export() {
        this.play = this.M.play;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }

}

export default LoadingBreakout;
