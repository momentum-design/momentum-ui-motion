import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Events from '../utility/events';
import Core from '../utility/core';

//dark dark_on on

class Toggle extends HTMLElement {

    static register() {
        window.customElements.define('mm-toggle', this);
    }

    static get observedAttributes() {
        return ['disabled', 'selected', 'dark'];
    }

    get seleted() {
        return this.State.selected;
    }

    set seleted(value) {
        this.switchSelect(value);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'disabled':
                this.switchDisable(newVal);
                break;
            case 'selected':
                this.switchSelect(newVal);
                break;
            case 'dark':
                this.switchMode(newVal);
                break;
            default:
                break;
        }
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.init();
    }

    init() {
        this.Events = new Events();
        this.State = {
            selected: false,
            dark: false,
            disabled: false,
            pressed: false
        };

        this.addEventListener('click', () => {
            if(!this.State.disabled) {
                this.switchSelect(!this.State.selected);
            }
        });

        this.addEventListener('mousedown', (e) => {
            this.switchPress(true);
        });
        this.addEventListener('mouseup', (e) => {
            this.switchPress(false);
        });
        this.addEventListener('mouseleave', (e) => {
            this.switchPress(false);
        });
    }

    _Base() {
        var ret= [];
        if(this.State.dark) {
            ret.push('dark');
        }
        if(this.State.selected){
            ret.push('on');
        }
        return ret.join('_');
    }

    _bool(val) {
        return val === 'false' ? false : Boolean(val);
    }

    _class(base, classStr) {
        return [base, classStr].join('_');
    }

    switchSelect(val) {
        this.switchBase('selected', val);
        this.Events.emit('onSelect');
    }

    select(val) {
        this.setAttribute('selected', val);
    }

    switchBase(prop, val) {
        var _val = this._bool(val);
        if(_val!==this.State[prop]) {
            var _str = this.className,
                _before = this._Base();
            this.State[prop] = _val;
            var _after = this._Base();
            if(_before!=='') {
                var _regBase = Core.getRegClass(_before);
                _str = _str.replace(_regBase,'');
            }
            _str = _after + ' ' + Core.trim(_str);
            _str = _str.replace(Core.getRegClass(this._class(_before, 'disable')), this._class(_after, 'disable'));
            _str = _str.replace(Core.getRegClass(this._class(_before, 'pressed')), this._class(_after, 'pressed'));
            this.className = _str;
        }
    }

    switchDisable(val) {
        var _val = this._bool(val);
        if(this.State.disabled!==_val) {
            this.State.disabled = _val;
            var _class = this._class(this._Base(),'disable');
            if (_val) {
                Core.addClass(this, _class);
            } else {
                Core.removeClass(this, _class);
            }
        }
    }

    switchPress(val) {
        var _val = this._bool(val);
        if(this.State.pressed!==_val) {
            this.State.pressed = _val;
            var _class = this._class(this._Base(),'pressed');
            if (_val) {
                Core.addClass(this, _class);
            } else {
                Core.removeClass(this, _class);
            }
        }
    }

    switchMode(val) {
        this.switchBase('dark', val);
    }

}

export default Toggle;
