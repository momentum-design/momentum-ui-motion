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
    registerAll: function() {
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
MotionUI.registerWindow('mframe-components', MotionUI);

if(document && document.addEventListener) {
    document.addEventListener('DOMContentLoaded',function(){
        MotionUI.registerAll();
    });
} else {
    MotionUI.registerAll();
}

export default momentum_ui_motion;