import Base from './base';

class Scroll extends Base {

    constructor(con, shim, items, config) {
        super();
        super.init(con, shim, items, config);
        this.initDom();
    }

    initDom() {
        if(this.Config.direction === 'a') {
            this.switchClass('scroll-a');
            this.Step = this.Con.clientWidth;
            this.Items.forEach((item)=>{
                item.style.width = this.Step + 'px';
            });
            this.Shim.style.width = this.Step * this.Items.length + 'px';
            this.getFrames = this._getFrames_A;
        } else {
            this.switchClass('scroll-a');
            this.Step = this.Con.clientHeight;
            this.Items.forEach((item)=>{
                item.style.height = this.Step + 'px';
            });
            this.Shim.style.height = this.Step * this.Items.length + 'px';
            this.getFrames = this._getFrames_V;
        }
    }

    _getFrames_A(index) {
        return [
            { time: 0, prop: { scrollLeft: () => {
                return this.Con.scrollLeft;
            }} },
            { time: 20, prop: { scrollLeft: (this.Step * index >> 0) }, tween: 'easeInOut' }
        ];
    }

    _getFrames_V(index) {
        return [
            { time: 0, prop: { scrollTop: () => {
                return this.Con.scrollTop;
            }} },
            { time: 20, prop: { scrollTop: (this.Step * index >> 0) }, tween: 'easeInOut' }
        ];
    }

    getMotion(from, to) {
        var key = to,
            fromDom = this.Items[from],
            toDom = this.Items[to];

        if (this.MotionCache[key] === undefined) {
            this.MotionCache[key] = mframe([{
                dom: this.Con,
                frames: this.getFrames(to)
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

    hideItem() {

    }

    showItem(dom) {
        if(this.Config.direction === 'a') {
            this.Con.scrollLeft = dom.Index * this.Step;
        } else {
            this.Con.scrollTop = dom.Index * this.Step;
        }
    }

}

export default Scroll;
