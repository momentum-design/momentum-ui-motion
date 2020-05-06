import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import mframe from 'mframe';

class InputLabel extends HTMLElement {

    static register () {
        window.customElements.define('mm-input-label', this);
    }

    static get observedAttributes() {
        return ['placeholder'];
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'placeholder':
                this.Dom_hint.innerHTML = newVal;
                this.initMotion();
                break;
            default:
                break;
        }
    }

    init() {
        this.Dom = this.shadowRoot.querySelector('div');
        this.Dom_i = this.shadowRoot.querySelector('i');
        this.Dom_hint = this.shadowRoot.querySelector('label');
        this.Dom_input = this.shadowRoot.querySelector('input');
        this.Dom_clear = this.shadowRoot.querySelector('a');

        if (!this.hasAttribute('placeholder')) {
            this.initMotion();
        }
        this.initBind();
    }

    initMotion() {
        if (this.M && this.M.stop) {
            this.M.stop();
        }

        var w = (this.Dom_hint.clientWidth * 0.7 + 8) >> 0,
            h2 = this.Dom_hint.clientHeight * 0.7 >> 0,
            h = (-this.Dom_hint.clientHeight / 2) >> 0,
            t = parseInt(mframe.Cpu.Cores.css.get(this.Dom_hint, 'top')),
            left = parseInt(mframe.Cpu.Cores.css.get(this.Dom_hint, 'left')),
            left0 = left + w / 2 >> 0,
            left1 = left - 4;

        this.M = mframe([{
            dom: this.Dom_i,
            frames: [
                { css: { left: left0 + 'px', width: '0px' }, time: 0 },
                { css: { left: left1 + '.0px', width: w + '.0px', height: '1px', top: '-1px' }, time: 6, tween: 'easeOut' },
                { css: { height: h2 + '.0px', top: h + '.0px' }, time: 12, tween: 'easeOut' }
            ]
        }, {
            dom: this.Dom_hint,
            frames: [
                { css: { top: t + 'px', transform: 'scale(1.0)' }, time: 6 },
                { css: { top: h + '.0px', transform: 'scale(0.7)' }, time: 12, tween: 'easeOut' }
            ]
        }]);
    }

    initBind() {
        this.Dom_input.addEventListener('focus', (e) => {
            this._focus(e);
        });
        this.Dom_input.addEventListener('blur', (e) => {
            this._blur(e);
        });
        this.Dom_input.addEventListener('keyup', (e) => {
            this._keyup(e);
        });
        this.Dom_input.addEventListener('mouseup', (e) => {
            this._mouseup(e);
        });
        this.Dom_input.addEventListener('mousedown', (e) => {
            this._mousedown(e);
        });
        this.Dom_clear.addEventListener('click', (e) => {
            this.Dom_input.value = '';
            Core.removeClass(this.Dom, 'md_input_typed');
            this.Dom_input.focus();
        });
    }

    isEmpty() {
        return this.Dom_input.value.replace(/\r\n\t\s/g, '') === '';
    }

    _focus() {
        Core.addClass(this.Dom, 'md_input_focus');
        if (this.isEmpty()) {
            this.M.pause();
            this.M.play();
        }
    }

    _mouseup() {
        Core.removeClass(this.Dom, 'md_input_press');
    }

    _mousedown() {
        if (!this.isEmpty()) {
            Core.addClass(this.Dom, 'md_input_press');
        }
    }

    _keyup() {
        if (this.isEmpty()) {
            Core.removeClass(this.Dom, 'md_input_typed');
        } else {
            Core.addClass(this.Dom, 'md_input_typed');
        }
    }

    _blur() {
        Core.removeClass(this.Dom, 'md_input_focus');
        if (this.isEmpty()) {
            this.M.pause();
            this.M.reverse();
        }
    }
}

export default InputLabel;