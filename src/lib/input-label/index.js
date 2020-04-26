import css from '!!raw-loader!sass-loader!./index.scss'; 
import html from '!!raw-loader!./index.html'; 
import mframe from 'mframe';

class InputLabel extends HTMLElement {

    static get observedAttributes() {
        return ['placeholder'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name) {
            case 'placeholder':
                this.Dom_hint.innerHTML = newVal;
                break;
            default:
                break;
        }
    }

    init() {
        this.Dom = this.shadowRoot.querySelector('div');
        this.Dom_i =this.shadowRoot.querySelector('i');
        this.Dom_hint = this.shadowRoot.querySelector('label');
        this.Dom_input = this.shadowRoot.querySelector('input');
        this.Dom_clear = this.shadowRoot.querySelector('a');

        this.initMotion();
        this.initBind();
    }

    initMotion() {
        var w = (this.Dom_hint.clientWidth * 0.7 + 8) >> 0,
            h2 = this.Dom_hint.clientHeight * 0.7 >> 0,
            h = (-this.Dom_hint.clientHeight / 2) >> 0,
            t = parseInt(mframe.Cpu.Cores.css.get(this.Dom_hint, 'top')),
            left = parseInt(mframe.Cpu.Cores.css.get(this.Dom_hint, 'left')),
            left0 = left + w / 2 >> 0,
            left1 = left - 4;

        this.Motion = mframe([{
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
        this.Dom_input.addEventListener('focus', (e)=> {
            this._focus(e);
        });
        this.Dom_input.addEventListener('blur', (e)=> {
            this._blur(e);
        });
        this.Dom_input.addEventListener('keyup', (e)=> {
            this._keyup(e);
        });
        this.Dom_input.addEventListener('mouseup', (e)=> {
            this._mouseup(e);
        });
        this.Dom_input.addEventListener('mousedown', (e)=> {
            this._mousedown(e);
        });
        this.Dom_clear.addEventListener('click', (e)=> {
            this.Dom_input.value = '';
            this.removeClass(this.Dom, 'md_input_typed');
            this.Dom_input.focus();
        });
    }

    isEmpty() {
        return this.Dom_input.value.replace(/\r\n\t\s/g, '') === '';
    }

    removeClass (dom, className) {
        var _reg = new RegExp('(\\s|\\t|\\n|\\r|^)' + className + '(?=\\s|\\t|\\n|\\r|$)', 'g');
        dom.className = dom.className.replace(_reg, "");
    }

    addClass(dom, className) {
        var _reg = new RegExp('(\\s|\\t|\\n|\\r|^)' + className + '(?=\\s|\\t|\\n|\\r|$)');
        if (!_reg.test(dom.className)) dom.className += " " + className;
    }

    _focus() {
        this.addClass(this.Dom, 'md_input_focus');
        if (this.isEmpty()) {
            this.Motion.pause();
            this.Motion.play();
        }
    }

    _mouseup() {
        this.removeClass(this.Dom, 'md_input_press');
    }

    _mousedown() {
        if(!this.isEmpty()) {
            this.addClass(this.Dom, 'md_input_press');
        }
    }

    _keyup() {
        if (this.isEmpty()) {
            this.removeClass(this.Dom, 'md_input_typed');
        } else {
            this.addClass(this.Dom, 'md_input_typed');
        }
    }

    _blur() {
        this.removeClass(this.Dom, 'md_input_focus');
        if (this.isEmpty()) {
            this.Motion.pause();
            this.Motion.reverse();
        }
    }
}

InputLabel.Tag = 'mm-input-label';

export default InputLabel;