import spinner from './spinner';
import loadingDots from './loading-dots';
import inputLabel from './input-label';

const MotionUI  = {
    Components: {
        spinner,
        loadingDots,
        inputLabel
    },
    IfRegister: false,
    registerWindow : function (name, func) {
        if (typeof window !== 'undefined' && window[name] === undefined) {
            window[name] = func;
        }
    },
    register: function() {
        if(!this.IfRegister) {
            let values = Object.values(this.Components);
            for(let i = 0, l = values.length;i<l;i++) {
                window.customElements.define(values[i].Tag, values[i]);
            }
            this.IfRegister = true;
        }
    }
}

MotionUI.registerWindow('momentum_ui_motion', MotionUI);
MotionUI.register();

export default momentum_ui_motion;