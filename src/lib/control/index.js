import ControlIcon from './control-icon';
import ControlText from './control-text';
import ControlArrow from './control-arrow';
import css from '!!raw-loader!sass-loader!./index.scss';
import html from '!!raw-loader!./index.html';
import Core from '../utility/core';
import Events from '../utility/events';
import mframe from 'mframe';

class Control extends HTMLElement {

    static register () {
        window.customElements.define('mm-control', this);
    }

    static get observedAttributes() {
        return ['mode', 'state-text', 'current'];
    }

    constructor () {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `<style type="text/css">${css}</style>${html}`;
        this.ContentWarp = this.shadowRoot.querySelector('.control-content');
        this.Current = +this.getAttribute('current') || 0;
        this.init();
    }

    init() {
        this.Events = new Events();
        this.Events.bind('initChange', ()=> {
            this.initChange();
        });
        this.switchMode(this.getAttribute('mode'));
        this.initEvent();
    }

    bind(key, func) {
        this.Events.bind(key, func);
    }

    initEvent() {
        this.addEventListener('click', ()=> {
            this.next();
        });

        this.addEventListener('mousedown', (e) => {
            Core.addClass(this.ContentWarp, 'control-content_pressed');
        });
        this.addEventListener('mouseup', (e) => {
            Core.removeClass(this.ContentWarp, 'control-content_pressed');
            e.stopPropagation();
        });
        this.addEventListener('mouseleave', (e) => {
            Core.removeClass(this.ContentWarp, 'control-content_pressed');
            e.stopPropagation();
        });
    }

    initChange() {
        if(this.ControlText && this.TxtArr) {
            this.TxtWidthCache={};
            var _max = -1,
                _maxAll = -1,
                _maxIndex,
                _cv,
                _v;
            for(var i=0,l=this.TxtArrLength;i<l;i++) {
                this.ControlText.innerHTML = this.TxtArr[i];
                _cv = parseFloat(this.ControlText.clientWidth);
                _v = parseFloat(this.clientWidth);
                this.TxtWidthCache[i] = _cv;
                if( _cv > _max) {
                    _max = _cv;
                    _maxAll = _v
                    _maxIndex = i;
                }
            }
            this.MaxIndex = _maxIndex;
            this.MaxWidth = _max;
            this.style.width = _maxAll + 'px';
            this.initMotion();
            this.switchCurrent(this.Current);
        }
    }

    next() {
        var from = this.Current;
        if(typeof this.TxtArrLength === 'number') {
            var from = this.Current,
                to = this.TxtArrLength<= this.Current+1 ? 0 : this.Current+1;
        }
        this.state(to, from);
    }

    state(to, from) {
        from = typeof from === 'number' ? from : this.Current;
        var key = this._key(from, to);
        if(this.Motion && this.Motion[key]) {
            this.Motion[key].stop();
            this.Motion[key].play();
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'state-text':
                this.switchText(newVal);
                break;
            case 'mode':
                this.switchMode(newVal);
                break;
            case 'current':
                this.switchCurrent(newVal);
                break;
            default:
                break;
        }
    }

    switchText(val) {
        this.TxtArr = val.split('@@');
        this.TxtArrLength =  this.TxtArr.length;
        this.Events.emit('initChange');
    }

    _current(val) {
        if(typeof this.TxtArrLength === 'number') {
            this.Current = Math.max(Math.min(val, this.TxtArrLength-1), 0);
        } else {
            this.Current = 0;
        }
    }

    switchCurrent(val) {
        if(this.ControlText && this.TxtArr) {
            this._current(val);
            this.ControlText.innerHTML = this.TxtArr[this.Current];
            var padding = this._padding(this.TxtWidthCache[this.MaxIndex], this.MaxWidth);
            this.ContentWarp.style['padding-left'] = padding[0]+'px';
            this.ControlText.style['width'] = padding[1]+'px';
        }
    }

    switchMode(val) {
        val = val || '';
        if(val!==this.Mode) {
            if(this.Mode!=='') {
                Core.removeClass(this, this.Mode);
            }
            this.Mode = val;
            Core.addClass(this, this.Mode);
            if(this.ControlText) {
                this.ControlText.switchMode(val);
            }
        }
    }

    _key(i,j) {
        return [i,j].join('_');
    }

    initMotion() {
        this.Motion = {}
        var i,j,
            arr = this.TxtArr,
            l = this.TxtArrLength;
        for(i=0;i<l;i++) {
            for(j=0;j<l;j++) {
                if(i!==j) {
                    this._initM(i,j, arr[j]);
                }
            }
        }
        this.Events.emit('initMotion');
    }

    _padding(w, base) {
        var range = base -w,
            l = range/2>>0,
            r = range - l;
        return [16+l,w+r];
    }

    _initM(i,j,txt) {
        var key = this._key(i,j),
            max = this.MaxWidth,
            cache = this.TxtWidthCache,
            pi = this._padding(cache[i], max),
            pj = this._padding(cache[j], max);
        
        var arg = [{
            dom: this.ControlText,
            frames: [
                { 
                    time: 0 , 
                    prop: { innerHTML: txt}
                }
            ]
        }];
        if(Math.abs(pi[1]-pj[1])>4) {
            arg = arg.concat([{
                dom: this.ControlText,
                frames: [
                    { 
                        time: 0,
                        css: {
                            'width': pi[1] + '.0px'
                        }
                    },
                    {
                        time: 10,
                        css: {
                            'width': pj[1] + '.0px'
                        }
                    }
                ]
            }, {
                dom: this. ContentWarp,
                frames: [
                    { time: 0, css: {'padding-left': pi[0] + '.0px'}},
                    { time: 10, css: {'padding-left': pj[0] + '.0px'}}
                ]
            }]);
        } 

        this.Motion[key] = mframe(arg, {
            end: ()=> {
                this._current(j);
            }
        });
    }

}
// The order is important in webpack
export default [
    Control,
    ControlIcon,
    ControlText,
    ControlArrow
];