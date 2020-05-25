import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import Events from '../utility/events';
import mframe from 'mframe';

class StateBar extends HTMLElement {

    static register() {
        window.customElements.define('mm-state-bar', this);
    }

    static get observedAttributes() {
        return ['colors', 'autoplay'];
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.Content = this.shadowRoot.querySelector('.state-bar-content');
        this.init();
    }

    init() {
        this.Events = new Events();
        this.Colors = ['#99DDFF', '#30C9B0'];
        this._StateIndex = 0;
        this.Motion = {
            state: {}
        };
        this.Motion.show = mframe([{
            dom: this,
            frames: [
                {
                    time: 0,
                    css: {
                        display: 'block',
                        opacity: 1,
                        'background-image': () => {
                            return this._lgc(this.Colors[0], '0.0', 'rgba(255,255,255,0)');
                        }
                    }
                }, {
                    time: 30,
                    css: {
                        'background-image': () => {
                            return this._lgc(this.Colors[0], '100.0', 'rgba(255,255,255,0)');
                        }
                    },
                    tween: 'easeOut'
                }
            ]
        }, {
            dom: this.Content,
            frames: [
                { time: 20, css: { opacity: '0' } },
                { time: 30, css: { opacity: '1.0' } }
            ]
        }], {
            end: () => {
                this._StateIndex = 0;
                this.Events.emit('show');
                this.Events.emit('state', [this._StateIndex]);
            }
        });
        this.Motion.hide = mframe([{
            dom: this,
            frames: [
                { time: 0, css: { opacity: '1.0' } },
                { time: 10, css: { display: 'none', opacity: '0.0' } }
            ]
        }], {
            end: () => {
                this.Events.emit('hide');
            }
        });


        this.NeedAutoPlay = this.hasAttribute('autoplay');
        this.HasPlayed = false;

        if (!this.hasAttribute('colors')) {
            this.initState();
        }
    }

    bind(key, func) {
        this.Events.bind(key, func);
    }

    _getKey(from, to) {
        return [from, to].join('_');
    }

    _lgc(color1, position, color2) {
        return `linear-gradient(to right, ${color1}, ${position}%, ${color2})`;
    }

    initState() {
        var colors = this.Colors,
            l = colors.length,
            i, j;
        for (i = 0; i < l; i++) {
            for (j = 0; j < l; j++) {
                if (i !== j) {
                    this._initStateMotion(i, j, colors[i], colors[j]);
                }
            }
        }
        if (this.NeedAutoPlay && !this.HasPlayed) {
            this.HasPlayed = true;
            this.show();
        }
    }

    _initStateMotion(from, to, color1, color2) {
        let key = this._getKey(from, to);
        this.Motion.state[key] = mframe([{
            dom: this,
            frames: [
                { time: 0, css: { 'background-image': this._lgc(color2, '0.0', color1) } },
                { time: 30, css: { 'background-image': this._lgc(color2, '100.0', color1) } }
            ]
        }], {
            end: () => {
                this._StateIndex = to;
                this.Events.emit('state', [this._StateIndex]);
            }
        });
    }

    state(to) {
        var key = this._getKey(this._StateIndex, to);
        if (this.Motion.state[key]) {
            this.Motion.state[key].stop();
            this.Motion.state[key].play();
        }
    }

    next() {
        var to = this._StateIndex < this.Colors.length - 1 ? this._StateIndex + 1 : 0;
        this.state(to);
    }

    show() {
        this.Motion.show.stop();
        this.Motion.show.play();
    }

    hide() {
        this.Motion.hide.stop();
        this.Motion.hide.play();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
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
        this.Colors = Core.getArraySets(val, this.Colors, 2);
        this.initState();
    }

}

export default StateBar;