import spinner from './spinner/index';
import loadingDots from './loading_dots/index';

const MotionUI  = {
    Components: {
        spinner,
        loadingDots
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
                values[i].register();
            }
            this.IfRegister = true;
        }
    }
}

MotionUI.registerWindow('momentum_ui_motion', MotionUI);
MotionUI.register();

export default momentum_ui_motion;