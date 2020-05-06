import Base from './base';
import mframe from 'mframe';

class Fade extends Base {

    constructor(con, shim, items, config) {
        super();
        super.init(con, shim, items, config);
        this.initDom();
    }

    initDom() {
        this.switchClass('fade');
    }

    getMotion(from, to) {
        var key = from + '_' + to,
            fromDom = this.Items[from],
            toDom = this.Items[to];

        if(this.MotionCache[key]===undefined) {
            this.MotionCache[key] = mframe([{
                dom: fromDom,
                frames: [ 
                    { time: 0, css: { opacity: '1.0'}},
                    { time: 10, css: { opacity: '0.0', display: 'none'}}
                ]
            },{
                dom: toDom,
                frames: [ 
                    { time: 10, css: { opacity: '0.0', display: 'block', transform: 'scale(0.95)' }},
                    { time: 20, css: { opacity: '1.0', transform: 'scale(1.0)' }}
                ]
            }], {
                end: () => {
                    this.end();
                }
            });
        }
        return {
            M: this.MotionCache[key],
            from: fromDom,
            to: toDom
        };
    }

}

export default Fade;