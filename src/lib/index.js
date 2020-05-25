import Spinner from './spinner';
import LoadingDots from './loading-dots';
import InputLabel from './input-label';
import Tabs from './tabs';
import Toggle from './toggle';
import StateBar from './state-bar';
import Control from './control';
import LoadingBreakout from './loading-breakout';

const Components = [
    Spinner,
    LoadingDots,
    InputLabel,
    Toggle,
    StateBar,
    LoadingBreakout
].concat(Tabs).concat(Control);

const MotionUI  = {
    Components: Components,
    IfRegister: false,
    registerWindow : function (name, func) {
        if (typeof window !== 'undefined' && window[name] === undefined) {
            window[name] = func;
        }
    },
    registerAll: function() {
        if(!this.IfRegister) {
            for(let i = 0, l = this.Components.length;i<l;i++) {
                this.Components[i].register();
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