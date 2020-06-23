import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import Events from '../utility/events';
import mframe from 'mframe';

class VoiceInput extends HTMLElement {

    static register() {
        window.customElements.define('mm-voice-input', this);
    }

    static get observedAttributes() {
        return ['color'];
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `${html}`;
        this.init();
    }

    init() {
        this.Events = new Events();
        this.Rect = this.shadowRoot.querySelectorAll('rect');
        this._Heights = [4, 25, 4, 30, 10, 25, 10, 25, 4, 40, 15, 25, 4];
        this._MaxX = [-41, -17, 0, 17, 41];
        this.MaxHeight = 40;
        this.MaxWidth = 86;
        this.Radius = 2;
        this.FixedNum = 2;
        this.Center = {
            x: this.MaxWidth / 2 - this.Radius,
            y: this.MaxHeight / 2 - this.Radius
        };
        this.initMotion();
    }

    _initMotionLoop(index) {
        let _frames = [],
            _h = this._Heights,
            _f = this.FixedNum,
            _base = 0;

        for (let i = 0, l = _h.length; i < l; i++) {
            _frames.push({
                time: _base + i * 10,
                attr: {
                    height: _h[i].toFixed(_f),
                    y: ((this.MaxHeight - _h[i]) / 2).toFixed(_f)
                }
            });
        }

        this.MotionLoops[index] = mframe([{
            dom: this.Rect[index],
            frames: _frames
        }]);
    }

    _initMotionStart(index) {
        let x = this.Center.x,
            _f = this.FixedNum,
            x2 = x + this._MaxX[index],
            x3 = x + 11 * (index - 2),
            last = 15 + index * 5,
            events = {};

        frames = [
            { time: 0, attr: { x: x.toFixed(_f) }, css: { opacity: 0 } },
            { time: 5, css: { opacity: 1 } },
            { time: 15, attr: { x: x2.toFixed(_f) }, tween: 'easeInOut' },
            { time: 25, attr: { x: x3.toFixed(_f) }, tween: 'easeInOut' }
        ];

        frames.push({
            time: last,
            attr: { appear: true }
        });

        events[last] = () => {
            let motion = this.MotionLoops[index];
            if (motion) {
                motion.stop();
                motion.repeat(Infinity);
            }
        };

        return {
            dom: this.Rect[index],
            frames: frames,
            events: events
        };
    }

    _initMotionEnd(index) {
        let x = this.Center.x,
            y = this.Center.y,
            _f = this.FixedNum,
            rect = this.Rect[index],
            x2 = x + this._MaxX[index],
            x3 = x + 11 * (index - 2);

        frames = [
            {
                time: 0,
                attr: {
                    x: x3.toFixed(_f),
                    y: () => {
                        return rect.getAttribute('y');
                    },
                    height: () => {
                        return rect.getAttribute('height');
                    }
                }
            },
            { time: 10, attr: { x: x2.toFixed(_f) }, tween: 'easeInOut' },
            { time: 10, attr: { y: y.toFixed(_f), height: '4.0' } },
            { time: 20, css: { opacity: 1 } },
            { time: 25, attr: { x: x.toFixed(_f) }, css: { opacity: 0 }, tween: 'easeInOut' }
        ];

        return {
            dom: rect,
            frames: frames
        };
    }

    initMotion() {
        this.MotionLoops = {};

        let motionStartConfig = [],
            motionEndConfig = [];

        for (let i = 0; i < 5; i++) {
            this._initMotionLoop(i);
            motionStartConfig.push(this._initMotionStart(i));
            motionEndConfig.push(this._initMotionEnd(i));
        }

        this.MotionStart = mframe(motionStartConfig, {
            start: () => {
                this.Events.emit('start');
            }
        });
        this.MotionEnd = mframe(motionEndConfig, {
            end: () => {
                this.Events.emit('end');
            }
        });
    }

    stopAll() {
        this._stop(this.MotionStart);
        for (let i = 0; i < 5; i++) {
            this._stop(this.MotionLoops[i]);
        }
        this._stop(this.MotionEnd);
    }

    _stop(m) {
        if (m && typeof m.stop === 'function') {
            m.stop();
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'color':
                this.setColor(newVal);
                break;
            default:
                break;
        }
    }

    setColor(val) {
        for (let i = 0; i < this.Rect.length; i++) {
            this.Rect[i].setAttribute('fill', val);
        }
    }

    start() {
        this.stopAll();
        this.MotionStart.play();
    }

    end() {
        this.stopAll();
        this.MotionEnd.play();
    }

}

export default VoiceInput;
